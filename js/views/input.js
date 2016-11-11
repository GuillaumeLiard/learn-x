var Mn = require('backbone.marionette');
var templates = require('./../utils/templates.js');
var IntroOutro = require('./../behaviors/input/introOutro');
var Joystick = require('./../behaviors/input/joystick');
var CoordinateDisplay = require('./../behaviors/input/coordinateDisplay');
var Step = require('./../behaviors/input/step');

module.exports = Mn.View.extend({
    template:templates['inputs.svg'],
    className:'input',
    behaviors: [IntroOutro,Joystick,CoordinateDisplay,Step],
});
