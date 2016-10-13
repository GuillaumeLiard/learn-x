var speed=5;

var tlKey;
var space = Radio.channel('space');

var AnimKey = Mn.Object.extend({
    channelName: 'time',
    radioEvents: {
        'key:pause': 'pause',
        'key:resume': 'resume'
    },
    initialize: function(options){
        tlKey = new TimelineMax();
    },
    start:function(key){
        // tlKey.add(TweenLite.to(key, speed, {top:"50%", ease:Power2.easeIn,onUpdate:this.keyUpdatedPosition,onComplete:this.keyFallen}));
        tlKey.add(TweenLite.to(key, speed, {top:"50%", ease:Power2.easeIn,onUpdate:this.keyUpdatedPosition}));
    },
    pause:function(){
        tlKey.pause();
    },
    resume:function(){
        tlKey.resume();
    },
    keyUpdatedPosition:function(){

        var key1 = $('#key-svg');
        var hand1 = $('#hand-svg');
        if(Draggable.hitTest(key1, hand1)){
            console.log('updated');
            space.trigger('collision:keyHand');
        //     keyFall.kill();
        //     this.model.set('score',this.model.get('score')+1);
        //     this.resetKey();
        }
    },
    keyFallen:function(){
        this.model.set('life',this.model.get('life')-1);
        this.resetKey();
    },
});
