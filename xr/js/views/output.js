var keyFall;
// var speedFall = 1;
var hand;

var PlayView = Marionette.View.extend({
    tagName: 'div',
    template: _.template('<div id="scratch-screen"><div id="key"><img id="key-svg" src="xr/images/key.svg" alt="key"></div><div id="hand"><img id="hand-svg" src="xr/images/hand.svg" alt="hand"></div></div>'),
    initialize:function(){
        animHand = new AnimHand();
        animKey = new AnimKey();
    },

    onAttach: function() {
        var key = $('#key');
        // _.bindAll(this, 'keyFallen');
        // _.bindAll(this, 'keyUpdatedPosition');
        animKey.start(key);
        // keyFall = TweenLite.to(key, speedFall, {top:"50%", ease:Power2.easeIn,onUpdate:this.keyUpdatedPosition,onComplete:this.keyFallen});
    },
    modelEvents: {
        'change:x': 'moveHand'
    },

    channelName: 'space',
    radioEvents: {
        'collision:keyHand': 'handleWin'
    },
    handleWin:function(){
        console.log('touched!');
    },

    // resetKey:function(){
    //     var newPositionX = (Math.random()-0.5)*0.9*100;
    //     TweenLite.to(key, 0, {top:"-50%",left:newPositionX+"%", ease:Power2.easeIn});
    //     speedFall = speedFall - 0.3;
    //     // console.log('vitesse : '+speedFall);
    //     keyFall = TweenLite.to(key, speedFall, {top:"50%", ease:Power2.easeIn,onUpdate:this.keyUpdatedPosition,onComplete:this.keyFallen});
    // },

    moveHand: function(){
        var hand = $('#hand');
        var x = this.model.get('x');
        if (x === ''){
            console.log('Pas un nombre');
        } else {
            var xP = x*50/240;
            animHand.start(hand,xP);
        }


    },

});
