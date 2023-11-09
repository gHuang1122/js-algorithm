/**
 * 对称加密，密钥长度 8字节
 * */

const CryptoJs = require("crypto-js")

// const KEY = "aaaaaaaa"
const KEY = "````````"
const IV = "bbbbbbbb"
const plainText = "breezy"

const KEYBYTES = CryptoJs.enc.Utf8.parse(KEY)
const IVBYTES = CryptoJs.enc.Utf8.parse(IV)
const plainTextBytes = CryptoJs.enc.Utf8.parse(plainText)

console.log("plainText_hex",CryptoJs.enc.Hex.stringify(plainTextBytes))
console.log("plainText",plainText)

const cfg = {
    ecb:{
        iv: IVBYTES,
        // 加密模式
        mode:CryptoJs.mode.CBC, // ECB 默认加密模式
        // 填充方式
        padding:CryptoJs.pad.Pkcs7 // 默认填充方式
    }
}

const cipher = CryptoJs.DES.encrypt(plainTextBytes,KEYBYTES,cfg.ecb)
// console.log(cipher)
console.log(cipher.toString()) // 输出 base64 编码数据
const cipherTextHex = cipher.ciphertext.toString()
console.log("cipherTextHex",cipherTextHex) // 输出 hex 编码数据
// 注意这里输入 base64的密文
const origin = CryptoJs.DES.decrypt(cipher.toString(),KEYBYTES,cfg.ecb)
console.log(origin.toString(CryptoJs.enc.Utf8))


// DES 密钥 8个字节 64bit 实际只会用 56bit
// 01100001 01100001 01100001 01100001 01100001 01100001 01100001 01100001  aaaaaaaa
// 每个字节最后一位不会被用到
// 01100000 01100000 01100000 01100000 01100000 01100000 01100000 01100000  ````````  (用这个key结果也是一样的)