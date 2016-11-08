var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var templates = require('./../utils/templates.js');
var Chariot = require('./../behaviors/chariotBehavior');
var Key = require('./../behaviors/keyBehavior');
var Game = require('./../behaviors/gameBehavior');

module.exports = Mn.View.extend({
    template:templates['outputs.svg'],
    className:'output',
    behaviors: [Chariot,Key,Game],

});
