/**
* User.js
*
* @description :: Model for the user
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6
    },
    doses: {
      collection: 'Dose',
      via: 'user'
    },
    exposures: {
      collection: 'Exposure',
      via: 'user'
    },
    toJSON: function(){
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },
  beforeCreate: function(user, cb){
    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(user.password, salt, function(err, hash){
        if(err){
          console.log(err);
          cb(err);
        } else{
          user.password = hash;
          cb();
        }
      });
    });
  }

};

