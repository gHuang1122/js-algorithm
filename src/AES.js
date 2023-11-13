/**
 * 密钥长度 128bit、192、256
 * 分组长度 128bit
 * 向量长度 128
 * 加密轮数 与密钥长度有关，127-10、192-12、256-14
 * */

const CryptoJs = require("crypto-js")


const key = CryptoJs.enc.Utf8.parse("0123456789abcdef")
const iv = CryptoJs.enc.Utf8.parse("0123456789abcdef")
const plainText = "breezy"

const cfg = {
    iv,
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7
}

const cipher = CryptoJs.AES.encrypt(plainText,key,cfg)
console.log(cipher.ciphertext.toString())

const origin = CryptoJs.AES.decrypt(cipher.toString(),key,cfg)

console.log(origin.toString(CryptoJs.enc.Utf8))

