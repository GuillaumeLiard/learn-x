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

        this.master
            .addLabel("intro")
            .add(this.timelines.request('input:intro'))
            .add(this.timelines.request('output:intro'))
            .add(this.introEnd)
            .addLabel("intro");


    },
    startIntro:function(){
        // console.log('b');
        // // this.master.timeScale(0.1);
        this.master.paused(false);
        // console.log(this.master.endTime());
        // // this.master.tweenFromTo("intro","intro:end");
    },
    introEnd:function(){
        console.log('introEnd');
    }
});
