/**
 * 与md5、sha的区别，多了一个密钥
 * */

const Cryptojs = require("crypto-js")
const KEY = "breezy"
const plainText = "你好,世界"

console.log(Cryptojs.HmacMD5(plainText,KEY).toString())
console.log(Cryptojs.HmacSHA1(plainText,KEY).toString())
console.log(Cryptojs.HmacSHA256(plainText,KEY).toString())
console.log(Cryptojs.HmacSHA512(plainText,KEY).toString())


const  sha1 = Cryptojs.algo.HMAC.create(Cryptojs.algo.SHA1.create(),KEY)
sha1.update(plainText)

console.log(sha1.finalize().toString())