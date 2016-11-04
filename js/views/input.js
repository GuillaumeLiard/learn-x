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
        // this.model.set("x",100);
        // this.model.set("step",10);
    },
    // goUp:function(){
    //     this.view.model.set("x",this.view.model.get("x")+3*this.view.model.get("step"),{validate:true});
    // },
});
