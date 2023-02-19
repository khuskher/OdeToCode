const express = require('express')
const app = new express()
const path =  require('path')

console.log(path.join(process.cwd(),'../client','public','index.html'))
console.log(path.join(process.cwd(),'../client','src'))