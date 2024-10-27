const express = require('express')
const app = express()
const cors = require('cors')

app.listen(8000,() => {console.log("Server running in the port 8000")})

const mongoose = require('mongoose')
const userModel = require('./models/userModel')

// Middlewares 
app.use(cors())
app.use(express.json())
// app.use('/api',checkoutRoute) 

// DB - CONNECTION
mongoose.connect("mongodb://localhost:27017/Banking_ms")
.then((con) => console.log("Mongoose connected to the host : "+con.connection.host))
.catch(err => console.log(err))

// Creating User 
app.post('/register',(req,res) => {
    userModel.create(req.body)
    .then((result) => res.json(result))
    .catch(err => res.json(err))
})

// Login validation 

app.post('/login',(req,res) => {
    const {email,password} = req.body
    userModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password)
                res.json('success')
            else
                res.json('password incorrect')
        }
        else{
            res.json('no record exists ')
        }
    })
    .catch(err => res.json(err))
})



