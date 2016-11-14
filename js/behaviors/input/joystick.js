var _ = require('underscore');
var $ = require('jquery');
var Mn = require('backbone.marionette');
var Keyboard = require('keyboardjs');
// var Keyboard = require('./../../../bower_components/keyboardjs/dist/keyboard.js');

var arrow;

module.exports = Mn.Behavior.extend({
    intervalDuration:31,
    interval:null,
    ui:{
        up:'#up',
        down:'#down',
        jump:'#jump',
    },
    events:{
        'mousedown @ui.up':'goUpHold',
        'mouseleave @ui.up':'clearHold',
        'mousedown @ui.down':'goDownHold',
        'mouseleave @ui.down':'clearHold',
        'mousedown @ui.jump':'jump',
    },
    onAttach:function(){
        this.view.model.set('interval',null);
        _.bindAll(this,'goUpHoldKeyboard');
        _.bindAll(this,'goDownHoldKeyboard');
        _.bindAll(this,'clearHold');
        _.bindAll(this,'clearHoldUp');
        _.bindAll(this,'clearHoldDown');
        _.bindAll(this,'goUpHold');
        _.bindAll(this,'goDownHold');
        _.bindAll(this,'goUp');
        _.bindAll(this,'goDown');
        _.bindAll(this,'jump');
        this.setKeyBinding();
        $(document).on('mouseup',this.clearHold);
    },
    setKeyBinding:function(){
        Keyboard.bind('up', this.goUpHoldKeyboard,this.clearHoldUp);
        Keyboard.bind('down', this.goDownHoldKeyboard,this.clearHoldDown);
        Keyboard.bind('space', this.jump);
    },
    goUpHoldKeyboard:function(e){
        console.log('up');
        arrow = 'up';
        e.preventRepeat();
        this.goUpHold();
    },
    goDownHoldKeyboard:function(e){
        console.log('down');
        arrow = 'down';
        e.preventRepeat();
        this.goDownHold();
    },
    goUpHold:function(e){
        this.clearHold();
        this.view.model.set('interval',setInterval(this.goUp, this.intervalDuration));
    },
    goDownHold:function(e){
        this.clearHold();
        this.view.model.set('interval',setInterval(this.goDown, this.intervalDuration));
    },
    clearHoldUp:function(e){
        if(arrow==='up'){
            this.clearHold();
        }
    },
    clearHoldDown:function(e){
        if(arrow==='down'){
            this.clearHold();
        }
    },
    clearHold:function(e){
        clearInterval(this.view.model.get('interval'));
        this.view.model.set('interval',null);
    },
    goUp:function(){
        this.view.model.set("x",this.view.model.get("x")+this.view.model.get("step"));
    },
    goDown:function(){
        this.view.model.set("x",this.view.model.get("x")-this.view.model.get("step"));
    },
    jump:function(){
        if(!this.view.model.get("isJumping")){
            this.view.model.set("isJumping",true);
        }

    },
});
