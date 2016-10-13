var tl;

var AnimHand = Mn.Object.extend({
    channelName: 'time',
    radioEvents: {
        'hand:pause': 'pause'
    },
    initialize: function(options){
        tlHand = new TimelineMax();
    },
    start:function(hand,left){
        tlHand.add(TweenLite.to(hand, 5, {left:left+"%", ease: Power1.easeOut}));
    },
    pause:function(){
        tlHand.pause();
    }

});


// var Anim = function(){
//     var hand = $('#hand');
//     var tl = new TimelineMax({repeat:2, repeatDelay:1});
//     tl.add( TweenLite.to(hand, 1, {left:100}) );
//     tl.add( TweenLite.to(hand, 1, {top:50}) );
//     tl.add( TweenLite.to(hand, 1, {opacity:0}) );
//
//     //then later, control the whole thing...
//     tl.play();
//     // tl.pause();
//     // tl.resume();
//     // tl.seek(1.5);
//     // tl.reverse();
//
// };
