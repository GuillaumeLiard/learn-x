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
    tl2:new TimelineMax(),

    initialize:function(){
        // console.log('a');
        // this.tl2 =
        console.log(this.tl2);
    },
    onAttach:function(){
        console.log('b');
        console.log(this.ui.inputs);
        console.log('bc');
        this.tl2.addLabel("show")
        .from(this.ui.inputs,1,{opacity:0})
        .addLabel("hide")
        .to(this.ui.inputs,1,{opacity:0})
        .addLabel("end");
        this.tl2.pause();
        this.show();
    },
    show:function(){
        // console.log('show');
        this.tl2.tweenFromTo("show","hide");

    },
    hide:function(){
        // console.log('hide');
        this.tl2.play("hide");
    }
});
