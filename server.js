const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
const { PORT } = require('./config/keys')


app.get('/api/v1/',(req,res)=>{
    res.json({message:"Success Ok"})
})



if(process.env.NODE_ENV == 'production'){
    const path = require('path');
    app.use(express.static(path.join(__dirname,'frontend','build')));
    app.get('/',(req,res)=>{
        res.sendFile(path.join(__dirname,'frontend','build','index.html'))
    })
    app.get('/*',(req,res)=>{
        res.sendFile(path.join(__dirname,'frontend','build','index.html'))
    })
}


app.listen(PORT)