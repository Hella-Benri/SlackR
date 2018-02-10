var express = require('express');
var router = express.Router();
var pg = require('pg');
var pgp = require('pg-promise')()

var conString = process.env.ELEPHANTSQL_URL || "postgres://sysewvom:qj4yNf-z7pi3h8f_YtOcapYiKSaOSj0m@baasu.db.elephantsql.com:5432/sysewvom";

const db = {};
db.conn = pgp(conString);
let client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
    client.end();
  })
});

const userController = {
  // sample querying for testing
  makeUsersTable(req, res, next) {
    let userName = req.body.userName;
    console.log(userName);
    // let password = req.body.password;
    let timer = 0.0;
    const query = "CREATE TABLE USERS(ID INT PRIMARY KEY NOT NULL, userName TEXT NOT NULL, timer INT)";
    db.conn.many(query)
      .then(makeUsersTable => {
        res.json(usersTable);
        console.log('USER TABLE', usersTable);
        // next();
      })
      .catch(err => {
        console.log('error');
        res.status(404).send(err);
      })
  },
  createUser(req, res, next) {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let query = "INSERT INTO emps (firstname, lastname) VALUES (" + "'" + firstname + "'" + "," + "'" + lastname + "'" + ")"
    db.conn.query(query, (err, res) => {
      console.log(err, res)
      // db.end()
    })
  },
  verifyUser(req, res, next) {
    let firstnameToVerify = req.body.firstnameToVerify;
    let lastnameToVerify = req.body.lastnameToVerify;
    console.log(firstnameToVerify, lastnameToVerify);
    let query2 = 'hey'
    console.log('QUERY', query2);
    // let query = "SELECT * FROM emps WHERE firstname= " + "'" + firstname + "'" + "";
    let query = "SELECT * FROM emps WHERE firstname='Jongsoo'";
    console.log('heyyy', query);
    db.conn.many(query)
      .then(verifiedUser => {
        res.json(verifiedUser);
        console.log('VERIFIED USER', verifiedUser);
      })
      .catch(err => {
        console.log('error');
        res.status(404).send(err);
      })
    
      // .then(getUsers => {
      //   res.json(verifiedUser);
      //   console.log('USERS', verifiedUser);
      //   // next();
      // })
      // .catch(err => {
      //   console.log('error');
      //   res.status(404).send(err);
      // })
  },
  getUsers(req, res, next) {
    // const query = "SELECT firstname, lastname FROM emps ORDER BY lastname, firstname";
    const query = "SELECT * FROM emps";
    db.conn.many(query)
      .then(getUsers => {
        res.json(getUsers);
        console.log('USERS', getUsers);
        // next();
      })
      .catch(err => {
        console.log('error');
        res.status(404).send(err);
      })
  }
}

module.exports = userController;
