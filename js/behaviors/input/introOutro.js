var Mn = require('backbone.marionette');
require('gsap');

module.exports = Mn.Behavior.extend({
    channelName:'timelines',
    radioRequests:{
        'input:intro':'getIntro',
    },
    ui:{
        'inputs':'#layerInputs'
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
        this.intro.from(this.ui.inputs,2,{opacity:0,rotation:360,transformOrigin:'50% 50%'});
    },
});
