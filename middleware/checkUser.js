const { check } = require('express-validator');

const checkUser = () => {
   return [
      check('name', 'Name is required')
      .not()
      .isEmpty(),

      check('email', 'Please include a valid email')
      .isEmail(),
      
      check('password', 'Please enter a password with 6 or more characters')
      .isLength({ min: 6 })
   ]
}
module.exports = checkUser;