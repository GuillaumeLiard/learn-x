var _ = require('underscore');
var $ = require('jquery');
var Mn = require('backbone.marionette');

var intervalDuration = 50;

module.exports = Mn.Behavior.extend({
    ui:{
        up:'#up',
        down:'#down',
    },
    events:{
        'mousedown @ui.up':'goUpHold',
        'mousedown @ui.down':'goDownHold',
        'mouseleave @ui.up':'clearHold',
        'mouseleave @ui.down':'clearHold',
    },
    onAttach:function(){
        this.view.model.set('interval',null);
        _.bindAll(this,'processKey');
        _.bindAll(this,'clearHold');
        _.bindAll(this,'goUpHold');
        _.bindAll(this,'goDownHold');
        $(document).on('keydown',this.processKey);
        $(document).on('mouseup',this.clearHold);
    },
    processKey:function(event){
        if(event.which === 38){
            this.view.goUp();
        }
        if(event.which === 40){
            this.view.goDown();
        }
    },
    goUpHold:function(){
        this.clearHold();
        this.view.model.set('interval',setInterval(this.view.goUp, intervalDuration));
    },
    goDownHold:function(){
        this.clearHold();
        this.view.model.set('interval',setInterval(this.view.goDown, intervalDuration));
    },
    clearHold:function(){
          clearInterval(this.view.model.get('interval'));
          this.view.model.set('interval',null);
    }
});
