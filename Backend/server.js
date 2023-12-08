
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
const uri = "mongodb+srv://pamandeep:paman123@cluster0.sbue3su.mongodb.net/BookList";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true   }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


// import routes
const bookRouter = require('./routes/activities');

// adding /books to before all routes
app.use('/', bookRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
