var Mn = require('backbone.marionette');


module.exports = Mn.Behavior.extend({
    ui:{
        life:'#life-value-span'
    },
    modelEvents: {
        'change:life': 'updateLife'
    },
    onAttach:function(){
        this.updateLife();
    },
    updateLife:function(){
        this.ui.life.text('x'+this.view.model.get('life'));
    },

});
