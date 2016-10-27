var MasterBehavior = Mn.Behavior.extend({    
    onAttach:function(){
        this.config();
        this.model.set('wInit',this.model.get('state1').main.width());
        this.model.set('wGame',this.view.$el.width());
        this.model.set('tl',new TimelineMax());

        this.setPosition();
        _.bindAll(this,'handleResize');
        $(window).on('resize',this.handleResize);
    },
    setPosition:function(){
        // this.model.get('tl').fromTo(this.ui.path, 0, {fill:color1}, {fill:color5})
        this.model.get('tl').to(this.model.get('state1').main, 0, {left:this.model.get('state1').left, top:this.model.get('state1').top})
            .to(this.model.get('state1').main, 0, {xPercent:-50, yPercent:-50});
        this.handleResize();
    },
    handleResize:function(){
        this.model.set('wGame',this.view.$el.width());
        var newScale = this.model.get('state1').wPercent*this.model.get('wGame')/this.model.get('wInit');
        this.model.get('tl').to(this.model.get('state1').main, 0, {scale:newScale});
    },
});
