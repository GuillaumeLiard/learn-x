var time = Radio.channel('time');
var paused=false;

var GameView = Mn.View.extend({
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
