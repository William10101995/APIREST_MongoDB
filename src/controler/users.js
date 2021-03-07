const cars = require('../models/cars');
const { findByIdAndUpdate, findByIdAndDelete } = require('../models/user'); //Manejo de errores express-promise-router
const User = require('../models/user'); //Obtengo los usuarios

//Manejo de datos
module.exports = {

index: async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json(users);
},


newUser: async (req, res, next) => {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(200).json(user);
},

getUser: async (req,res,next) => {
    const {userId} = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
},

replaceUser: async (req,res,next) => {
    const{userId} = req.params;
    const newUser = req.body;
    const oldUser = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({success: true})
},

updateUser: async (req,res,next) => {
    const{userId} = req.params;
    const newUser = req.body;
    const oldUser = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({success: true})
},

deleteUser: async (req,res,next) => {
    const{userId} = req.params;
    await User.findByIdAndDelete(userId);
    res.status(200).json({success: true})
},

getUsersCars: async (req, res, next) => {
    const {userId} = req.params;
    const user = await User.findById(userId).populate('cars');
    res.status(200).json(user);
},

newUserCar: async (req, res, next) => {
    const{userId} = req.params;
    const newCar = new cars(req.body);
    const user = await User.findById(userId);
    newCar.seller = user;
    await newCar.save();
    user.cars.push(newCar);
    await user.save();
    res.status(200).json(newCar);
}
}