var _ = require('underscore');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
require('gsap');

var game = Backbone.Radio.channel('game');

module.exports = Mn.Behavior.extend({
    channelName:'timelines',
    radioRequests:{
        'output:intro':'getIntro',
        'output:outro':'getOutro',
    },
    ui:{
        key:'#key',
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
        outputs:'#layerOutputs',
        outputs2:'#g3252',
        play:'#play',
        level:'#level',
    },
    events:{
        'mousedown @ui.play':'playAgain',
    },

    intro:new TimelineMax({paused:true}),
    outro:new TimelineMax({paused:true}),
    initialize:function(){
        _.bindAll(this,'onTheGround');
    },
    onAttach:function(){
        this.buildIntro();
        this.buildOutro();
    },
    getIntro:function(){
        this.intro.paused(false);
        return this.intro;
    },
    getOutro:function(){
        this.outro.paused(false);
        return this.outro;
    },
    buildIntro:function(){
        this.intro
            .to(this.ui.key,0,{opacity:0})
            .to(this.ui.play,0,{opacity:0})
            .to(this.ui.level,0,{opacity:0})
            // .to(this.ui.outputs,1,{rotation:-90,scale:0.5,transformOrigin:'50% 50%'})
            .from(this.ui.outputs,1,{opacity:0,x:-1000})
            .from(this.ui.chariot,1,{opacity:0,y:-200,ease:Bounce.easeOut,onComplete:this.onTheGround});
    },
    buildOutro:function(){
        this.outro
            .to(this.ui.life,1,{y:"+100",scale:2})
            .to(this.ui.life,1,{opacity:0,scale:5})
            .to(this.ui.lifePath,1,{fill:"red"},0)
            .to(this.ui.lifeSpan,1,{fill:"red"},0)
            .to(this.ui.key, 0.3, {opacity:0})
            .to(this.ui.chariot, 0.3, {opacity:0})
            .to(this.ui.rail, 0.3, {opacity:0})
            .to(this.ui.score,1,{x:-210,scale:1.5})
            // .to(this.ui.score,1,{scale:3,x:-270,y:120})
            .addLabel('showReplay')
            .to(this.ui.play,2,{opacity:1, ease:Power4.easeIn},"showReplay+=0")
            .from(this.ui.play,2,{y:-200},"showReplay+=0");
    },
    onTheGround:function(){
        this.view.model.set("isJumping",false);
    },
    playAgain:function(){
        game.trigger('play:again');
    },
});
