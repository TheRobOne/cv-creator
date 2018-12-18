const express = require('express');
const router = express.Router();

let Cv = require('../models/cv');

router.post('/', (req, res) => {
    Cv.createCv(req.body, (err, cv) => {
        if(err) res.status(500).send({message: 'error while creating cv'});
        res.send({message: "New cv successfully created."})
    });
});

router.get('/:userID', (req, res) => {
    Cv.getUserCvs(req.params.userID, (err, cvs) => {
        if(err) res.status(500).send({message: 'error while getting cvs'});
        res.send(cvs);
    });
});

router.get('/:userID/:cvName', (req, res) => {
    Cv.getUserCvByName(req.params.userID, req.params.cvName, (err, cv) => {
        if(err) res.status(500).send({message: 'error while getting cv'});
        res.send(cv);
    });
});

router.delete('/:userID/:cvName', (req, res) => {
    Cv.removeCv(req.params.userID, req.params.cvName, (err, cv) => {
        if(err) res.status(500).send({message: 'error while deleting cv'});
        res.send({message: "Cv successfully deleted."})
    });
});

module.exports = router;