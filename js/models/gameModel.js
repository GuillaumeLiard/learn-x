var Backbone = require('backbone');

var xMin = -240;
var xMax = 240;
module.exports = Backbone.Model.extend({
  initialize: function() {
    //   this.set('x',0);
      console.log('new Model');
  },
  defaults:{
      'x':0
  },
  validate:function(attrs){
      if(attrs.x>xMax){
          return true;
      }
      if(attrs.x<xMin){
          return true;
      }
  }
});
