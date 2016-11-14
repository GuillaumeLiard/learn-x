var $ = require('jquery');
var Mn = require('backbone.marionette');
var GameView  = require('./views/game');

$(document).ready(function(){
    var App = Mn.Application.extend({
        region: '#main',
        channelName:'game',
        radioEvents:{
            'play:again':'playAgain',

        },
        onStart: function() {
            this.getRegion().show(new GameView());
        },
        playAgain: function() {
            location.reload();
        }
    });
    var myApp = new App();
    myApp.start();
});
