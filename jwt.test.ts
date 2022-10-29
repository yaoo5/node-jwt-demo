
import { sign, verify } from './jwt';

const secret = 'your-256-bit-secret';
const jwt = sign(
    {
        "sub": "1234567890",
        "name": "John Doe",
        "iat": 1516239022
    },
    secret);

const expect = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
const [exHeader, exPayload, exSignature] = expect.split('.');

const [actualHeader, actualPayload, actualSignature] = jwt.split('.');

console.log(
    `header verified: ${exHeader === actualHeader}\n` +
    `payload verified: ${exPayload === actualPayload}\n` +
    `signature verified: ${exSignature === actualSignature}\n` +
    `jwt, ${jwt}`
);

console.log('expect from jwt.io is: ', verify(expect, secret));

