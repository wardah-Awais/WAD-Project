const express=require('express');
const mongoose=require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app=express();

//middleware to use express
app.use(express.json());
app.use(errorHandler);



//Routes
app.use('/auth', authRoutes);

const MONGO_URI='mongodb://localhost:27017/WAD-Project';

mongoose.connect(MONGO_URI)
.then(()=>console.log("MongoDB Connected!"))
.catch((err)=>console.error("MongoDB Connection Failed!",err));

app.get('/',(req,res)=>{
    res.send("API working!");
});

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000")
});