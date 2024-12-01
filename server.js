const express = require('express');
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({"name":"agile-node-app"});
})

app.use('/students',(req,res)=>{
res.status(200).json([
    {
        "name":"Abhi",
        "age":28
    },
    {
        "name":"Appu",
        "age":26
    }
])
})

app.listen(3000);