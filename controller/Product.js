const { Product } = require("../model/Product");

exports.createProduct = async (req, res) => {

  const product = new Product(req.body);
  try{
    const doc = await product.save();
    res.status(201).json(doc);
  }catch(err){
    res.status(400).json(err);
  }  
};