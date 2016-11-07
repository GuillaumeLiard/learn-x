var $ = require('jquery');
var Mn = require('backbone.marionette');
var GameView  = require('./views/game');

$(document).ready(function(){
    var App = Mn.Application.extend({
        region: '#main',
        onStart: function() {
            this.getRegion().show(new GameView());
        }
    });
    var myApp = new App();
    myApp.start();
});
