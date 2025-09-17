const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");



const usersFile=path.join(__dirname,"users.json");
// Helper functions
function readUsers() {
  if (!fs.existsSync(usersFile)) {
    return []
}
  const data = fs.readFileSync(usersFile, "utf-8");
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}


function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

router.post('/',async(req,res)=>{
  const{username,password,confirmpassword}=req.body
  const users=readUsers();
  //details verification 
  if(!username||!password||!confirmpassword){
    return res.status(401).json({message:"All fiels are required"})
  }

  //password match checking 
  if(password!==confirmpassword){
     return res.status(400).json({message:"Re-enter password is incorrect"})
  }

  // check if user is already available or not 
  const existinguser=users.find((u)=>u.username==username)
  if(existinguser){
    return res.status(401).json({message:"User already available"})
  }

  //hashing the password 
  const hashedPassword = await bcrypt.hash(password, 10);

  //pushing the details 
  users.push({username,password:hashedPassword});

  //entering the new users 
  writeUsers(users);

  res.json({message:"Account created sucessfully"});

})

module.exports = router;
