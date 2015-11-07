/**
* Exposure.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    time: {
      type: 'datetime',
      required: true
    },
    level: {
      type: 'float',
      required: true
    },
    user: {
      model: 'User',
      required: true
    }

  }
};

