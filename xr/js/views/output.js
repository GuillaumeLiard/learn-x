var keyFall;
var speedFall = 10;
var hand;

var PlayView = Marionette.View.extend({
    tagName: 'div',
    template: _.template('<div id="scratch-screen"><div id="key"><img id="key-svg" src="xr/images/key.svg" alt="key"></div><div id="hand"><img id="hand-svg" src="xr/images/hand.svg" alt="hand"></div></div>'),
    initialize:function(){
        anim = new AnimHand();
    },

    onAttach: function() {
        var key = $('#key');
        _.bindAll(this, 'keyFallen');
        _.bindAll(this, 'keyUpdatedPosition');
        keyFall = TweenLite.to(key, speedFall, {top:"50%", ease:Power2.easeIn,onUpdate:this.keyUpdatedPosition,onComplete:this.keyFallen});
    },
    modelEvents: {
        'change:x': 'moveHand'
    },
    keyUpdatedPosition:function(){
        var key1 = $('#key-svg');
        var hand1 = $('#hand-svg');
        if(Draggable.hitTest(key1, hand1)){
            keyFall.kill();
            this.model.set('score',this.model.get('score')+1);
            this.resetKey();
        }
    },
    keyFallen:function(){
        this.model.set('life',this.model.get('life')-1);
        this.resetKey();
    },
    resetKey:function(){
        var newPositionX = (Math.random()-0.5)*0.9*100;
        TweenLite.to(key, 0, {top:"-50%",left:newPositionX+"%", ease:Power2.easeIn});
        speedFall = speedFall - 0.3;
        // console.log('vitesse : '+speedFall);
        keyFall = TweenLite.to(key, speedFall, {top:"50%", ease:Power2.easeIn,onUpdate:this.keyUpdatedPosition,onComplete:this.keyFallen});
    },

    moveHand: function(){
        var hand = $('#hand');
        var x = this.model.get('x');
        if (x === ''){
            console.log('Pas un nombre');
        } else {
            var xP = x*50/240;
            anim.start(hand,xP);
        }


    },

});
