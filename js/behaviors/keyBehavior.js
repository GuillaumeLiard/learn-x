var _ = require('underscore');
var Mn = require('backbone.marionette');
require('gsap');
// Can't seem to load it in another way:
var Draggable = require('./../../bower_components/gsap/src/uncompressed/utils/Draggable.js');
var validBounds = 0.91;

module.exports = Mn.Behavior.extend({
    channelName: 'game',
    radioEvents: {
        'start': 'startFalling',
    },
    ui:{
        key:'#key',
        chariot:'#chariot',
    },
    initialize:function(){
        _.bindAll(this,'keyCheckChariot');
    },
    startFalling:function(){
        TweenLite.to(key, this.view.model.get('speedKey'), {y:70,onUpdate:this.keyCheckChariot,onComplete:this.keyTouchRail});
    },
    keyTouchRail:function(){
        // console.log('fdsdfds');
    },
    keyCheckChariot:function(){
        if(Draggable.hitTest(this.ui.key, this.ui.chariot)){
            console.log('key hit chariot');
        }
    }

});
