var Mn = require('backbone.marionette');
require('gsap');

var tl;
module.exports = Mn.Behavior.extend({
    channelName:'game',
    radioEvents:{
        'inputs:hide':'hide'
    },
    ui:{
        'inputs':'#layerInputs'
    },
    initialize:function(){
        console.log('a');
        tl = new TimelineMax();
    },
    onAttach:function(){
        console.log('b');
        tl.addLabel("show")
        .from(this.ui.inputs,1,{opacity:0})
        .addLabel("hide")
        .to(this.ui.inputs,1,{opacity:0})
        .addLabel("end");
        tl.pause();
        this.show();
    },
    show:function(){
        console.log('show');
        tl.tweenFromTo("show","hide");

    },
    hide:function(){
        console.log('hide');
        tl.play("hide");
    }
});
