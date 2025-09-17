console.log("Server is running 🚀");
const cors = require("cors");
const express= require("express");
const app=express();

app.use(cors());
app.use(express.json());


const loginroute=require("./routes/loginserver")
const signuproute=require("./routes/signupserver");
const questionroute=require("./routes/questionroute");

app.use("/login", loginroute);
app.use("/signup", signuproute);
app.use("/ask",questionroute)


app.listen(5000,()=>{
    console.log("server is listening👍")
})

