// const dotenv = require('dotenv');
// dotenv.config();
// const cors = require('cors')
// const express = require('express')
// const app = express()
// const connectToDb = require('./db/db.js');
// connectToDb();

// app.use(cors());

// app.get('/' , (req,res) => {
//     res.send("Hello World")
// })

// module.exports = app



const dotenv = require('dotenv');
dotenv.config();

console.log('🌍 DB_CONNECT from env:', process.env.DB_CONNECT); // 👈 ye line add karo

const cors = require('cors');
const express = require('express');
const app = express();

const connectToDb = require('./db/db.js');
connectToDb();

app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello World");
});

module.exports = app;
