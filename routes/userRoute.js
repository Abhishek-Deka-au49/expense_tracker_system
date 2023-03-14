const express = require("express");
const router = express.Router();
const { loginController, registerController } = require("../controllers/userController");



//routers
// POST || LOGIN USER
router.post("/login", loginController);

//POST || REGISTER USER
router.post("/register", registerController);

module.exports = router;