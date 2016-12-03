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
        'step':20,
        'speedIntroOutro':2,
        'speedKey':1.2,
        'speedAppearingKey':0.5,
        'speedBonus':20,
        'speedWheel':0.1,
        'bonus':100,
        'availableBonuses':[-200,-400,400,200],
        'gameOver':false,
        'isJumping':true
    },
    set:function (key, val, options) {
        var newVal = this.keepBetweenBounds(key, val);
        return Backbone.Model.prototype.set.call(this, key, newVal, options);
    },
    keepBetweenBounds:function(key,val){
        if(key==='x'){
            if(val>xMax){
                val = xMax;
            }
            if(val<xMin){
                val = xMin;
            }
        }
        return val;
    },
    validate:function(attrs){
        if(attrs.keyTouchRail && attrs.keyTouchChariot){
            return true;
        }
        if(attrs.life<0){
            return true;
        }
    }
});
