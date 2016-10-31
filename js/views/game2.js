var _ = require('underscore');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var AlterKey = require('./../behaviors/alterKey');
var ChariotBehavior = require('./../behaviors/chariotBehavior');
var RailBehavior = require('./../behaviors/railBehavior');
var FormBehavior = require('./../behaviors/formBehavior');

var templates = require('./../utils/templates.js');

module.exports = Mn.View.extend({
    // template:false,
    // template:_.template(templates.input),
    // template:templates['templates.js'],
    template:templates['full_op.svg'],
    className:'game',
    model:new Backbone.Model(),
    // behaviors: [AlterKey,ChariotBehavior,RailBehavior,FormBehavior],

    ui:{
        game:'.game',
        main:'#layer1'
    },

    // onAttach:function(){
    //     console.log(templates.input);
    // },
});
