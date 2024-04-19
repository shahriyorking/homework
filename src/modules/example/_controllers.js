const express = require("express")
const hello  = require("./hello.js")
/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
function getHello(req, res) {
    const data = hello();
  
    res.json({ data });
  }
  module.exports = {
    getHello,
}