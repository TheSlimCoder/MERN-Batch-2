const express = require("express");
const router = express.Router();

const controllers = require("../controllers/user");

router.get("/", controllers.get);

router.post("/", controllers.post);

router.put("/", controllers.put);

router.patch("/", controllers.patch);

router.delete("/", controllers.delete);

module.exports = router;