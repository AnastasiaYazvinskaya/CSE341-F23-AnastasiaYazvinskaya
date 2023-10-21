const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const randomData = require('../public/randomContact');

const getContacts = async (req, res, next) => {
    const result = await mongodb.getDb().db('cse341').collection('contact').find();
    result.toArray().then((list) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(list);
    });
};
const getContact = async (req, res, next) => {
    const id = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('cse341').collection('contact').find({_id: id});
    result.toArray().then((list) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(list[0]);
    });
};
const addContact = async (req, res, next) => {
    const newContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result = await mongodb.getDb().db('cse341').collection('contact').insertOne(newContact);
    
    if (result.acknowledged) {
        console.log(`New contact created with the following id: ${result.insertedId}`);
        res.status(201).json(result);
    } else {
        res.status(500).json(result.error || 'Contact creation failed');
    }
};
const addRandomContact = async (req, res, next) => {
    const result = await mongodb.getDb().db('cse341').collection('contact').insertOne(randomData.randomContact());
    if (result.acknowledged) {
        console.log(`New contact created with the following id: ${result.insertedId}`);
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json(result);
    } else {
        res.status(500).json(result.error || 'Contact creation failed');
    }
};
const editContact = async (req, res, next) => {
    const id = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('cse341').collection('contact').find({_id: id});
    result.toArray().then((list) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(list[0]);
    });
};
const deleteContact = async (req, res, next) => {
    const id = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('cse341').collection('contact').find({_id: id});
    result.toArray().then((list) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(list[0]);
    });
};

module.exports = { getContacts, getContact, addContact, editContact, deleteContact, addRandomContact };


