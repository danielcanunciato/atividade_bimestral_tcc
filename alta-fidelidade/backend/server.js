require('dotenv').config();

const express = require('express');
const cors = require("cors");
const db = require("./db");

const API = express();
const PORT = 4040;

API.use(express.json());
API.use(cors());

API.listen(PORT, ()=>{
    console.log(`Logged in to host http://localhost:${PORT}`)
})