const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProductsById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { isAuth, isAdmin } = require("../middlewares/authMiddlewares");

const productRoutes = express.Router();

productRoutes.get("/products", isAuth, getAllProducts);

productRoutes.get("/products/:id", getProductsById);

productRoutes.post("/products", isAuth, isAdmin, createProduct);

productRoutes.put("/products/:id", isAuth, isAdmin, updateProduct);

productRoutes.delete("/product/:id", isAuth, isAdmin, deleteProduct);

module.exports = productRoutes;
