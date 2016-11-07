var _ = require('underscore');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var AlterKey = require('./../behaviors/alterKey');
var FormBehavior = require('./../behaviors/formBehavior');
var NumberDisplay = require('./../behaviors/numberDisplay');

var templates = require('./../utils/templates.js');

module.exports = Mn.View.extend({
    // model:new Backbone.Model(),
    template:templates['inputs.svg'],
    className:'input',
    behaviors: [FormBehavior,NumberDisplay],
    initialize:function(){
        _.bindAll(this,'goUp');
        _.bindAll(this,'goDown');
    },
    goUp:function(){
        this.model.set("x",this.model.get("x")+this.model.get("step"),{validate:true});
    },
    goDown:function(){
        this.model.set("x",this.model.get("x")-this.model.get("step"),{validate:true});
    },
});
