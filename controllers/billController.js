require("dotenv").config();
const Flutterwave = require("flutterwave-node-v3");
const flw = new Flutterwave(process.env.PUBLIC_KEY, process.env.SECRET_KEY);

// get all bills
const getBillsCategories = async (req, res) => {
  try {
    const categories = await flw.Bills.fetch_bills_Cat();
    // res.json(categories);
    res.status(200).json(categories);
    // console.log(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

module.exports = {
  getBillsCategories,
};
