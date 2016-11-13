var _ = require('underscore');
var Mn = require('backbone.marionette');
require('gsap');
var validBounds = 0.91;

module.exports = Mn.Behavior.extend({
    ui:{
        chariot:'#chariot',
    },
    modelEvents: {
        'change:x': 'move',
        'change:isJumping': 'handleJump',
    },
    initialize:function(){
        _.bindAll(this,'handleEndJump');
    },
    move: function(event) {
        TweenMax.to(this.ui.chariot, 1, {x:validBounds*this.view.model.get('x')});
    },
    handleJump: function(event) {
        if(this.view.model.get("isJumping")){
            this.handleStartJump();
        }
    },
    handleStartJump: function(event) {
        TweenMax.to(this.ui.chariot, 0.5, {y:-90,ease:Power4.easeOut});
        TweenMax.to(this.ui.chariot, 0.5, {y:0,ease:Power4.easeIn,delay:0.20,onComplete:this.handleEndJump});
    },
    handleEndJump: function(event) {
        this.view.model.set("isJumping",false);
        this.view.model.set('bonusTouched',false);
    },
});
