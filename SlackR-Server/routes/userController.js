var express = require('express');
var router = express.Router();
var pg = require('pg');
var pgp = require('pg-promise')()

var conString = process.env.ELEPHANTSQL_URL || "postgres://sysewvom:qj4yNf-z7pi3h8f_YtOcapYiKSaOSj0m@baasu.db.elephantsql.com:5432/sysewvom";

const db = {};
db.conn = pgp(conString);

const userController = {
  // sample querying for testing
  getUsers(req, res, next) {
    const query = "SELECT firstname, lastname FROM emps ORDER BY lastname, firstname";
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
