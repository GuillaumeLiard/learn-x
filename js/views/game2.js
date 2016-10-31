var _ = require('underscore');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var AlterKey = require('./../behaviors/alterKey');
var ChariotBehavior = require('./../behaviors/chariotBehavior');
var RailBehavior = require('./../behaviors/railBehavior');
var FormBehavior = require('./../behaviors/formBehavior');

var templates = require('./../utils/templates.js');

module.exports = Mn.View.extend({
    template:_.template(templates.rail+templates.chariot+templates.input),
    className:'game',
    model:new Backbone.Model(),
    behaviors: [AlterKey,ChariotBehavior,RailBehavior,FormBehavior],

    ui:{
        game:'.game'
    },

    // onAttach:function(){
    //
    // },
});
