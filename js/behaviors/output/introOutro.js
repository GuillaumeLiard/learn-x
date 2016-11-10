var Mn = require('backbone.marionette');
require('gsap');

module.exports = Mn.Behavior.extend({
    channelName:'timelines',
    radioRequests:{
        'output:intro':'getIntro',
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
    },
    intro:new TimelineMax({paused:true}),
    onAttach:function(){
        this.buildIntro();
    },
    getIntro:function(){
        this.intro.paused(false);
        return this.intro;
    },
    buildIntro:function(){
        this.intro
            .from(this.ui.outputs,1,{opacity:0,x:-1000})
            .from(this.ui.chariot,1,{opacity:0,y:-200,ease:Bounce.easeOut});
    },
});
