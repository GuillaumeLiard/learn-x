var Mn = require('backbone.marionette');
require('gsap');

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
    },
    intro:new TimelineMax({paused:true}),
    outro:new TimelineMax({paused:true}),
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
            .from(this.ui.outputs,1,{opacity:0,x:-1000})
            .from(this.ui.chariot,1,{opacity:0,y:-200,ease:Bounce.easeOut});
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
            .to(this.ui.score,1,{scale:3,x:-270,y:120});
    },
});
