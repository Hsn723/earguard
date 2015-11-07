/**
* Exposure.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    // using createdAt instead
    /*time: {
      type: 'datetime',
      required: true
    },*/
    level: {
      type: 'float',
      required: true
    },
    user: {
      model: 'User',
      required: true
    }/*,
    beforeCreate: function(req, cb){
      User.find({email: req.query.user}).exec(function(err, user) {

      });
    }*/

  }
};

