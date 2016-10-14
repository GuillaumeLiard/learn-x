var time = Radio.channel('time');
var paused=false;

var GameView = Mn.View.extend({
    template:_.template('<div id="play"></div><div id="input"></div>'),
    className:'game',
    regions: {
        play: {
            el: '#play',
        },
        input: {
            el: '#input',
        }
    },
    // model:new Backbone.Model({paused:false}),
    // modelEvents:{
    //     'change:paused': 'togglePause'
    // },
    // togglePause:function(){
    //     this.model.set('paused',!this.model.get('paused'));
    // },

    onAttach:function(){
        var inputModel = new InputModel();
        this.showChildView('input', new InputView({model:inputModel}));
        this.showChildView('play', new PlayView({model:inputModel}));
        console.log('game2');
    },
    events:{
        'click': 'togglePause'
    },
    togglePause:function(){
        paused=!paused;
        if(paused){
            time.trigger('hand:pause');
            time.trigger('key:pause');
        }else{
            time.trigger('hand:resume');
            time.trigger('key:resume');
        }
    },
    // pause:function(){
    //
    //     time.trigger('hand:pause');
    //     time.trigger('key:pause');
    //     console.log('pause');
    // },
});
