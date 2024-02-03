const express = require("express");
const { createProduct, fetchAllProduct } = require("../controller/Product");

const router = express.Router();

router.post("/", createProduct).get("/", fetchAllProduct);

exports.router = router;
