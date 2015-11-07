/**
* Dose.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    date: {
      type: 'datetime',
      required: true
    },
    dose: {
      type: 'float',
      required: true,
      defaultsTo: 0
    },
    user: {
      model: 'User',
      required: true
    }

  }
};

