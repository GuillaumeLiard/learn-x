var Mn = require('backbone.marionette');
require('gsap');

module.exports = Mn.Behavior.extend({
    modelEvents: {
        'change:keyTouchRail': 'lose',
        'change:keyTouchChariot': 'win',
    },
    // ui:{
    //     key:'#key',
    //     chariot:'#chariot',
    // },

    lose:function(){
        console.log('lose');
    },
    win:function(){
        console.log('win');
    },


});
