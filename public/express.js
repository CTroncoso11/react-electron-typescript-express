const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
app.use(cors());

let connection = newConnection();

function newConnection(){
  return mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
  }).on('error', () => {
    //  Do something when an error ocurr
  })
}

function checkConnectionState(){
  connection.connect((err) => {
    if (err) { connection = newConnection(); }
  });
}

app.get('/list', (req, res) => {
  checkConnectionState();
  connection.query('SELECT * FROM user;', (err, rows, fields) => {
    if (!err){
      res.send(rows);
    } else {
      console.log(err);
      res.status(404).send();
    }
  });
});

app.listen(5000, () => console.log('App running on port 5000 🔥'));