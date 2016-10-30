var _ = require('underscore');
var $ = require('jquery');
var Mn = require('backbone.marionette');
require('gsap');

module.exports = Mn.Behavior.extend({
    onAttach:function(){
        this.model.set('tl',new TimelineMax());
        this.config();
        this.model.set('wInit',this.model.get('state1').main.width());
        this.model.set('wGame',this.view.$el.width());

        this.setPosition();
        _.bindAll(this,'handleResize');
        $(window).on('resize',this.handleResize);
        this.triggerMethod('game:start');
    },
    setPosition:function(){
        // this.model.get('tl').fromTo(this.ui.path, 0, {fill:color1}, {fill:color5})
        this.model.get('tl').to(this.model.get('state1').main, 0, {left:this.model.get('state1').left, top:this.model.get('state1').top})
            .to(this.model.get('state1').main, 0, {xPercent:this.model.get('state1').xPercent, yPercent:this.model.get('state1').yPercent});
        this.handleResize();
    },
    handleResize:function(){
        this.model.set('wGame',this.view.$el.width());
        var scale = this.model.get('state1').wPercent*this.model.get('wGame')/this.model.get('wInit');
        this.model.get('tl').to(this.model.get('state1').main, 0, {scale:scale});
        this.model.set('scale',scale);
        this.triggerMethod('resize:done');
    }
});
