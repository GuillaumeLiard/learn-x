var _ = require('underscore');
var $ = require('jquery');
var Mn = require('backbone.marionette');


module.exports = Mn.Behavior.extend({
    intervalDuration:31,
    interval:null,
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
        _.bindAll(this,'goUp');
        _.bindAll(this,'goDown');
        $(document).on('keydown',this.processKey);
        $(document).on('mouseup',this.clearHold);
    },
    processKey:function(event){
        if (this.view.model.get('interval')){}else{
            if(event.which === 38){
                this.goUp();
            }
            if(event.which === 40){
                this.goDown();
            }
        }
    },
    goUpHold:function(){
        this.clearHold();
        this.view.model.set('interval',setInterval(this.goUp, this.intervalDuration));
    },
    goDownHold:function(){
        this.clearHold();
        this.view.model.set('interval',setInterval(this.goDown, this.intervalDuration));
    },
    clearHold:function(){
          clearInterval(this.view.model.get('interval'));
          this.view.model.set('interval',null);
    },
    goUp:function(){
        this.view.model.set("x",this.view.model.get("x")+this.view.model.get("step"),{validate:true});
    },
    goDown:function(){
        this.view.model.set("x",this.view.model.get("x")-this.view.model.get("step"),{validate:true});
    },
});
