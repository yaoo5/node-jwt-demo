# node-jwt-demo

## Introduction
This is a [JWT](https://jwt.io/) demo based on Node.js.

## Examples
jwt.sign
```typescript
const secret = 'your-256-bit-secret';
const token = jwt.sign({
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
}, secret);
// expected: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```
jwt.verify
```typescript
const secret = 'your-256-bit-secret';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
jwt.verify(token, secret);
```

## Test
```shell
npm test
```
