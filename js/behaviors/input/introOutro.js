var Mn = require('backbone.marionette');
require('gsap');

module.exports = Mn.Behavior.extend({
    channelName:'timelines',
    radioRequests:{
        'input:intro':'getIntro',
    },
    ui:{
        'inputs':'#layerInputs',
        'items':'.item',
        'texts':'text',
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
        this.intro.staggerFrom(this.ui.items, 2, {rotation:90, opacity:0, ease:Elastic.easeOut, },0.5);
        this.intro.staggerFrom(this.ui.texts, 2, {x:30, opacity:0, ease:Power4.easeOut},0.5,"-=3");
    },
});
