const router = require("express").Router();
const routes = require("../controllers/accessibility");
const items = require("../controllers/accessibility");

router.get("/", routes.hello);
router.post("/create", routes.createUser);
router.post("/user", routes.findUser);



module.exports = router;
