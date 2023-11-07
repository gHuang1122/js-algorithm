/**
 *  utf-8 编码范围
 *  1字节：(0-127) 8位
 *  2字节：(128-2047) 16位
 *  3字节：(2048-65535) 24位
 *  4字节：(65536-1114111) 32位
 *
 *  固定方法，不需要理解，知道怎么用就可以了
 *  实际使用还是使用Buffer转
 *  字符串转hex字符串，本质就是将字符的ASCII或unicode码点值转成16进制字符串
 * */

function stringToHex(inputString) {
    let utf8Hex = '';
    for (let i = 0; i < inputString.length; i++) {
        const charCode = inputString.charCodeAt(i);
        if (charCode <= 127) {
            // ASCII字符，一个字节表示
            utf8Hex += charCode.toString(16).padStart(2, '0');
        } else if (charCode <= 2047) {
            // 2字节UTF-8字符
            utf8Hex += ((charCode >> 6) | 192).toString(16);
            utf8Hex += ((charCode & 63) | 128).toString(16);
        } else if (charCode <= 65535) {
            // 3字节UTF-8字符
            utf8Hex += ((charCode >> 12) | 224).toString(16);
            utf8Hex += (((charCode >> 6) & 63) | 128).toString(16);
            utf8Hex += ((charCode & 63) | 128).toString(16);
        } else if (charCode <= 1114111) {
            // 4字节UTF-8字符
            utf8Hex += ((charCode >> 18) | 240).toString(16);
            utf8Hex += (((charCode >> 12) & 63) | 128).toString(16);
            utf8Hex += (((charCode >> 6) & 63) | 128).toString(16);
            utf8Hex += ((charCode & 63) | 128).toString(16);
        }
    }
    return utf8Hex;
}

// 复杂字符有问题
// const testStr = "é你好，世界！🌎";
const testStr = "你好,世界";
const hex = stringToHex(testStr)
const targetHex = Buffer.from(testStr, 'utf-8').toString('hex')
console.log("hex",hex)
console.log("targetHex",targetHex)
console.log(hex == targetHex)