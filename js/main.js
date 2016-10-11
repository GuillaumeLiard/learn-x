$(document).ready(function(){

    var MainView = Mn.View.extend({
        regions: {
            play: {
                el: '#play',
            },
            input: {
                el: '#input',
            }
        },
        className:'main',
        template:_.template('<div id="play"></div><div id="input"></div>'),

        onAttach:function(){
            var inputModel = new InputModel();
            this.showChildView('input', new InputView({model:inputModel}));
            this.showChildView('play', new PlayView({model:inputModel}));            
        }
    });


    var App = Mn.Application.extend({
        region: '#main',

        onStart: function() {
            this.getRegion().show(new MainView());
        }
    });

    var myApp = new App();
    myApp.start();


});
