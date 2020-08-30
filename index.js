const mongoose =require('mongoose');
const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);      //mongoose supports connect method which allows us to connect to mongodb server

connect.then((db) => {                      //Then we'll perform operations using schema
    console.log("Connected correctly to server!");

    //Now we'll call the schema, create dishes and input the two parameters
    Dishes.create({
        name: 'Uthapizza',
        description: 'test'
    })                         //then we'll save it
    .then((dish) => {                       //and later we'll display it
        console.log(dish);
        
        return Dishes.find({});      //then we'll find all dishes and return it, so that all can be used in next then
    })
    .then((dishes) => {
        console.log(dishes);                //then we'll print all the dishes which we've got, from previous then
        return Dishes.remove({});           //This will remove all the dishes from the database
    })
    .then(() => {
        return mongoose.connection.close(); //Then we'll close the connection
    })
    .catch((err) => {
        console.log(err);
    });
});