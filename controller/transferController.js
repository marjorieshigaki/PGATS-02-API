// controller/transferController.js
const express = require('express');
const router = express.Router();
const transferService = require('../service/transferService');

router.post('/', (req, res) => {
  try {
    const transfer = transferService.transfer(req.body);
    res.status(201).json({ message: 'Transferência realizada', transfer });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', (req, res) => {
  res.json(transferService.getTransfers());
});

module.exports = router;
