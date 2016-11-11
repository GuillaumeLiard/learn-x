var Mn = require('backbone.marionette');


module.exports = Mn.Behavior.extend({
    ui:{
        score:'#score-value-span'
    },
    modelEvents: {
        'change:score': 'updateScore'
    },
    onAttach:function(){
        this.updateScore();
    },
    updateScore:function(){
        this.ui.score.text('x'+this.view.model.get('score'));
    },

});
