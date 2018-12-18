const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
const port = 4200;

// DB Config
const db = require('./config/keys').mongoURI;

//connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//body parser middleware
app.use(bodyParser.json());

//route files
let cv = require('./routes/cv');
app.use('/cv', cv);

app.get('/', (req, res, next) => res.send('Hello World!'))

app.listen(port, () => console.log(`App is listening on port ${port}`))