var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var templates = require('./../utils/templates.js');
var Chariot = require('./../behaviors/chariotBehavior');
var KeyCommand = require('./../behaviors/keyCommand');
var Game = require('./../behaviors/gameBehavior');
var LifeDisplay = require('./../behaviors/lifeDisplay');

module.exports = Mn.View.extend({
    template:templates['outputs.svg'],
    className:'output',
    behaviors: [Chariot,KeyCommand,Game,LifeDisplay],

});
