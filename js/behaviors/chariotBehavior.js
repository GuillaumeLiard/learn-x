var Backbone = require('backbone');
var MasterBehavior = require('./masterBehavior');


var widthScratch = 480;


module.exports = MasterBehavior.extend({
    model:new Backbone.Model(),
    ui:{
        chariot:'#chariot',
        path:'#chariot g g path'
    },
    events:{
        'resize window': 'resize'
    },
    modelEvents: {
        'change:x': 'xChanged'
    },
    config:function(){
        this.model.set('skew',0);
        this.model.set('state1',{main:this.ui.chariot,left:"50%", top:"70%",wPercent:0.1,xPercent:-50, yPercent:-50});
    },
    xChanged: function(event) {
        var newX = this.view.model.get('x');
        var newLeft = 100*(0.5+(newX/widthScratch));
        TweenLite.to(this.model.get('state1').main, 1, {left:newLeft+"%"});
    },
    onTeleport:function(){
        this.model.set('skew',this.model.get('skew')+180);
        // TweenLite.to(this.ui.chariot, 0.4, {rotation:360});
        TweenLite.to(this.ui.chariot, 1, {skewY:this.model.get('skew')});
        // TweenLite.to(this.ui.chariot, 0.2, {opacity:0,delay:0});
        // TweenLite.to(this.ui.chariot, 0.2, {opacity:1,delay:0.6});
        console.log('tel');
    }
});
