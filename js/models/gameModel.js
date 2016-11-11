var Backbone = require('backbone');

var xMin = -240;
var xMax = 240;
module.exports = Backbone.Model.extend({
  // initialize: function() {
  //   //   this.set('x',0);
  //     console.log('new Model');
  // },
  defaults:{
      'life':3,
      'score':0,
      'x':0,
      'step':5,
      'speedKey':2,
      'speedAppearingKey':0.5,
      'gameOver':false
  },
  validate:function(attrs){
      if(attrs.x>xMax){
          return true;
      }
      if(attrs.x<xMin){
          return true;
      }
    //   if(attrs.keyTouchRail && attrs.keyTouchChariot){
    //       return true;
    //   }
      if(attrs.life<0){
          return true;
      }
  }
});
