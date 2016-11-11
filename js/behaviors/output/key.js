var _ = require('underscore');
var Mn = require('backbone.marionette');
require('gsap');
// Can't seem to load it in another way:
var Draggable = require('./../../../bower_components/gsap/src/uncompressed/utils/Draggable.js');
var validBounds = 0.91;
var widthBounds = 480;
var offsetKey = 58;


module.exports = Mn.Behavior.extend({
    channelName: 'game',
    radioEvents: {
        'start': 'init',
        'key:launch': 'init',
        'key:stop:fall': 'keyStopFall',
    },
    ui:{
        key:'#key',
        chariot:'#chariot',
    },
    keyFall:null,
    // modelEvents: {
    //     'change:keyStartFalling': 'keyTweenFall',
    // },
    initialize:function(){
        _.bindAll(this,'keyCheckChariot');
        _.bindAll(this,'keyTouchRail');
        _.bindAll(this,'keyTweenFall');
    },
    init:function(){
        this.view.model.set('keyTouchRail',false);
        this.view.model.set('keyTouchChariot',false);
        var startX = (Math.random()-0.5)*widthBounds*validBounds+offsetKey;
        // var startX = (0)*widthBounds*validBounds+offsetKey;
        TweenLite.to(this.ui.key, 0, {x:startX,y:-112,scale:0,rotation:-360,fill:"#dcfafc",transformOrigin:'50% 100%'});
        TweenLite.to(this.ui.key, this.view.model.get('speedAppearingKey'), {opacity:1,rotation:0,scale:0.38,transformOrigin:'50% 100%', onComplete:this.keyTweenFall});
    },
    keyTweenFall:function(){
        this.keyFall = TweenLite.to(this.ui.key, this.view.model.get('speedKey'), {y:65,onUpdate:this.keyCheckChariot,onComplete:this.keyTouchRail});
    },
    keyStopFall:function(){
        // this.keyFall.kill();
        // this.keyFall = null;
    },
    keyTouchRail:function(){
        this.view.model.set('keyTouchRail',true,{validate:true});
    },
    keyCheckChariot:function(){
        if(Draggable.hitTest(this.ui.key, this.ui.chariot)){
            this.keyFall.kill();
            this.view.model.set('keyTouchChariot',true,{validate:true});
        }
    }

});
