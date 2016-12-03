var _ = require('underscore');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
require('gsap');

var game = Backbone.Radio.channel('game');

module.exports = Mn.Behavior.extend({
    modelEvents:{
        "change:life":'handleLife',
        "change:score":'handleScore',
        "change:gameOver":'handleGameOver'
    },
    onAttach: function() {
        _.bindAll(this,'initGame');
        setTimeout(this.initGame,0);
    },
    initGame: function() {
        this.view.triggerMethod('intro');
    },
    onStart: function() {
        game.trigger('new:level');
    },
    handleLife:function(){
        if(this.view.model.get('life')===0){
            this.view.model.set('gameOver',true);
        }else{
            game.trigger('key:launch');
        }
    },
    handleScore:function(){
        // console.log('l');
        if(this.view.model.get('score')%3 === 0){
            game.trigger('new:level');
        } else{
            game.trigger('key:launch');
        }
    },
    handleGameOver:function(){
        this.view.triggerMethod('outro');
    }
});
