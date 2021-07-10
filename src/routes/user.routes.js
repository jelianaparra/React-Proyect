const Users = require("../controllers/user.controller");
const { Router } = require("express");
const router = Router();

router.post("/register", Users.createUser);

router.post("/login", Users.loginUser);

router.post("/myprofile", Users.getUser);

router.put("/uptadeprofile", Users.uptadeUser);

router.delete("/deleteprofile", Users.deleteUser);

module.exports = router;
