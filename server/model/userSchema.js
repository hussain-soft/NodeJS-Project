const mongoose = require("mongoose");

// Documents schema in mongoose
// defines structure of the documents
// 'userSchema' is a scchema name

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  active: Boolean,
  Date: {
    type: Date,
    default: Date.now,
  },
});

// models or collections creation
//"User" is a collection name Must be singular and start with capital letter bcz its a class not an obj

const User = mongoose.model("User", userSchema);

module.exports = User;

/*
const createDocument = async () => {
  try {
    const dataOne = new User({
      name: "baloch",
      place: "kpk",
      active: true,
    });

    const result = await dataOne.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocument();*/
