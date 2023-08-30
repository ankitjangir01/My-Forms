const mongoose = require('mongoose');
const {Schema} = mongoose;

const formSchema = new Schema({
    author: Number,
    questions:{
        type: [{QNo: Number, Q:String}]
    },
    openingDate: String,
    closingDate: String,
    open: Boolean
})

const Form = mongoose.model('forms', formSchema);
module.exports = Form;