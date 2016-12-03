var _ = require('underscore');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
require('gsap');

var game = Backbone.Radio.channel('game');
module.exports = Mn.Behavior.extend({
    channelName: 'game',
    radioEvents: {
        // 'start': 'init',
        'new:level': 'newLevel',
    },
    ui:{
        level:'#level',
        levelSpan:'#level-span',
    },
    level:new TimelineMax({paused:true}),
    onAttach:function(){
        this.level.addLabel("show")
            .to(this.ui.level, 0, {x:-300,opacity:0},"show")
            .to(this.ui.level, 1.5, {opacity:1},"show+=0.1")
            .to(this.ui.level, 3, {x:600,ease:SlowMo.ease.config(0.7, 0.7, false)},"show+=0.1")
            .to(this.ui.level, 0.5, {opacity:0,onComplete:this.newLevelEnd},"-=0.5");
    },
    newLevel:function(){
        this.addLevel();
        this.level.play("show");
    },
    addLevel:function(){
        var speed = this.view.model.get('speedKey');
        var step;
        if (speed > 5){
            speed -= 1;
            step = 10;
        } else if (speed > 4){
            speed -= 1;
            step = 15;

        } else if (speed > 3){
            speed -= 0.5;
            step = 20;

        } else if (speed > 2){
            speed -= 0.3;
            step = 30;

        } else if (speed > 1){
            speed -= 0.1;
            step = 100;

        } else {
            speed -= 0.05;
            step = 200;
        }
        this.view.model.set('speedKey',speed);
        this.view.model.set('step',step);
        this.view.model.set('level',this.view.model.get('level')+1);
        this.ui.levelSpan.text('Niveau '+this.view.model.get('level'));
        // console.log("level "+this.view.model.get('level'));
        // console.log("speed "+this.view.model.get('speedKey'));
        // console.log("step "+this.view.model.get('step'));
    },
    newLevelEnd:function(){
        game.trigger('key:launch');
    }



});
