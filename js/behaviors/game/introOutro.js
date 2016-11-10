var Backbone = require('backbone');
var Mn = require('backbone.marionette');
require('gsap');

module.exports = Mn.Behavior.extend({
    timelines:Backbone.Radio.channel('timelines'),
    channelName:'game',
    radioEvents:{
        'init':'buildMasterTimeline',
        'intro':'startIntro'
    },
    // masterTimeline:new TimelineMax(),
    master:new TimelineMax({paused:true}),
    buildMasterTimeline:function(){
        this.master.addLabel("intro");
        this.master.add(this.timelines.request('input:intro'));
    },
    startIntro:function(){
        // this.master.timeScale(0.1);
        this.master.play("intro");
    },
});
