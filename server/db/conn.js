const mongoose = require("mongoose");

//connection creation
//"test1" database name if present ok other wise create automatically
mongoose
  .connect("mongodb://localhost:27017/test1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful.."))
  .catch((err) => console.log(err));
