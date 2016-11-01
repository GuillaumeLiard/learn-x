var tlHand;

var AnimHand = Mn.Object.extend({
    channelName: 'time',
    radioEvents: {
        'hand:pause': 'pause',
        'hand:resume': 'resume'
    },
    initialize: function(options){
        tlHand = new TimelineMax();
    },
    start:function(hand,left){
        tlHand.add(TweenLite.to(hand, 5, {left:left+"%", ease: Power1.easeOut}));
    },
    pause:function(){
        tlHand.pause();
    },
    resume:function(){
        tlHand.resume();
    }

});










//     var hand = $('#hand');
//     var tl = new TimelineMax({repeat:2, repeatDelay:1});
//     tl.play();
// tl.pause();
// tl.resume();
// tl.seek(1.5);
// tl.reverse();
