const { request } = require("express");
const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(" hellow world from the server router.js");
});

/*router.post("/register", (req, res) => {
  const { email, password } = req.body;

  //validation
  if (!email || !password) {
    return res.status(422).json({ error: "Plz filled the field properly" });
  }

  //check user exist or not
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email Already Exists" });
      }
      const user = new User({ email, password });

      user
        .save()
        .then(() => {
          res.status(201).json({ error: "Register successfully" });
        })
        .catch((err) => res.status(500).json({ error: "failed to register" }));
    })
    .catch((err) => {
      console.log(err);
    });
});*/

//Login route

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "please filled the data" });
    }
    const userLogin = await User.findOne({ email: email });
    //console.log(userLogin);
    if (userLogin) {
      const isMatch = await User.findOne({ password: password });

      if (!isMatch) {
        res.status(400).json({ error: "invalid Password" });
      } else {
        res.json({ message: "user signin successfully" });
      }
    } else {
      res.status(400).json({ error: "invalid Email" });
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
