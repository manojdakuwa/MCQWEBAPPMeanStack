const express = require('express');
const mongoose = require('mongoose');
const User = require('../Backend/models/user');
const Quiz = require('../Backend/models/quiz');
var cors = require('cors');


const app = express();

app.use(cors());
//DB config

const db = require('./config/key').mongoURI;
app.use(express.urlencoded({ extended: true }));

//connect to Mongo

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true ,
};
mongoose
.connect(db,connectionParams)
.then(()=>{
    console.log('connected to Mongo Db')
})
.catch(err=>console.log(err));

//All Routes goes down.

app.post('/api/register',express.json(), (req, res)=>{
console.log(req)
    let newUser = new User();
    newUser.email = req.body.email,
    newUser.name = req.body.name
    

    newUser.save((err, user) => {
        if (err) {
            console.log(err)
            res.json({ success: false, msg: 'Failed to Create User' });
        } else {
            console.log(user);
            return res.json({ success: true, msg: 'User Created', user: user});
        }
    });
});

app.post('/api/createQuiz',express.json(), (req, res) => {

    let newQuiz = new Quiz();
    newQuiz.title= req.body.question;
    newQuiz.mark= req.body.mark;
    newQuiz.name= req.body.name;
console.log(req.body);
    newQuiz.save((err,data)=> {
        if (err) {
            console.log(err)
            res.json({ success: false, msg: 'Failed to Create Quiz' });
        } else {
            console.log(data);
            return res.json({ success: true, msg: 'Quiz Created' });
        }
    });

});



const port = process.env.PORT || 5000 ;
app.listen(port, () => console.log("server started with port 5000"));


module.exports = app; // exporting for the future use


