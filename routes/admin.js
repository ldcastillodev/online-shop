const path = require('path');

const express = require('express');

const { body } = require('express-validator/check');

const adminController = require('../controllers/admin');

const isAuth = require('../routes-protection/is-auth'); // checks if a session is active, if not redirects to login

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', 
  [                                                   // validation
    body('title')
      .isString()
      .isLength({min: 3})
      .trim(),
    //body('imageUrl').isURL(),
    body('price')
      .isFloat(),
    body('description')
      .isLength({min: 5, max: 200})
      .trim(),
  ], 
  isAuth, 
  adminController.postAddProduct
);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post('/edit-product', 
  [                                                   // validation
    body('title')
      .isString()
      .isLength({min: 3})
      .trim(),
    //body('imageUrl').isURL(),
    body('price')
      .isFloat(),
    body('description')
      .isLength({min: 10, max: 200})
      .trim(),
  ], 
  isAuth, 
  adminController.postEditProduct
);

router.delete('/product/:productId', isAuth, adminController.deleteProduct);

module.exports = router;
