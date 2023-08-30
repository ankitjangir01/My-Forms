var express = require('express');
var app = express();
var Form = require('./../models/form');
var mongo = require('mongodb');

//create form
app.post('/createform', async (req, res) => {
    const form = new Form({
        author: 0,
        questions: req.body.questions,
        openingDate: req.body.openingDate,
        closingDate: req.body.closingDate,
        open: true
    })
    await form.save()
        .then(() => {
            res.status(200).send('Document saved successfully');
        })
        .catch(err => {
            console.log("form wasn't created", err);
        })
})


//get form
app.get('/getform', async (req, res) => {
    // const o_id = new mongo.ObjectId(req.body.formId);
    const form = await Form.find({ 'author': 0 })
        .then(() => {
            console.log(form)
            res.status(200).send(form);
        })
        .catch((err) => {
            return err;
        })
})

module.exports = app;