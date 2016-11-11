var _ = require('underscore');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
require('gsap');

module.exports = Mn.Behavior.extend({
    timelines:Backbone.Radio.channel('timelines'),
    master:new TimelineMax({paused:true}),
    initialize:function(){
        _.bindAll(this,'introEnd');
    },
    onInit:function(){
        this.buildMasterTimeline();
    },
    onIntro:function(){
        this.startIntro();
    },
    buildMasterTimeline:function(){
        // console.log('abcd');
        this.master
            .addLabel("intro")
            .add(this.timelines.request('input:intro'))
            .add(this.timelines.request('output:intro'),"=-1.5")
            .add(this.introEnd)
            .addLabel("ready");
    },
    startIntro:function(){
        this.master.timeScale(1.2);
        this.master.play("ready");
        // // this.master.tweenFromTo("intro","intro:end");
    },
    introEnd:function(){
        this.view.triggerMethod('start');
    }
});
