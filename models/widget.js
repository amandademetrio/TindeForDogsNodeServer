const mongoose = require('mongoose');

var DogSchema = new mongoose.Schema({
    name: {
        type:String
    },
    picture: {
        type:String
    },
    gender: {
        type:String
    },
    age: {
        type:String
    },
    breed: {
        type:String
    },
    size: {
        type:String
    },
    health: {
        type:String
    },
    adoption_fee: {
        type:String
    },
    description: {
        type:String
    },
    lat: {
        type:Number
    },
    long: {
        type:Number
    },
    email: {
        type:String
    },
    phone: {
        type:String
    },
}, {timestamps: true});

mongoose.model('Dog',DogSchema)