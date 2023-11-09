/**
 * DESede 也叫 3DES 密钥长度 24字节 分组长度 8
 *
 * 本质是 把 des 计算三次,des的密钥长度位8，将 3DES 的密钥分每8个字节为1组，使用DES 也可以还原。如果要保证 3DES 和 DES 结果不一致。保证前8个字节和中间8个字节不一致即可
 * */

const CryptoJs = require("crypto-js")

const key = CryptoJs.enc.Utf8.parse("aaaaaaaaaaaaaaaabbbbbbbb")
const iv = CryptoJs.enc.Utf8.parse("aaaaaaaa")
const plainText = "breezy"

const cfg = {
    iv,
    mode:CryptoJs.mode.CBC,
    padding:CryptoJs.pad.Pkcs7
}

const cipher = CryptoJs.TripleDES.encrypt(plainText,key,cfg)
// console.log(cipher)
const cipherHex = cipher.ciphertext.toString()
console.log("cipher",cipherHex)
const origin = CryptoJs.TripleDES.decrypt(cipher.toString(),key,cfg)
console.log(origin.toString(CryptoJs.enc.Utf8))