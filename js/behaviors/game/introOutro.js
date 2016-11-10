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
            .add(this.timelines.request('output:intro'),"=-1.5")
            .add(this.introEnd)
            .addLabel("ready");


    },
    startIntro:function(){
        this.master.timeScale(1.2);
        this.master.play("intro");
        // // this.master.tweenFromTo("intro","intro:end");
    },
    introEnd:function(){
        console.log('introEnd');
    }
});
