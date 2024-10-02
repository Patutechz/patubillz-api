const express = require("express");
const {
  getBillsCategories,
} = require("../controllers/billController");

const router = express.Router();

// Get All bills
router.get("/", getBillsCategories);

module.exports = router;