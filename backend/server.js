const express = require('express');
const app = express();
const cors = require('cors')
const User = require("./src/models/users")
app.use(express.json());

//db connection
require("./src/database/connection");

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Hello, app is working')
})

app.post('/login', (req, res) => {
    const user = User.create({email: req.body.email, password: req.body.password}).catch((err)=>{
        console.log(err);
    });
    res.json(req.body)
});

app.listen(3001, ()=>{
    console.log('App running on port 3001');
});