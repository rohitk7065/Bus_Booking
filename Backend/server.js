const express = require("express");
const connectDB = require("./config/db");
const app = express();
const morgan= require('morgan')
const PORT=8000

// connectDB();

app.use(express.json({ extended: false }));

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send("hello user....")
})

// routes
app.use('/Api/User',require('./routes/users'))
app.use('/Api/Admins',require('./routes/Admin'))

app.use((req,res,next)=>{
    const error=new Error('Not found')
    err.status=404;
    next(error)
})
app.use((err,req,res,next)=>{
    res.status(err.status||500)
    res.json({
        err:{
            message:err.message
        }
    })
})

// app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
module.exports=app
