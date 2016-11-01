var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var AlterKey = require('./../behaviors/alterKey');
var FormBehavior = require('./../behaviors/formBehavior');

var templates = require('./../utils/templates.js');

module.exports = Mn.View.extend({
    model:new Backbone.Model(),
    template:templates.input,
    className:'input',
    behaviors: [AlterKey,FormBehavior],
});
