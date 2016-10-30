var Backbone = require('backbone');
var MasterBehavior = require('./masterBehavior');

module.exports = MasterBehavior.extend({
    model:new Backbone.Model(),
    ui:{
        rail:'#rail',
        path:'#rail g g path'
    },
    config:function(){
        // this.model.set('state1',{main:this.ui.rail,left:"50%", top:"70%",wPercent:1,xPercent:-50, yPercent:-69});
        // this.model.set('state1',{main:this.ui.rail,left:"50%", top:"70%",wPercent:1,xPercent:-50, yPercent:-50});
        this.model.set('state1',{main:this.ui.rail,left:"50%", top:"71%",wPercent:1,xPercent:-50, yPercent:-39});
    },
    onResizeDone:function(){
        // TweenLite.to(this.ui.rail,0,{scaleY:0.3*this.model.get('scale')});
        // TweenLite.to(this.ui.rail,3,{rotation:360});
    },
    onGameStart:function(){
        console.log('start');
    }
});
