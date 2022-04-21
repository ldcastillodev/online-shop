// helps to create secure random values
const crypto = require('crypto')
//User Model
const User = require('../models/user');
//crypting password
const bcrypt = require('bcryptjs');
//email
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
// Validation
const { validationResult } = require('express-validator/check');

const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: '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'
  }
}));



exports.getLogin = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null
  }
  res.render('auth/login', {
    pageTitle: 'Login Page', 
    path: '/login',
    errorMessage: message,
    oldInput: {
      email: '',
      password: ''
    }, 
    validationErrors: []
  });
}

exports.getSignup = (req, res , next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null
  }
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup', 
    errorMessage: message,
    oldInput: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationErrors: []
  });
}

exports.getReset = (req, res, next) => {
  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null
  }
  res.render('auth/reset', {
    pageTitle: 'Reset Password', 
    path: '/reset',
    errorMessage: message
  });
}

exports.getNewPassword = (req, res, next) => {
  const token = req.params.token.slice(1); // removes $ sign from token, because in db $ does not exists
  User.findOne({resetToken: token, resetTokenExpiration: { $gt: Date.now() }})
    .then(user => {
      let message = req.flash('error');
      if (message.length > 0) {
        message = message[0];
      } else {
        message = null
      }
      res.render('auth/new-password', {
        pageTitle: 'New Password', 
        path: '/new-password',
        errorMessage: message, 
        userId: user._id.toString(),
        passwordToken: token
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
  
}

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  //validation
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(422).render('auth/login', {
      pageTitle: 'Login', 
      path: '/login',
      errorMessage: errors.array()[0].msg,
      oldInput: {
        email: email,
        password: password
      },
      validationErrors: errors.array()
    });
  }
  //
  User.findOne({ email: email }) // finds a user by his email
    .then(user => {
      if (!user) {
        return res.status(422).render('auth/login', {
          pageTitle: 'Login', 
          path: '/login',
          errorMessage: 'Invalid email or password',
          oldInput: {
            email: email,
            password: password
          },
          validationErrors: []
        });
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              res.redirect('/');
            });  
          }
          return res.status(422).render('auth/login', {
            pageTitle: 'Login', 
            path: '/login',
            errorMessage: 'Invalid email or password',
            oldInput: {
              email: email,
              password: password
            },
            validationErrors: []
          });
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
  //res.setHeader('Set-Cookie', 'loggedIn=true; HttpOnly'); // se crea la cookie, asi se puede compartir entre todos los request
  
}

exports.postSignup = (req, res , next) => {
  
  // extract data from the signup form
  const email = req.body.email;
  const password = req.body.password;
  //validation
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(422).render('auth/signup', {
      path: '/signup',
      pageTitle: 'Signup', 
      errorMessage: errors.array()[0].msg,
      oldInput: { 
        email: email, 
        password: password, 
        confirmPassword: req.body.confirmPassword 
      }, 
      validationErrors: errors.array()
    });
  }
  //
  bcrypt
    .hash(password, 12) // encrypts the password with the bcryptjs package
    .then(hashedPassword => { // once the password is encrypted we proceed to create a new user
      const user = new User({
        email: email,
        password: hashedPassword,
        cart: {
          items: []
        }
      });
      return user.save(); // saves new user in db
    })
    .then(result => {
      res.redirect('/login') // redirects user to login page, after saving it to db, so that he can login
      return transporter.sendMail({
        to: email,
        from: 'ldcastillodev@gmail.com',
        subject: 'Signup succeded',
        html: '<h1> Welcome, you successufully signed up</h1>'
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
    
}

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(console);
    res.redirect('/');
  });
 
}

exports.postReset = (req, res, next) => {
  crypto.randomBytes(32, (err, buffer) => {
    if(err) {
      return res.redirect('/reset');
    }
    const token = buffer.toString('hex');
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          req.flash('error', 'No account with that email found');
          res.redirect('/reset');
        }
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 3600000;
        return user.save()
      })
      .then(result => {
        res.redirect('/');
        return transporter.sendMail({
          to: req.body.email,
          from: 'ldcastillodev@gmail.com',
          subject: 'Password Reset',
          html: `
            <p> Your requested a password reset</p>
            <p> Click this <a href="http://localhost:3000/reset/$${token}"> link</a> to set a new password </p>
          `
        });
      })
      .catch(err => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
  });
}

exports.postNewPassword = (req, res, next) => {
  const newPassword = req.body.password;
  const userId = req.body.userId;
  const passwordToken = req.body.passwordToken;
  let resetUser;
  User.findOne({ 
    resetToken: passwordToken, 
    resetTokenExpiration: { $gt: Date.now() }, 
    _id: userId 
  })
  .then(user => {
    resetUser = user;
    return bcrypt.hash(newPassword, 12);
  })
  .then(hashedPassword => {
    resetUser.password = hashedPassword;
    resetUser.resetToken = null;
    resetUser.resetTokenExpiration = undefined;
    return resetUser.save()
  })
  .then(result => {
    res.redirect('/login');
  })
  .catch(err => {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
}