const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema ({
    marca: String,
    modelo: String,
    year: Number,
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }


});

module.exports = mongoose.model('cars', carSchema);