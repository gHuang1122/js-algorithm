/**
 * 不可逆
 * */
const Cryptojs = require("crypto-js")

const plainText = "你好世界";
const wordArray = Cryptojs.enc.Utf8.parse(plainText)
console.log(Cryptojs.SHA1(wordArray).toString())
console.log(Cryptojs.SHA256(wordArray).toString())
console.log(Cryptojs.SHA512(wordArray).toString())
console.log(Cryptojs.SHA224(wordArray).toString())
console.log(Cryptojs.SHA384(wordArray).toString())
console.log(Cryptojs.SHA3(wordArray).toString())
