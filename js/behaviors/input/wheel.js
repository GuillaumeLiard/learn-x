var _ = require('underscore');
var $ = require('jquery');
var Mn = require('backbone.marionette');
var Backbone = require('backbone');

var arrow;


module.exports = Mn.Behavior.extend({
    ui:{
        up:'#up',
        down:'#down',
        // plus:'#rect3000 #rect3000-3',
        plus:'#up',
        minus:'#down',
        // minus:'#rect3000-3-6',
        container:'#layerInputs',
    },
    channelName: 'game',
    radioEvents: {
        'key:launch': 'rotateWheel',
    },
    hour:0,
    rotateWheel:function(){
        this.hour = (Math.floor(Math.random()*4))*90;
        console.log(this.hour);
        TweenMax.to(this.ui.container, this.view.model.get('speedWheel'), {rotation:this.hour,transformOrigin:'50% 50%'});
        TweenMax.to(this.ui.minus, this.view.model.get('speedWheel'), {rotation:-this.hour, transformOrigin:'50% 50%'});
        TweenMax.to(this.ui.plus, this.view.model.get('speedWheel'), {rotation:-this.hour, transformOrigin:'50% 50%'});
    }

});
