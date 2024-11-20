const express = require('express')
const app = express()
const cors = require('cors')


app.listen(8000,() => {console.log("Server running in the port 8000")})

const mongoose = require('mongoose')
const userModel = require('./models/userModel')
const BalanceModel = require('./models/BalanceModel')
const LoanRequest = require('./models/LoanRequest')

// Middlewares 
app.use(cors())
app.use(express.json())
app.use(express.static('public'));

// Routes

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

// API routes

app.post("/api/dashboard", async (req, res) => {
    const { type, amount } = req.body;
  
    // Check if the balance exists
    let data = await BalanceModel.findOne();
    if (!data) {
      data = new BalanceModel({ balance: 0, transactions: [] });
      await data.save();
    }
  
    // Handle transaction
    if (type === "Deposit") {
      data.balance += amount;
    } else if (type === "Withdraw") {
      if (data.balance < amount) {
        return res.status(400).send("Insufficient balance");
      }
      data.balance -= amount;
    }
  
    // Add transaction
    data.transactions.push({ type, amount, date: new Date() });
    await data.save();
    res.json(data);
  });

app.get("/api/dashboard", async (req, res) => {
    const data = await BalanceModel.findOne();
    if (!data) {
      const newBalance = new Balance();
      await newBalance.save();
      return res.json(newBalance);
    }
    res.json(data);
  });
  
  
  // Creating Amount 
app.post('/api/request-loan',(req,res) => {
  LoanRequest.create(req.body)
  .then((result) => res.json(result))
  .catch(err => res.json(err))
})


