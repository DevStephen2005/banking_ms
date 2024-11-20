const mongoose = require("mongoose");

// Transaction Schema
const transactionSchema = new mongoose.Schema({
  date: { type: Date, required: true, default: Date.now },
  type: { type: String, enum: ["Deposit", "Withdraw"], required: true },
  amount: { type: Number, required: true },
});

// Balance Schema
const balanceSchema = new mongoose.Schema({
  balance: { type: Number, required: true, default: 0 },
  transactions: [transactionSchema],
});

// Balance Model
const BalanceModel = mongoose.model("Balance", balanceSchema);

module.exports = BalanceModel;
