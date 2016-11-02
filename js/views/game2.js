var _ = require('underscore');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
var AlterKey = require('./../behaviors/alterKey');
var ChariotBehavior = require('./../behaviors/chariotBehavior');
var RailBehavior = require('./../behaviors/railBehavior');
var FormBehavior = require('./../behaviors/formBehavior');
var templates = require('./../utils/templates.js');
var Output = require('./output.js');
var Input = require('./input.js');
var GameModel = require('./../models/gameModel');

module.exports = Mn.View.extend({
    template:templates.game,
    // template:templates['full_op.svg'],
    className:'game',
    model:new GameModel(),
    regions: {
        zone1: '#zone1',
        zone2: '#zone2'
    },
    onRender: function() {
        this.showChildView('zone2', new Input({model:this.model}));
        this.showChildView('zone1', new Output({model:this.model}));
    },
    // behaviors: [AlterKey,ChariotBehavior,RailBehavior,FormBehavior],

    ui:{
        game:'.game',
        // main:'#layer1'
    },

    // onAttach:function(){
    //     console.log(templates.input);
    // },
});
