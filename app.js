const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Car = require("./models/allCar")
const PORT = 3003
const cors = require('cors')
require('dotenv/config')

app.use(cors())
// AGAR DATA MUNCUL DALAM FORMAT JSON 
app.use(express.json())

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// ketika ingin mengubah data tapi tidak dalam bentuk format
app.use(express.urlencoded({extended:false}))


// routes
app.get('/car', async(req, res) => {
    try {
        const cars = await Car.find({})
        res.status(200).json(cars)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
  })

// UNTUK MENCARI BERDASAR KAN ID
  app.get('/car/:id', async(req, res) => {
    try {
        const {id} = req.params
        const car = await Car.findById(id)
        res.status(200).json(car)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
  })


// UNTUK MENAMBAHKAN ISI DARI DATABASE MONGODB
  app.post('/car', async(req, res) => {
    try {
        const car = await Car.create(req.body)
        res.status(200).json(car)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
  })

// UNTUK MENGUPDATE DATABASE /  car
app.put('/car/:id', async(req, res) => {
    try {
        const {id} = req.params
        const car = await car.findByIdAndUpdate(id, req.body)
        // jika kita tidak menemuhkan produk di database 
        if(!car) {
            return res.status(404).json({message:`Cannot find any car with ID ${id}`})
        }
        // untuk menampilkan hasil di postman 
        const updatecar = await car.findById(id)
        res.status(200).json(updatecar)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
  })



mongoose.set("strictQuery",false)
mongoose.connect("mongodb+srv://EarlandoMoza:moza20040316@cluster0.uppv2pg.mongodb.net/apiIF2C?retryWrites=true&w=majority")
.then(() => {
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })
    console.log(`connected to mongoDB`);
}).catch(error => {
    console.log(error);
})
