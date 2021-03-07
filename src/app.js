const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Import Routes
const userRoutes = require('./routes/users');

//Start Data Base
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('Connected'))
.catch(error => handleError(error));


//Settings
app.set('port', process.env.PORT || 3000);


//Middleware
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/users', userRoutes);

// Start Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});