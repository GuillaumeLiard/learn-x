var Mn = require('backbone.marionette');
require('gsap');

module.exports = Mn.Behavior.extend({
    channelName:'timelines',
    radioRequests:{
        'input:intro':'getIntro',
        'input:outro':'getOutro',
    },
    ui:{
        inputs:'#layerInputs',
        items:'.item',
        texts:'text',
        up:'#up',
        down:'#down',
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
            .addLabel("start")
            // .set(this.ui.inputs,{scale:1.2,transformOrigin:'50% 50%'},'start+=-0.1')
            .from(this.ui.texts, 6, {opacity:0, ease:Power4.easeOut},'start+=0')
            .to(this.ui.up, 1, {scale:0.6,transformOrigin:'50% 50%'},'start+=0')
            .to(this.ui.down, 1, {scale:0.6,transformOrigin:'50% 50%'},'start+=0')
            .from(this.ui.down, 4, {opacity:0, x:300, ease:Power4.easeOut},'start+=1')
            .from(this.ui.up, 4, {opacity:0, x:-300, ease:Power4.easeOut},'start+=1');
            // .staggerFrom(this.ui.items, 2, {rotation:90, opacity:0, ease:Elastic.easeOut, },0.5)
    },
    buildOutro:function(){
        this.outro
            .to(this.ui.inputs, 1, {scale:0, transformOrigin:'50% 50%', ease:Power4.easeOut})
            .to(this.ui.texts, 1, {scale:0, transformOrigin:'50% 50%', ease:Power4.easeOut});
    },
});
