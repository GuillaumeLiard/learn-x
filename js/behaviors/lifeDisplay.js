var Mn = require('backbone.marionette');


module.exports = Mn.Behavior.extend({
    ui:{
        life:'#life-value-span'
    },
    modelEvents: {
        'change:life': 'updateLife'
    },
    updateLife:function(){
        console.log(this.view.model.get('life'));
        this.ui.life.text('x'+this.view.model.get('life'));
    },

});
