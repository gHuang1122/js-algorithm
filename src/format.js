/**
 *  关于 Crypto-js 中的 format的使用
 * */

const CryptoJs = require("crypto-js")

const key = CryptoJs.enc.Utf8.parse("0123456789abcdef")
const iv = CryptoJs.enc.Utf8.parse("0123456789abcdef")

const obj = {
    name: "张三",
    age: 23
}

const plainText = CryptoJs.enc.Utf8.parse(JSON.stringify(obj))

const cfg = {
    iv,
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7,
    format: {
        // 加密后的 toString()
        stringify: (cipher) => {
            // console.log("stringify",cipher)
            // return cipher.toString()  // 这里如果这样就会形成循环调用了
            return cipher.ciphertext.toString()
        },
        // 解密后的 toString
        parse: (data) => {
            console.log("parse",data)
            const ret = CryptoJs.lib.CipherParams.create({ciphertext: CryptoJs.enc.Hex.parse(data)})
            return ret
        }
    }
}

const cipher = CryptoJs.AES.encrypt(plainText,key,cfg)
console.log(cipher.toString())

// 使用了 format 后 这里的第一个参数 就可以自定义传入了，而不是base64
const plain = CryptoJs.AES.decrypt(cipher.toString(),key,cfg)
console.log(plain.toString(CryptoJs.enc.Utf8))