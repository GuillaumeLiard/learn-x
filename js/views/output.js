var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var templates = require('./../utils/templates.js');
var ChariotBehavior = require('./../behaviors/chariotBehavior');

module.exports = Mn.View.extend({
    template:templates['outputs.svg'],
    className:'output',
    behaviors: [ChariotBehavior],

});
