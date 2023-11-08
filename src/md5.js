/**
 * 消息摘要算法，不可逆
 * */

const {enc,MD5} = require("crypto-js")

const plainText = "你好世界"
const md5Str = MD5(plainText).toString(enc.Base64) // 默认 hex

const md5Hex = MD5(plainText).toString()
const hexWordArray = enc.Hex.parse(md5Hex)
const base64Str = enc.Base64.stringify(hexWordArray)

console.log(md5Str,md5Str.length)
console.log("base64Str",base64Str,base64Str === md5Str)
