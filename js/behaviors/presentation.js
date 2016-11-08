var Mn = require('backbone.marionette');


module.exports = Mn.Behavior.extend({
    channel:'game',
    radioEvents:{
        'inputs:hide':'hide'
    },
    hide:function(){
        console.log('inputs hide');
    }
});
