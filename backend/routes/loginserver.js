const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");


const usersFile=path.join(__dirname,"users.json");
// Helper functions
function readUsers() {
  if (!fs.existsSync(usersFile)) {
    return [];
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


router.post('/',async (req,res)=>{
    const{username,password}=req.body
    const users=readUsers();

    //details verification
    if(!username||!password){
        return res.status(401).json({message:"Details Required"})
    }
    //username verification
    const user =users.find((u)=>u.username=== username);
    if(!user){
        return res.status(401).json({message:"Username Invalid"})
    }
    //password verification  
    const ispasswordvalid= await bcrypt.compare(password,user.password);
    if(!ispasswordvalid){
         return res.status(401).json({message:"Password Invalid"})
    }
    res.json({message:"Login sucessfully"})
})

module.exports = router;
