const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const Signup = require("./models/signupSchema");
const PORT = 3001;
app.use(express.json())
dotenv.config();
mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("Check your connection String", err);
  });
app.get("/", (req, res) => {
  res.sendFile("C:\\Users\\Shivaraj\\OneDrive\\Desktop\\mernday-1\\index.html");
});

app.post("/signup", (req, res) => {
  try {
    const { firstName, lastName, email, password, mobile } = req.body
    const newSignup = new Signup({
      firstName: "Shiva",
      lastName: "Raj",
      email: "shiva@sjit.ac.in",
      password: "Shiva",
      mobile: 7010901113,
    });
    newSignup.save();
    console.log("Signup successful");
    res.status(201).json({ message: "Signup successful", isSignup: true });
  } catch (err) {
    console.log("Signup unsuccessful");
    console.log(err);
    res.status(201).json({ message: "Signup unsuccessful", isSignup: false });
  }
});

app.listen(PORT, () => console.log("Server Started Successful"));
