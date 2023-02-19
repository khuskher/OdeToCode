const router=require('express').Router();
const User=require('../model/User')
const{registerValidation,loginValidation} = require('./validation')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const TOKEN_SERCRET = "bhbfwbqfjadcjkadefjwkj"
module.exports=router ;


router.post('/form',async (req,res)=>
{
    // VALIDATE USER BEFORE GETIINGG DATA 

    
  const {error} =  registerValidation(req.body)
  if(error)
  return res.status(400).send(error.details[0].message)
 
   //checking if user already in databse 
   const emailExist= await User.findOne({email: req.body.email})
   if(emailExist)return res.status(400).send('Email Already exist')

   // Hash Passwords 
   const salt=await bcrypt.genSalt(10)
   const hashedPassword=  await bcrypt.hash(req.body.password,salt)



   // saving a user 
    const user= new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword

    });
    console.log(req.body)
    try{
        const savedUser = await user.save()
        console.log("Everything working")
        return res.redirect('/api/user/admin');
        

    }
    catch(err) {
        console.log(err)
        res.status(400).send(err)
       
    }
})

//LOGIN
router.post('/login',async (req,res)=>{
    // VALIDATE USER BEFORE GETIINGG DATA 

  const {error} =  registerValidation(req.body)
  if(error)
  return res.status(400).send(error.details[0].message)


   //checking if user already in databse 
  const user=  await User.findOne({email: req.body.email})
  if(!user)return res.status(400).send('Email does not  exist ')
   // check password 
  const validPass= await bcrypt.compare (req.body.password,user.password)
  if(!validPass) return res.status(400).send('Invalid Password')

//   //Create and assign tokenn
//   const token = jwt.sign({_id:user._id},TOKEN_SERCRET)
//   res.header('auth-token',token).send(token)

   res.send("Top Secret Document")


})

