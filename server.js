require("dotenv").config();

const express = require("express");
// const Flutterwave = require("flutterwave-node-v3");
const cors = require("cors");
const billRoutes = require('./routes/bills');

// express app
const app = express();

// flutterwave
// const flw = new Flutterwave(process.env.PUBLIC_KEY, process.env.SECRET_KEY);

//middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/bills', billRoutes);

app.listen(process.env.PORT, () => {
  console.log("connected to listening on port", process.env.PORT);
});
