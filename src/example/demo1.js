/**
 * 随机key,iv
 * */

const CrypotJs = require("crypto-js")

const plainText = "breezy"
const KEY = "随便什么都可以"

/**
 * 正常情况下，KEY是一个 wordArray, 这种传入字符串 实际上的key和iv都是根据 KEY 生成的
 * */
const cipher = CrypotJs.AES.encrypt(plainText,KEY)
// console.log(cipher)
console.log("key: ",cipher.key.toString())
console.log("iv: ",cipher.iv.toString())
console.log("salt: ",cipher.salt.toString())
console.log(cipher.toString())
const plain = CrypotJs.AES.decrypt(cipher.toString(),KEY)
console.log(plain.toString(CrypotJs.enc.Utf8))
