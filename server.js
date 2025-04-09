// function add(a,b){
//     return a+b
// }

// const { json } = require("body-parser");

// var add = (a,b) => {return(a+b)};  

// var ans = add(2,5);
// console.log(ans);

// (function(){
//     console.log("Rishabh says Hii")
// })();

/*
function callback(){
    console.log("Addition Completed")
}

const add = function(a,b, callback){
    var ans = a+b;                              [CALLBACK]
    console.log("Answer: "+ans);
    callback();
}

add(2,6, callback)

*/

/*
var fs = require('fs');
var os = require('os');

var user = os.userInfo();                     
console.log(user);

fs.appendFile('greeting.txt', 'Hi'+user.username + '\n', ()=> console.log('File is created'))
console.log(fs);
*/

/*
const notes = require('./notes.js');
console.log("Server Page loaded");

var age = notes.age;
console.log(age);

var ans = notes.multiplyno(age+18, 10);
console.log(ans);
*/

/*
var _ = require('lodash');

var data = [ "Rishabh", "Rishabh", 2, 4, 2, "4", 'age'];      [Lodash]
var ans = _.uniq(data);
console.log(ans);
*/

/*
const jsonstring = '{"name" : "Rishabh", "age" : 20, "city" : "Korba"}';
const jsonobject = JSON.parse(jsonstring);                                     [JsonString to Object]
console.log(jsonobject.name);
*/

/*
const objectToConvert = {
    name: "Alice",
    age: 20                                           [Object to JsonString]
};
const json = JSON.stringify(objectToConvert);
console.log(json);
*/

const express = require('express')
const { size } = require('lodash')
const app = express()
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const Person = require('./models/Person');
const MenuItem = require('./models/menu');

app.get('/', function (req, res) {
  res.send('Welcome Back Cruel World!')
})

// app.get('/South', (req, res)=> {
//     res.send('Idlii Dosaa Sambar Chatni Chatni')
//   })

//   app.get('/Dosa', (req, res)=> {
//     var customized_dosa = {
//         name: 'Mysore Dosa',
//         size: '20 cm long',
//         is_sambar: true
//     }
//     res.send(customized_dosa)
//   })

/*
// Post route to add a person
app.post('/person', async (req, res) =>{
    try{
        const data = req.body;

        const newperson = new Person(data);

        const response = await newperson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

app.get('/person', async (req, res) =>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

app.post('/menu', async (req, res) =>{
    try{
        const data = req.body;
        const newmenu = new MenuItem(data);

        const response = await newmenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

app.get('/menu', async (req, res) =>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

app.get('/person/:workType', async (req, res) =>{
    try{
        const workType = req.params.workType;
        if(workType=='chef' || workType=='manager' || worktype=='waiter'){
        const response = await Person.find({work:workType});
        console.log("Response Fetched");
        res.status(200).json(response);
        }else{
        res.status(404).json({error: 'Inavalid WorkType'})
        }
    }catch{
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
*/

// import the router files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

// use routers
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

app.listen(3000, ()=>{
    console.log('Server is Running')
})