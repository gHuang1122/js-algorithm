/**
 * 国密算法
 * */

const sm3 = require("sm3")

const plaintext = "breezy"

// const hash = sm3(plaintext)
const hash = sm3("")

console.log(hash)