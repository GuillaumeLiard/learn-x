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
        // 'mouseover @ui.up':'wannaGoUp',
    },
    onAttach:function(){
        this.view.model.set('interval',null);
        _.bindAll(this,'processKey');
        _.bindAll(this,'clearHold');
        _.bindAll(this,'goUp');
        _.bindAll(this,'goUpHold');
        _.bindAll(this,'goDown');
        _.bindAll(this,'goDownHold');
        $(document).on('keydown',this.processKey);
        $(document).on('mouseup',this.clearHold);
    },
    processKey:function(event){
        // console.log(event.which);
        if(event.which === 38){
            this.goUp();
        }
        if(event.which === 40){
            this.goDown();
        }
    },
    goUpHold:function(){
        this.view.model.set('interval',setInterval(this.goUp, intervalDuration));
    },
    goDownHold:function(){
        this.view.model.set('interval',setInterval(this.goDown, intervalDuration));
    },

    clearHold:function(){
        // console.log(this.view.model.get('interval'));
        if(this.view.model.get('interval')) {
          clearInterval(this.view.model.get('interval'));
          this.view.model.set('interval',null);
        }
    },

    goUp:function(){
        this.view.model.set("x",this.view.model.get("x")+this.view.model.get("step"),{validate:true});
    },
    goDown:function(){
        this.view.model.set("x",this.view.model.get("x")-this.view.model.get("step"),{validate:true});
    },
    wannaGoUp:function(){
        console.log('wannaGoUp');
    }
});
