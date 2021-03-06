var _ = require('underscore');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
require('gsap');

var game = Backbone.Radio.channel('game');

module.exports = Mn.Behavior.extend({
    good:new TimelineMax({paused:true}),
    bad:new TimelineMax({paused:true}),
    modelEvents: {
        'change:keyTouchRail': 'handleBad',
        'change:keyTouchChariot': 'handleGood',
    },
    ui:{
        key:'#key',
        keyPath:'#key path',
        chariot:'#chariot',
        rail:'#rail',
        railPath:'#rail g path',
        score:'#score',
        life:'#life',
        lifePath:'#life path',
        lifeSpan:'#life tspan',
        lifeIcon:'#life-icon',
        lifeIconPath:'#life-icon path',
        scoreIcon:'#score-icon',
        output:'#layerOutputs',
    },
    initialize:function(){
        _.bindAll(this,'loseLife');
        _.bindAll(this,'gainScore');
    },
    onAttach:function(){
        this.buildBadTimeline();
        this.buildGoodTimeline();
    },
    buildBadTimeline:function(){
        this.bad
        .addLabel('begin')
        .fromTo(this.ui.rail, 0.3, {y:"+=-2"}, {y:"+=2", ease:RoughEase.ease.config({strength:8, points:20, template:Linear.easeNone, randomize:false})})
        .to(this.ui.railPath, 0.3, {fill:"red"},0)
        .to(this.ui.railPath, 0.3, {fill:"#dcfafc"})
        .to(this.ui.key, 0.3, {scale:0,opacity:0,transformOrigin:'50% 100%',onComplete:this.loseLife},0.3)
        .fromTo(this.ui.lifeIcon, 0.3, {y:"+=-2"}, {y:"+=2", ease:RoughEase.ease.config({strength:8, points:20, template:Linear.easeNone, randomize:false})},0)
        .to(this.ui.lifeIconPath, 0.3, {fill:"red"},0)
        .to(this.ui.lifeIconPath, 0.3, {fill:"#dcfafc"});
        // .to(this.ui.lifeIconPath, 0.3, {fill:"#dcfafc",onComplete:this.loseLife});
    },
    buildGoodTimeline:function(){
        this.good
        .addLabel('begin')
        .to(this.ui.keyPath, 0.3, {fill:"green"},"begin")

        // .to(this.ui.key, 0.9, {x:245,y:-177 ,scale:0.27,rotation:-30-360,ease:SlowMo.ease.config( 0.5, 0.9, false)},"=-0.3")
        .to(this.ui.key, 0.9, {y:'-=30',ease:Back.easeOut.config( 4)},"begin")
        .to(this.ui.key, 0.9, {skewY:1080,ease:Power2.easeOut},"begin")
        .to(this.ui.key, 0.3, {opacity:0,ease:Power2.easeOut},"begin+=0.3")
        .to(this.ui.keyPath, 0.3, {fill:"#dcfafc"})
        .to(this.ui.scoreIcon, 0.3, {scale:"+=0.05",fill:"green",ease:Bounce.easeOut},"begin+=0.6")
        // .to(this.ui.scoreIcon, 0.1, {scale:"-=0.05",fill:"#dcfafc",ease:Bounce.easeOut},"begin+=1.3");
        .to(this.ui.scoreIcon, 0.1, {scale:"-=0.05",fill:"#dcfafc",ease:Bounce.easeOut,onComplete:this.gainScore},"begin+=1.3");
        // this.good.timeScale(0.20);
    },
    handleBad:function(){
        if(this.view.model.get('keyTouchRail')){
            this.bad.play('begin');
        }
    },
    handleGood:function(){
        if(this.view.model.get('keyTouchChariot')){
            game.trigger('key:stop:fall');
            this.good.invalidate();
            this.good.play('begin');
        }
    },
    loseLife:function(){
        this.view.model.set('life',this.view.model.get('life')-1,{validate:true});
    },
    gainScore:function(){
        this.view.model.set('score',this.view.model.get('score')+1,{validate:true});
    },


});
