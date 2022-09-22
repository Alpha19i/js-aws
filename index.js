const express = require('express');

const app = express()

app.get("/", (req, res)=> res.send("Eh nois truta!!"))

app.listen(3000)