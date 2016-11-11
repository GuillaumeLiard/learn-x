var Mn = require('backbone.marionette');


module.exports = Mn.Behavior.extend({
    ui:{
        stepDown:'#stepDown tspan',
        stepUp:'#stepUp tspan',
    },
    modelEvents: {
        'change:step': 'updateStep'
    },
    onAttach:function(){
        this.updateStep();
    },
    updateStep:function(){
        this.ui.stepUp.text("+"+this.view.model.get('step'));
        this.ui.stepDown.text("-"+this.view.model.get('step'));
    },

});
