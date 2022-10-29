import { Buffer } from 'buffer';
import crypto from "crypto";

export function sign(payload: Record<string, any>, secret: string): string {
    const header = { alg: 'HS256', typ: "JWT" };
    const header64 = base64encode(JSON.stringify(header));
    const payload64 = base64encode(JSON.stringify(payload));
    const signature = HS256(`${header64}.${payload64}`, secret);

    return `${header64}.${payload64}.${signature}`;
}

export function verify(token: string, secret: string): boolean {
    const [header, payload, signature] = token.split('.');

    return signature === HS256(`${header}.${payload}`, secret)
}

export function HS256(text: string, secret: string): string {
    const hex = crypto.createHmac('sha256', secret)
        .update(text)
        .digest('base64');

    return fromBase64(hex);
}

export function base64encode(str: string): string {
    return fromBase64(Buffer.from(str, 'utf8').toString('base64'));
}

export function fromBase64(base64:string): string {
    return base64
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

