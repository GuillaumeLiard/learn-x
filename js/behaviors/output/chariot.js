var Mn = require('backbone.marionette');
require('gsap');
var validBounds = 0.91;

module.exports = Mn.Behavior.extend({
    ui:{
        chariot:'#chariot',
    },
    modelEvents: {
        'change:x': 'move',
    },
    move: function(event) {
        TweenMax.to(this.ui.chariot, 1, {x:validBounds*this.view.model.get('x')});
    },
});
