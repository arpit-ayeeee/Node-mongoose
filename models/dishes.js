const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type: Number,
         min: 1,
         max: 5,
         required: true
    },
    comment: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    }
},{
    timestamps: true
});
const dishSchema = new Schema({
    name: {
        type: String,
        required: true,                 //Means, it's compulsory
        unique: true                    //Means no two docs should have the same name
    },
    description: {
        type: String,
        required: true
    },
    comments: [ commentSchema ]         //This will have an array for comments, for which there will be comentSchema for for each
},{
    timestamps: true                    //This will add created at and updated at, two timstamps to each doc stored in here.
});

var Dishes = mongoose.model('Dish', dishSchema);//We'll model the schema in order to export it
module.exports = Dishes;
