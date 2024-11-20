const mongoose = require('mongoose');

const loanRequestSchema = new mongoose.Schema({
  loanAmount: { type: Number, required: true },
  userId: { type: String, required: false }, // Make this optional
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('LoanRequest', loanRequestSchema);
