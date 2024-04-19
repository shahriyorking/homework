const examplesRouter=require("../modules/example/_routers.js") ;
const authorsRouter = require("../modules/publishers/_routers.js") ;

const { Router } = require ("express");

const router = Router();

router.use(examplesRouter);
router.use("/publishers", authorsRouter);
module.exports = router
