const mongoose = require("mongoose");
const express = require("express");
const app = express();

// require or import conn.js file
require("./db/conn");

// require or import userSchema.js file
//const User = require("./model/userSchema");

app.use(express.json());

//link the router files to make our route
app.use(require("./router/auth"));

// insrt value or document
// "createDocument" is a document name

//middleware
const middleware = (req, res, next) => {
  console.log("hellow my middleware");
  next();
};

//app.get("/", (req, res) => {
//res.send(" hellow world from the server app.js");
//});

app.get("/about", middleware, (req, res) => {
  console.log("hellow my About");
  res.send(" hellow world from About server");
});

app.get("/contact", (req, res) => {
  res.send(" hellow world from Contact server");
});

app.listen(5000, () => {
  console.log("server is running at prot 5000");
});
