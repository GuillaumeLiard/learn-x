var PlayView = Marionette.View.extend({
    tagName: 'div',
    template: _.template('<div id="scratch-screen"><div id="key"><img id="key-svg" src="images/key.svg" alt="key"></div><div id="hand"><img id="hand-svg" src="images/hand.svg" alt="hand"></div></div>'),
    onAttach: function() {
        var key = $('#key');
        TweenLite.to(key, 3, {top:"50%", ease:Power2.easeIn});
    },
    modelEvents: {
        'change': 'xChanged'
    },

    xChanged: function(event){
        var hand = $('#hand');
        var x = this.model.get('x');
        if (x === ''){
            console.log('Pas un nombre');
        } else {
            var xP = x*50/240;
            TweenLite.to(hand, 0.2, {left:xP+"%", ease: Power1.easeOut});
            // TweenLite.to(hand, 0.2, {left:xP+"%", ease:Power2.easeIn});
        }


    },

});
