const NodeRSA = require('node-rsa');

// 替换成你的公钥和私钥
const publicKey = `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvs7lkFIX76g+HKMe2GC7
R9J+UqfvjSzhjKlFvIIQmT63rDb9koLOMSfFC2LKuwH1xcegAl6IPMXkDKhzFkPD
O387MNiLZX7Gjiq0wwLJWbuZkirKrRMwKbGrU0XE0ys5jllNOzIuoy2u1uK1MFiF
sq29VQEHTQO8ZNXIZpmi6yc4F2Hzer95/r5PJZTZmuNA8vZv6PDMg2X3+nfivBj0
xr8u2DUoygPVAx2cyxE8v47D/QmYhwB54gRO7WqVnE90m6SeBfhbO9+Lbzkc4Rqj
CYBY3q8VRSGtntay+UvYNrRON7QlP2mzzAqkK1FHsvpU3cwilJfGPqRWsXGUcBNE
yQIDAQAB
-----END PUBLIC KEY-----
`;
const privateKey = `
-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC+zuWQUhfvqD4c
ox7YYLtH0n5Sp++NLOGMqUW8ghCZPresNv2Sgs4xJ8ULYsq7AfXFx6ACXog8xeQM
qHMWQ8M7fzsw2ItlfsaOKrTDAslZu5mSKsqtEzApsatTRcTTKzmOWU07Mi6jLa7W
4rUwWIWyrb1VAQdNA7xk1chmmaLrJzgXYfN6v3n+vk8llNma40Dy9m/o8MyDZff6
d+K8GPTGvy7YNSjKA9UDHZzLETy/jsP9CZiHAHniBE7tapWcT3SbpJ4F+Fs734tv
ORzhGqMJgFjerxVFIa2e1rL5S9g2tE43tCU/abPMCqQrUUey+lTdzCKUl8Y+pFax
cZRwE0TJAgMBAAECggEAWdm5tl1CEkPKg9e4dbIPXsHbZHbaUkN5LrCjOyKQSGmF
Ol5mx/A6wmD04+iwiKFip7DaQ2NaiiuxuNg14Z0lOUYvjE/cTH4HZ/jqSA5u3Id/
yJnH+PpZKrkUcVEgX0QyhTq+KIr39TVU6LG3Gr4Er2ArEPU8B+MjeuREyzO7yTlN
HlwD2uQ/Sj1o3owcHQKqcW/gilzq9WHNlSyAWJNlDfN4VwZoISsPhveGPPkrtqlR
CFA//o5IlfcvliWfH6txC5bjiBT30CTjGkI0dEqMtnNW0rlFpBN2Y18reIq5A9lq
U9vhFVrFGzmAVWzgkMKXmsIkBzKjsZtRxLwbUMWxBQKBgQDrJ95LV3Q6ck7OOrcx
tAVEx2gF16pLuTukDvL0+JXOIxsADzgQ7T+xTf6iuc7uZ2/apn8glIuXvDaXjYiN
0GYC9X8thNQZ2/NZWl/Yn5M87KsQiYiOX0lSM5s64BecEw6b1wzCwu70FO9sFnz6
PGK24kjKjyCk77QeDuPUHU+47wKBgQDPuLK2yb7qc6bdgE4b9bWM2M71vbak3yEj
D6T4EvdpfOPL84dh18/0V2JXRvFJ8NpSDVuW6BfvD7LX5+HJo0KrjLap3+1qkWom
F/T1Zam7oOKLXbf9Vaw0tM5+4MlQDSndGqo/PvzqDecjBTMEl6flzuc8s8bB2C7u
JsGc4O+txwKBgB9Bmlt7UVifbvgcd9MkcXrV4m68XsdX5KSG1CZZkFfo9KLKYxJk
5o1jp4/rkKTBnO18KfOjqvZNLxhv2JG4/IYyKWhcenDBepQK3iiF9WUotAgrr7n0
0mMZtu1Zcent4og2Slzs2iQZUEWWq5/7PMfARhqecaFatx8zrXa5OqqDAoGAJBdo
XeAh3uSnWpcfezYvDEDjfMkwwebPACOIu124RUjg35/5puNzi3XfbWCzLfC+TkFp
54d+GRh2L5NnpLxMKjhxyIRS4RBRDDtfYX//hM1Ib4SiIk9Pc3zy4BK4h8MxwewP
JpwQH664uVn+6k5bas+PV/m4kBe618A+Jb7jhiMCgYBmDQCbYDB+OGMkSoRTGCBG
Qk9EJ9y5xP8y+IhUSyYCtQL7q+t+HdAM64xVUGMHEKhEWIkrEoTSBk8+Vipwddh5
a26C5a2vdGYYQlmVqnWr+TvWogqK1ejEE7w1/jqJgEbCjfGvEu/jVqbkxYAA82Dn
W4dFKRGCBz0XpQnoUsonGA==
-----END PRIVATE KEY-----

`;

// 要加密的数据
const plaintext = 'Hello, World!';

// 创建 RSA 实例
const key = new NodeRSA();
key.importKey(publicKey, 'pkcs8-public-pem');

// 使用公钥加密数据
const encrypted = key.encrypt(plaintext, 'base64');

console.log('加密后的数据:', encrypted);

// 使用私钥解密数据
key.importKey(privateKey, 'pkcs8-private-pem');
const decrypted = key.decrypt(encrypted, 'utf8');

console.log('解密后的数据:', decrypted);
