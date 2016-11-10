var Mn = require('backbone.marionette');
var templates = require('./../utils/templates.js');
var IntroOutro = require('./../behaviors/output/introOutro');
var Chariot = require('./../behaviors/output/chariot');
var Key = require('./../behaviors/output/key');
var Life = require('./../behaviors/output/life');
var GoodBad = require('./../behaviors/output/goodBad');

module.exports = Mn.View.extend({
    template:templates['outputs.svg'],
    className:'output',
    behaviors: [IntroOutro,Chariot,Key,Life,GoodBad],
});
