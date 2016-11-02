var Mn = require('backbone.marionette');


module.exports = Mn.Behavior.extend({
    ui:{
        display:'#numberDisplay'
    },
    modelEvents: {
        'change:x': 'updateDisplay'
    },

    initialize:function(){
        // this.updateDisplay();
    },

    updateDisplay:function(){
        this.ui.display.text(this.view.model.get('x'));
    },

});
