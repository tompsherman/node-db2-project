const router = require('express').Router()

const db = require('../data/config')

router.get('/', (req,res)=>{ 
    db('cars')
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
 })

 router.post('/', (req,res)=>{
     const carData = req.body 
     db('cars').insert(carData)
     .then(car=>{
         db('cars').where({id})
         .then(newCar =>{
            res.status(201).json(newCar)
         })
     })
     .catch(error => res.status(500).json({message: `${error.message}; ${error.stack}`}))
  })

module.exports = router