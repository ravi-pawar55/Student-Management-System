const express = require("express")
const router = express.Router()

const {
    signin,
} = require("../controllers/auth");

const {
    validateSignin
} = require("../middlewares/validation");

router.post("/signin", validateSignin ,signin);

module.exports = router;