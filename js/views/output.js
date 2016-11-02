var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var AlterKey = require('./../behaviors/alterKey');
var ChariotBehavior = require('./../behaviors/chariotBehavior');
var RailBehavior = require('./../behaviors/railBehavior');
var FormBehavior = require('./../behaviors/formBehavior');

var templates = require('./../utils/templates.js');

var validBounds = 0.91;

module.exports = Mn.View.extend({
    template:templates['outputs.svg'],
    className:'output',

    ui:{
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

    },
    move: function(event) {
        if(this.model.get('canMove')){
            TweenMax.to(this.ui.chariot, 1, {x:validBounds*this.model.get('x')});
        }
    },
    teleport:function(){
        this.model.set('canMove',false);


        this.model.set('skew',(this.model.get('skew')+1800)%3600);
        console.log(this.model.get('skew'));
        TweenLite.to(this.ui.chariot, 0.5, {scale:0,skewY:1000,transformOrigin:'center center',onComplete:this.teleportHalf});

        TweenLite.to(this.ui.chariot, 0.5, {scale:1,skewY:0,transformOrigin:'center center',onComplete:this.teleportDone,delay:0.5});
    },
    teleportHalf:function(){
        TweenMax.to(this.ui.chariot, 0, {x:validBounds*this.model.get('x')});
    },
    teleportDone:function(){
        this.model.set('canMove',true);
        this.model.set('teleporting',false);
    }



});
