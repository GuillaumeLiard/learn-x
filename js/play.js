var keyFall;

var PlayView = Marionette.View.extend({
    tagName: 'div',
    template: _.template('<div id="scratch-screen"><div id="key"><img id="key-svg" src="images/key.svg" alt="key"></div><div id="hand"><img id="hand-svg" src="images/hand.svg" alt="hand"></div></div>'),
    onAttach: function() {
        var key = $('#key');
        keyFall = TweenLite.to(key, 2, {top:"50%", ease:Power2.easeIn,onUpdate:this.keyUpdatedPosition});
    },
    modelEvents: {
        'change': 'xChanged'
    },
    keyUpdatedPosition:function(){
        var key1 = $('#key-svg');
        var hand1 = $('#hand-svg');
        if(Draggable.hitTest(key1, hand1)){
            keyFall.kill();
        }
    },

    xChanged: function(event){
        var hand = $('#hand');
        var x = this.model.get('x');
        if (x === ''){
            console.log('Pas un nombre');
        } else {
            var xP = x*50/240;
            TweenLite.to(hand, 0.2, {left:xP+"%", ease: Power1.easeOut});
        }


    },

});
