var _ = require('underscore');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var templates = require('./../utils/templates.js');
var GameModel = require('./../models/gameModel');
var IntroOutro = require('./../behaviors/game/introOutro');
var Mecha = require('./../behaviors/game/mecha');
var Output = require('./output.js');
var Input = require('./input.js');

var game = Backbone.Radio.channel('game');

module.exports = Mn.View.extend({
    template:templates.game,
    className:'game',
    model:new GameModel(),
    behaviors:[IntroOutro,Mecha],
    regions: {
        zone1: '#zone1',
        zone2: '#zone2'
    },
    onRender: function() {
        this.showChildView('zone2', new Input({model:this.model}));
        this.showChildView('zone1', new Output({model:this.model}));
    }
});
