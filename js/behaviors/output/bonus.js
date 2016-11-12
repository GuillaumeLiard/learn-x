var _ = require('underscore');
var Mn = require('backbone.marionette');


module.exports = Mn.Behavior.extend({
    escalator:new TimelineMax({paused:true,repeat:-1}),

    channelName: 'game',
    radioEvents: {
        'start': 'init',
    },
    ui:{
        bonus:'#bonus-1',
        bonusValue:'#bonus-span-1',
    },
    modelEvents: {
        'change:bonus': 'updateBonus',
    },
    initialize:function(){
        _.bindAll(this,'generateBonusValue');
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
            .to(this.ui.bonus, this.view.model.get('speedBonus'),{x:240})
            .to(this.ui.bonus, 0.5,{opacity:0});

        this.escalator.add([oscilatorScale,move]);
    },
    init:function(){
        this.escalator.play('begin');
    },
    generateBonusValue:function(){
        this.view.model.set('availableBonuses',_.shuffle(this.view.model.get('availableBonuses')));
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

});
