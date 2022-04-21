const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
// csrf protection
const csrf = require('csurf');
// sessions
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
//controller
const errorController = require('./controllers/error');
// Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');
//db
const User = require('./models/user');
const mongoose = require('mongoose'); //mongoose
const MONGODB_URI = 'mongodb+srv://ldcastillodev:ld96cas@cluster0.pscwp.mongodb.net/cluster0?retryWrites=true&w=majority';
//multer file management
const multer = require('multer');

const app = express();

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});

const csrfProtection = csrf()

const fileStorage = multer.diskStorage({ // multer file management
  destination: (req, file, cb) => {
    cb(null, 'images');  // destination folder
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);  // filename
  }
})

const fileFilter = (req, file, cb) => { // a function we pass to multer, that filter files by mimetype
  if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')) // file management
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images'))); // middleware that handles path to the images folder

// session middleware
app.use(
  session({ 
    secret: 'my secret', 
    resave: false, 
    saveUninitialized: false, 
    store: store 
  })
);

app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
})

app.use((req, res, next) => {
  if(!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      if(!user) {
        return next();
      }
      req.user = user;
      next();
    })
    .catch(err => {
      next(new Error(err)); // error handling for async code
    })
});



app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);
app.get('/500', errorController.get500);
app.use(errorController.get404);

app.use((error, req, res, next) => { // error handling
  console.log(error)
  res.status(500).render('500', { 
    pageTitle: 'Error', 
    path: '/500', 
    isAuthenticated: req.session.isLoggedIn 
  });
})

// connectiong mongoose and listeting to port 3000
mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(3000);
  })
  .catch(err => console.log(err));