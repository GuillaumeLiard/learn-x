var Mn = require('backbone.marionette');
require('gsap');

module.exports = Mn.Behavior.extend({
    channelName:'timelines',
    radioRequests:{
        'input:intro':'getIntro',
        'input:outro':'getOutro',
    },
    ui:{
        'inputs':'#layerInputs',
        'items':'.item',
        'texts':'text',
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
            .staggerFrom(this.ui.items, 2, {rotation:90, opacity:0, ease:Elastic.easeOut, },0.5)
            .staggerFrom(this.ui.texts, 2, {x:30, opacity:0, ease:Power4.easeOut},0.5,"-=3");
    },
    buildOutro:function(){
        this.outro
            .to(this.ui.inputs, 1, {scale:0, transformOrigin:'50% 50%', ease:Power4.easeOut});
    },
});
