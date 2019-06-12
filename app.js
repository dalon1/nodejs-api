//import express from 'express';
const express = require('express')
var db = require('./db/stock')
const app = express();

// welcome apis
app.get('/welcome', (req, res) => {
    res.status(200).send({
        message: 'Welcome, user!'
    })
});


app.get('/welcome/:user', (req, res) => {
    let user = req.params.user;
    res.status(200).send({
        message: 'Welcome, ' + user + '!'
    });
});

// stocks apis
app.get('/stocks', (req, res) => {
    res.status(200).send({
        stocks: db.stocks
    })
});

app.get('/stocks/:id', (req, res) => {
    let id = req.params.id;
    let stock = null
    db.stocks.forEach(s => {
        if (s.id == id)
            stock = s
    });
    if (stock != null) {
        res.status(200).send({
            stock: stock,
            status: 'success'
        });
    } else {
        res.status(404).send({
            message: 'Stock with id ' + id + ' is not found in db!' 
        })
    }
    
});


const PORT = '8070'

app.listen(PORT, () => {
    console.log("Running on server port " + PORT)
});