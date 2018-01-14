const express = require('express');
const fs = require('fs');
const app = express();
var books;

app.get('/books', (req, res) => {
  const file = process.argv[3]
  fs.readFile(file, (err, data) => {
    if (err) return res.send(500);
    try {
      books = JSON.parse(data)
    } catch (err) {
      res.send(500);
    }
    res.json(books);
  })
}).listen(process.argv[2]); 