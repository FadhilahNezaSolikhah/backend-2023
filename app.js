// import express
const express = require('express');

// membuat object app dari express
const app = express();

// menggunakan middleware
app.use(express.json());

// mendefinisikan route
const route = require('./routes/api.js');
app.use(route);

// definisikan port
app.listen(3000, () => {
    console.log('Server is running at https://127.0.0.1:3000');
});


 