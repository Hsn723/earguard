/**
 * ExposureController
 *
 * @description :: Server-side logic for managing exposures
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getDose: function(req, res){
    Exposure.find().populate('user').exec(function(err, exposures) {
      if(exposures.length <= 1) res.json({dose: 0});
      var dose = 0;
      for(i = 1; i < exposures.length; i++){
        var L = (exposures[i].level + exposures[i-1].level)/2;
        var C = (exposures[i].createdAt - exposures[i-1].createdAt)/3600000;
        var T = 8/(Math.pow(2, (L-90)/5));
        dose += C/T;
      }
      res.json({dose: dose});
    });
  },
  reset: function(req, res) {
    Exposure.destroy({}).exec(function(err, result) {
      res.json(result);
    });
  }

};

