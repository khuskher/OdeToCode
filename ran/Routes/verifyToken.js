const jwt = require('jsonwebtoken')
const TOKEN_SERCRET ='bhbfwbqfjadcjkadefjwkj'

function auth (req,res,next){
    const token=req.header('auth-token')
    if(!token)return res.status(401).send('Access Denied')
    
    try{
        const verified =jwt.verify(token,TOKEN_SERCRET)
        req.user=verified 
    }
    catch(err){
        res.status(400).send('Invalid Token')
    }

}