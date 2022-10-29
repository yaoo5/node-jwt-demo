import {describe, expect, test} from '@jest/globals';
import { sign, verify } from "./jwt";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
const secret = 'your-256-bit-secret';
const payload = {
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
};


describe('jwt test', () => {
    test('sign', () => {
        const tok = sign(payload, secret);

        expect(tok === token);
    })

    test('verify', () => {
        expect(verify(token, secret));
    })

    test('sign + verify', () => {
        const payload = {
            "name": "sign and verify test",
        }
        const secret = 'sign and verify';
        const token = sign(payload, secret);

        expect(verify(token, secret));
    })
})
