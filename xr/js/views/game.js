var MainView = Mn.View.extend({
    channelName: 'general',
    radioEvents: {
        'hand:pause': 'pause'
    },

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
    },
    events:{
        'click': 'pause'
    },
    pause:function(){
        var time = Radio.channel('time');
        time.trigger('hand:pause');
        // console.log('pause');
    },
});
