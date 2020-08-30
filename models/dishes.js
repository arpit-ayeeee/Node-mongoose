const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const commentSchema = new Schema({

// });
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
    comments : []
},{
    timestamps: true                    //This will add created at and updated at, two timstamps to each doc stored in here.
});

var Dishes = mongoose.model('Dish', dishSchema);//We'll model the schema in order to export it
module.exports = Dishes;
