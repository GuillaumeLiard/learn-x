var _ = require('underscore');
var Mn = require('backbone.marionette');
require('gsap');
// Can't seem to load it in another way:
var Draggable = require('./../../bower_components/gsap/src/uncompressed/utils/Draggable.js');
var validBounds = 0.91;

module.exports = Mn.Behavior.extend({
    channelName: 'game',
    radioEvents: {
        'start': 'init',
    },
    ui:{
        key:'#key',
        chariot:'#chariot',
    },
    modelEvents: {
        'change:keyStartFalling': 'keyTweenFall',
    },
    initialize:function(){
        _.bindAll(this,'keyCheckChariot');
        _.bindAll(this,'keyTouchRail');
    },
    init:function(){
        this.view.model.set('keyTouchRail',false);
        this.view.model.set('keyTouchChariot',false);
        this.view.model.set('keyStartFalling',true);
    },
    keyTweenFall:function(){
        TweenLite.to(key, this.view.model.get('speedKey'), {y:70,onUpdate:this.keyCheckChariot,onComplete:this.keyTouchRail});
    },
    keyTouchRail:function(){
        this.view.model.set('keyTouchRail',true,{validate:true});
        // console.log('fdsdfds');
    },
    keyCheckChariot:function(){
        if(Draggable.hitTest(this.ui.key, this.ui.chariot)){
            this.view.model.set('keyTouchChariot',true,{validate:true});
        }
    }

});
