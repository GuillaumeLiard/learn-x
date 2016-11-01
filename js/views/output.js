var _ = require('underscore');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var AlterKey = require('./../behaviors/alterKey');
var ChariotBehavior = require('./../behaviors/chariotBehavior');
var RailBehavior = require('./../behaviors/railBehavior');
var FormBehavior = require('./../behaviors/formBehavior');

var templates = require('./../utils/templates.js');


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
        'change:x': 'move'
    },

    move: function(event) {
        TweenLite.to(this.ui.chariot, 1, {x:this.model.get('x')});
    },

    // onAttach:function(){
    //     console.log(templates.input);
    // },
});
