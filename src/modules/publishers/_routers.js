const  express =require("express") ;
const { postPublisher ,getPublisher } =require( "./_controllers.js");

const router = express.Router();

router.post("/", postPublisher);
router.get("/", getPublisher);
router.get("/:id");
router.patch("/:id");
router.delete("/:id");

module.exports = router;
