var _ = require('underscore');
var Mn = require('backbone.marionette');
require('gsap');
var Draggable = require('./../../../bower_components/gsap/src/uncompressed/utils/Draggable.js');



module.exports = Mn.Behavior.extend({
    escalator:new TimelineMax({paused:true,repeat:-1}),

    channelName: 'game',
    radioEvents: {
        'start': 'init',
    },
    ui:{
        bonus:'#bonus-1',
        bonusValue:'#bonus-span-1',
        chariot:'#chariot',
    },
    modelEvents: {
        'change:bonus': 'updateBonus',
        'change:bonusTouched': 'applyBonus',
    },
    initialize:function(){
        _.bindAll(this,'generateBonusValue');
        _.bindAll(this,'checkTouchChariot');
    },
    onAttach:function(){
        this.buildEscalatorTimeline();
    },
    buildEscalatorTimeline:function(){
        var oscilatorScale = new TimelineMax({paused:false,repeat:-1});
        var move = new TimelineMax({paused:false,repeat:-1});

        oscilatorScale.to(this.ui.bonus, 0.5,{skewX:"+=10"})
            .to(this.ui.bonus, 0.5,{skewX:"-=10"});

        move.to(this.ui.bonus, 0,{x:-240,opacity:0,onComplete:this.generateBonusValue})
            .to(this.ui.bonus, 0.5,{opacity:1})
            .to(this.ui.bonus, this.view.model.get('speedBonus'),{x:240,onUpdate:this.checkTouchChariot})
            .to(this.ui.bonus, 0.5,{opacity:0});

        this.escalator.add([oscilatorScale,move]);
    },
    init:function(){
        this.escalator.play('begin');
    },
    generateBonusValue:function(){
        this.view.model.set('availableBonuses',_.shuffle(this.view.model.get('availableBonuses')));
        this.view.model.set('bonusTouched',false);
        this.view.model.set('bonus',this.view.model.get('availableBonuses')[0]);
    },
    updateBonus:function(){
        var prepend = '';
        var bonus = this.view.model.get('bonus');
        if (bonus > 0){
            prepend = '+';
        }
        this.ui.bonusValue.text(prepend+bonus);
    },
    checkTouchChariot:function(){
        if(Draggable.hitTest(this.ui.bonus, this.ui.chariot)){
            this.view.model.set('bonusTouched',true);
        }
    },
    applyBonus:function(){
        if(this.view.model.get('bonusTouched')){
            this.view.model.set('x',this.view.model.get('x')+this.view.model.get('bonus'));
            // TweenMax.to(this.ui.bonus, 0.5,{opacity:0});
            console.log('bonus touch:'+this.view.model.get('bonus'));
        }
    },

});
