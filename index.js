const express = require("express");
const mongoose = require("mongoose");
// const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Route
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
  res.send("Hello from Node API!");
});

mongoose
  .connect(
    "mongodb+srv://corvo:UyDQOnWOnVaLcMJV@backenddb.t3vl9a6.mongodb.net/SimpleCRUD?retryWrites=true&w=majority&appName=BackEndDB"
  )
  .then(() => {
    console.log("Connected to Database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
