const express = require("express");
const { fetchUserById, updateUser } = require("../controller/User");

const router = express.Router();

router.get("/:id", fetchUserById)
.post("/:id", updateUser);

exports.router = router;