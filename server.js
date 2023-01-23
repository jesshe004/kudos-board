const express = require('express');
// const messagesRouter = require('./routes/messages.routes');
const connectDB = require('./config/db.config');
// const cors = require("cors"); 

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
// app.use('/api/v1/messages', messagesRouter);
app.get("/", (req, res) => {
  res.status(200).send("hello");
});

const start = async () => {
  try {

    connectDB.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });

    app.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.error(error);
  }
}

start();

import express from "express";
import mysql from "mysql";

const app = express() 

const db = mysql.createConnection({
    HOST: "localhost",
    USER: "root",
    PASSWORD: "strawberries222",
    DATABASE: "board",
    // socketPath: '/tmp/mysql.sock',
    dialect: "mysql"
  });
  
app.get("/", (req, res) => {
  res.json("hello this is the backend")
})

app.get("/kudos", (req, res) => {
  const messages = "SELECT * FROM kudos";
  db.query(messages, (err, data) =>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.listen(8800, () =>{
  console.log("Connected to backend!")
})