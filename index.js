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
        return Dishes.findByIdAndUpdate(dish._id, //then we'll find dish by id ie the current dish inserted's id and update it, so that all can be used in next then
            {                                     //second parameter will be the thing to update
                $set: {description: 'Updated test'}
            }, 
            {
                new : true                        //Third para means, once update is finished, it'll return the updated dish back to us
            })
            .exec();     
    })
    .then((dish) => {
        console.log(dish);                //then we'll print all the dishes which we've got, from previous then
        dish.comments.push({
            rating: 5,
            comment: 'Good',
            author: 'Arpit'
        });
        return dish.save();
    })
    .then((dish) => {
        console.log(dish);
        return Dishes.remove({});           //This will remove all the dishes from the database
    })
    .then(() => {
        return mongoose.connection.close(); //Then we'll close the connection
    })
    .catch((err) => {
        console.log(err);
    });
});