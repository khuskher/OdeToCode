const express= require("express")
const cors = require("cors")
const dotenv=require('dotenv')
const { default: mongoose } = require("mongoose")
const app = new express()
dotenv.config()
const authRoute= require("./Routes/auth")
const path= require('path')

const db="mongodb+srv://Hrishikesh:Hrishi2931@cluster0.kobd50w.mongodb.net/test"
//connected to mongoose

app.use(express.static(path.join(__dirname,"/public")))
console.log(path.join(__dirname,"/public"))

app.get("/api/user/form", (req, res)=>{

    res.sendFile(__dirname+'/public/login.html')


})
app.get("/api/user/admin", (req, res)=>{

    res.sendFile(__dirname+'/public/star.html')

})
mongoose.connect(db,{
    useNewUrlParser: true , 
} ).then(()=>{
    console.log("ConnectionSuccesful")

}).catch((err)=>{
    console.log(err);
})
//middleware
app.use(cors())
app.use(
    express.urlencoded({ extended: true})
);
app.use(express.json())

//middleware routes


 app.use('/api/user',authRoute)

app.listen("4000",()=>(console.log("Server litening ")))
 