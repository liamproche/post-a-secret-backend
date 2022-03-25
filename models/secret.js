const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const secretSchema = new Schema({
    secret: {type: String, require: true, minlength: 4},
    rating: {type: Number, required: true, default: 0, min: 0}
}, {timestamps: true})


const Secret = mongoose.model('Secret', secretSchema);


module.exports = Secret;