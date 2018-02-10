var express = require('express');
var router = express.Router();
var pg = require('pg');
var pgp = require('pg-promise')()

var conString = process.env.ELEPHANTSQL_URL || "postgres://sysewvom:qj4yNf-z7pi3h8f_YtOcapYiKSaOSj0m@baasu.db.elephantsql.com:5432/sysewvom";

const db = {};
db.conn = pgp(conString);

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
    console.log('HIIIIII');
    console.log(req.body);
    // const query = "SELECT firstname, lastname FROM emps ORDER BY lastname, firstname";
    const query = "INSERT INTO emps (firstname, lastname) VALUES (" + req.body.firstname + "," + req.body.lastname + ")";
    db.conn.many(query)
      .then(newUser => {
        res.json(newUser);
        console.log('USERS', getUsers);
        // next();
      })
      .catch(err => {
        console.log('error');
        res.status(404).send(err);
      })
  },
  getUsers(req, res, next) {
    // const query = "SELECT firstname, lastname FROM emps ORDER BY lastname, firstname";
    const query = "SELECT * FROM emps WHERE firstname='Mayor'";
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
