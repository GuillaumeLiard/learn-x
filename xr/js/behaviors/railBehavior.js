
var wRail;
var hRail;
var wGame;
var hGame;
var railTl;

var RailBehavior = Mn.Behavior.extend({
    ui:{
        rail:'#rail',
        path:'#rail g g path'
    },
    onAttach:function(){

        wRail = this.ui.rail.width();
        hRail = this.ui.rail.height();
        wGame = this.view.$el.width();
        hGame = this.view.$el.height();
        console.log(wGame);
        console.log(hGame);
        console.log(wRail);

        var railPos = 50-((100*wRail/wGame)/2);

        // railTl.to(this.ui.rail, 0, {opacity:1,svgOrigin:"24 30",x:100},"intro1")
        // // .to(this.ui.rail, 1, {scaleX:scaleXratio,transformOrigin:"57% center"},"intro1")
        // .to(this.ui.rail, 1, {scaleX:1},"intro1")
        // .fromTo(this.ui.rail, 1, {stroke:color1,fill:color1}, {stroke:color5,fill:color5},"intro1")

        // .to(this.ui.rail, 1, {scale:0.5,transformOrigin:"right center"},"intro1+=1");
        // .to(this.ui.rail, 1, {transformOrigin:"left bottom"},"intro1");

        this.setPosition();
    },
    setPosition:function(){
        // var scaleXratio = wGame/wRail;
        railTl = new TimelineMax();
        // railTl.to(this.ui.rail, 0, {attr:{x:100, y:-1000}});
        railTl.to(this.ui.rail, 0, {y:0});
        railTl.to(this.ui.rail, 0, {scaleX:2});
        railTl.to(this.ui.rail, 0.1, {yPercent:35});
        // railTl.to(this.ui.rail, 1, {yPercent:20,scaleY:0.3,transformOrigin:"50% 41%"});
    }
});
