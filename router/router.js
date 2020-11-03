const router = require('express').Router()

const db = require('../data/config')

router.get('/testing', (req,res)=>{ 
    db('cars')
    .then(data => res.status(200).json({message: "hello chap"}))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
 })

module.exports = router