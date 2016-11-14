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
    eventsDesktop:function(){
        this.ui.up.on('mousedown',this.goUpHold);
        this.ui.up.on('mouseleave',this.clearHold);
        this.ui.down.on('mousedown',this.goDownHold);
        this.ui.down.on('mouseleave',this.clearHold);
        this.ui.jump.on('mousedown',this.jump);
        $(document).on('mouseup',this.clearHold);
    },
    eventsMobile:function(){
        this.ui.up.on('touchstart',this.goUpHold);
        this.ui.down.on('touchstart',this.goDownHold);
        this.ui.jump.on('touchstart',this.jump);
        $(document).on('touchend',this.clearHold);
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
        this.setTouchMouseBinding();
    },
    setTouchMouseBinding:function(){
        if (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
                (navigator.msMaxTouchPoints > 0)) {
            this.eventsMobile();
        } else{
            this.eventsDesktop();
        }
    },
    setKeyBinding:function(){
        Keyboard.bind('up', this.goUpHoldKeyboard,this.clearHoldUp);
        Keyboard.bind('down', this.goDownHoldKeyboard,this.clearHoldDown);
        Keyboard.bind('space', this.jump);
    },
    goUpHoldKeyboard:function(e){
        arrow = 'up';
        e.preventRepeat();
        this.goUpHold();
    },
    goDownHoldKeyboard:function(e){
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
