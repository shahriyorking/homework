const  express  = require("express");
const { getHello } = require("./_controllers.js");

const router =express.Router();

router.get("/", getHello);

module.exports = router;
