/**
 * Base64 编码是一种用于将二进制数据转换为文本数据的编码方式。它将二进制数据转换为由 64 个不同的 ASCII 字符组成的文本字符串
 * 标准的base64 数据过长时会带有换行符，直接删除掉就行。不影响数据还原
 * */

const {enc} = require("crypto-js")

const plainText = "你好世界"
// const wordArray = enc.Utf8.parse(test).toString(enc.Base64)
const wordArray = enc.Utf8.parse(plainText)
const baseStr = enc.Base64.stringify(wordArray)
console.log(baseStr)
const originStr = enc.Base64.parse(baseStr).toString(enc.Utf8)
console.log(originStr)
