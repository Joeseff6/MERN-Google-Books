const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
require('dotenv').config();


const PORT = process.env.PORT || 3001;

const session = require('express-session');
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
};
app.use(session(sess));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/merngooglebooks");

app.listen(PORT, function() {
  console.log(`API server now listening on PORT ${PORT}.`);
});