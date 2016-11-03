var _ = require('underscore');
var $ = require('jquery');
var Mn = require('backbone.marionette');

module.exports = Mn.Behavior.extend({
    ui:{
        up:'#up',
        down:'#down',
    },
    events:{
        'click @ui.up':'goUp',
        'click @ui.down':'goDown',
        'mouseover @ui.up':'wannaGoUp',
    },
    onAttach:function(){
        _.bindAll(this,'processKey');
        $(document).on('keydown',this.processKey);
    },
    processKey:function(event){
        // console.log(event.which);
        if(event.which === 38){
            this.goUp();
        }
        if(event.which === 40){
            this.goDown();
        }
    },
    goUp:function(){
        this.view.model.set("x",this.view.model.get("x")+this.view.model.get("step"),{validate:true});
    },
    goDown:function(){
        this.view.model.set("x",this.view.model.get("x")-this.view.model.get("step"),{validate:true});
    },
    wannaGoUp:function(){
        console.log('wannaGoUp');
    }
});
