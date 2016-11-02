var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var AlterKey = require('./../behaviors/alterKey');
var ChariotBehavior = require('./../behaviors/chariotBehavior');
var RailBehavior = require('./../behaviors/railBehavior');
var FormBehavior = require('./../behaviors/formBehavior');

var templates = require('./../utils/templates.js');

// var tlMove;
// var tChariot;

module.exports = Mn.View.extend({
    template:templates['full.svg'],
    className:'output',
    // behaviors: [ChariotBehavior],

    ui:{
        // game:'.game',
        main:'#layer1',
        chariot:'#chariot',
    },
    modelEvents: {
        'change:x': 'move',
        'change:positive': 'teleport'
    },

    initialize:function(){
        _.bindAll(this,'teleportHalf');
        _.bindAll(this,'teleportDone');
        this.model.set('skew',0);
        this.model.set('canMove',true);
        this.model.set('teleporting',false);
        tlMove = new TimelineMax({paused:true});
    },
    onAttach:function(){

        // tlMove.to(this.ui.chariot, 1, {x:200},"moving");
    },
    move: function(event) {
        // console.log('a');
        if(this.model.get('canMove')){
            TweenMax.to(this.ui.chariot, 1, {x:this.model.get('x')});
        }
        // console.log('b');

        // this.glide(1);
        // if(this.model.get('teleporting')===true){
        //     this.teleport();
        // }else{
        // }
    },
    // glide:function(d){
    //     console.log('moving');
    //     tlMove.resume('moving');
    // },
    teleport:function(){
        this.model.set('canMove',false);
        // console.log('c');
        // TweenMax.killTweensOf(this.ui.chariot);

        // tChariot.kill();
        // console.log('d');

        this.model.set('skew',(this.model.get('skew')+1800)%3600);
        // this.model.set('skew',this.model.get('skew')+180);
        console.log(this.model.get('skew'));
        // TweenLite.to(this.ui.chariot, 1, {skewY:this.model.get('skew'),svgOrigin:'100 90',onComplete:this.teleportDone});
        TweenLite.to(this.ui.chariot, 0.5, {scale:0,skewY:1000,transformOrigin:'center center',onComplete:this.teleportHalf});

        TweenLite.to(this.ui.chariot, 0.5, {scale:1,skewY:0,transformOrigin:'center center',onComplete:this.teleportDone,delay:0.5});
        // TweenLite.to(this.ui.chariot, 1, {rotation:"+=360",svgOrigin:'110 100',onComplete:this.teleportDone});
    },
    teleportHalf:function(){
        TweenMax.to(this.ui.chariot, 0, {x:this.model.get('x')});
        // this.glide(0);
        // this.model.set('teleporting',false);
    },
    teleportDone:function(){
        this.model.set('canMove',true);
        this.model.set('teleporting',false);
        // this.glide(0);
        // this.model.set('teleporting',false);
    }



});
