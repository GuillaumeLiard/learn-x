var _ = require('underscore');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
require('gsap');

var game = Backbone.Radio.channel('game');

module.exports = Mn.Behavior.extend({
    modelEvents:{
        "change:life":'handleLife',
        "change:gameOver":'handleGameOver'
    },
    handleLife:function(){
        if(this.view.model.get('life')===0){
            this.view.model.set('gameOver',true);
        }else{
            game.trigger('key:launch');
        }
    },
    handleGameOver:function(){
        this.view.triggerMethod('outro');
    }
});
