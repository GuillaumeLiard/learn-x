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
        this.intro.from(this.ui.outputs,2,{opacity:0,rotation:360,transformOrigin:'50% 50%'});
    },
});
