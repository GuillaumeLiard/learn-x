var Mn = require('backbone.marionette');


var wForm;
var wGame;

module.exports = Mn.Behavior.extend({
    ui:{
        up:'#g3141'
    },
    events:{
        'click @ui.up':'goUp',
        'mouseover @ui.up':'wannaGoUp',
    },

    goUp:function(){
        this.view.model.set("x",this.view.model.get("x")+this.view.model.get("step"),{validate:true});
        console.log('up');
    },
    wannaGoUp:function(){
        console.log('wannaGoUp');
    }

// onAttach:function(){
//
//     wForm = this.ui.form.width();
//     wGame = this.view.$el.width();
//     var formPos = 50-((100*wForm/wGame)/2);
//     TweenLite.fromTo(this.ui.form, 1, {scale:0.5},{scale:1,left:formPos+"%",opacity:1});
// }
});
