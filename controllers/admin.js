const { validationResult } = require('express-validator/check')
const Product = require('../models/product');
const fileHelper = require('../util/file');


exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product', 
    editing: false,
    hasError: false, 
    errorMessage: null,
    validationErrors: []
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const image = req.file
  
  if(!image) {
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      editing: false, 
      hasError: true,
      product: {
        title: title,
        price: price,
        description: description
      },
      errorMessage: 'attached file is not an image.',
      validationErrors: []
    });
  }
  
  const imageUrl = image.path;

  const product = new Product({
    title: title, 
    price: price, 
    description: description, 
    imageUrl: imageUrl,
    userId: req.user
  });
  product
    .save() // method provided by mongoose
    .then(result => {
      console.log('Product created')
      res.redirect('/products');
    })
    .catch(err => {   // error handling
     const error = new Error(err);
     error.httpStatusCode = 500;
     return next(error);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode) {
    return res.redirect('/');
  }
  const prodId= req.params.productId;
  Product.findById(prodId) // method provided by mongoose
    .then(product => {
      if(!product){
        return res.redirect('/')
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode, 
        product: product,
        hasError: false,
        errorMessage: null,
        validationErrors: []
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedDesc = req.body.description;
  const image = req.file;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: true, 
      hasError: true,
      product: {
        title: updatedTitle,
        price: updatedPrice,
        description: updatedDesc,
        _id: prodId
      },
      errorMessage: errors.array()[0].msg,
      validationErrors: errors.array()
    });
  }
   
  Product.findById(prodId) // method provided by mongoose
    .then(product => {
      if (product.userId.toString() !== req.user._id.toString()) {
        return res.redirect('/');
      }
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      if(image) {
        fileHelper.deleteFile(product.imageUrl);
        product.imageUrl = image.path;
      }
      return product.save() // method provided by mongoose
      .then(result => {
        console.log('updated product')
        res.redirect('/admin/products');
      })
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getProducts = (req, res, next) => {
  Product.find({ userId: req.user._id }) // method provided by mongoose
    //.select('title price -_id') method provided by mongoose
    //.populate('userId', 'name')  method provided by mongoose
    .then(products => {
      console.log(products);
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products',
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.deleteProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if(!product) {
        return next(new Error('product not found'));
      }
      fileHelper.deleteFile(product.imageUrl); // deletes the file in the images folder
      return Product.deleteOne({ _id: prodId, userId: req.user._id }) // method provided by mongoose
    })
    .then(() => {
      console.log('destroyed product')
      res.status(200).json({ message: 'success!' });
    })
    .catch(err => {
      res.status(500).json({ message: 'deleting product failed' });
    }); 

  
    
}

