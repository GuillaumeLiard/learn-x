var Backbone = require('backbone');
var Mn = require('backbone.marionette');


var widthScratch = 480;


module.exports = Mn.View.extend({
    ui:{
        chariot:'#chariot',
        // path:'#chariot g g path'
    },
    modelEvents: {
        'change:x': 'xChanged'
    },

    xChanged: function(event) {
        console.log('xchan');
        var newX = this.view.model.get('x');
        var newLeft = 100*(0.5+(newX/widthScratch));
        TweenLite.to(this.ui.chariot, 1, {left:newLeft+"%"});
    },
    // onTeleport:function(){
    //     this.model.set('skew',this.model.get('skew')+180);
    //     // TweenLite.to(this.ui.chariot, 0.4, {rotation:360});
    //     TweenLite.to(this.ui.chariot, 1, {skewY:this.model.get('skew')});
    //     // TweenLite.to(this.ui.chariot, 0.2, {opacity:0,delay:0});
    //     // TweenLite.to(this.ui.chariot, 0.2, {opacity:1,delay:0.6});
    //     console.log('tel');
    // }
});
