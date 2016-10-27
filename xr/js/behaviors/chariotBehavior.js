var newX;
var widthScratch = 480*0.8;
// var widthChariot;
var wInitChariot;
var wGame;
var chariotTl;

var ChariotBehavior = Mn.Behavior.extend({
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
onAttach:function(){
    wInitChariot = this.ui.chariot.width();
    // wGame = this.view.$el.width();

    this.setPosition();
    _.bindAll(this,'handleResize');
    $(window).on('resize',this.handleResize);
    // tl.to(this.ui.chariot, 0, {opacity:1},"intro2")
    // .fromTo(this.ui.path, 1, {fill:color1}, {fill:color5},"intro2");
},
setPosition:function(){

    chariotTl = new TimelineMax();
    chariotTl.fromTo(this.ui.path, 0, {fill:color1}, {fill:color5})
    .to(this.ui.chariot, 0, {left:"50%", top:"70%"})
    .to(this.ui.chariot, 0, {xPercent:-50, yPercent:-50});
    this.handleResize();
},
handleResize:function(){
    wGame = this.view.$el.width();
    var newScale = 0.1*wGame/wInitChariot;
    chariotTl.to(this.ui.chariot, 0, {scale:newScale});
},

  xChanged: function(event) {
      newX = this.view.model.get('x');
      var newLeft = 50+(newX*widthScratch/wGame)-((100*wInitChariot/wGame)/2);
      TweenLite.to(this.ui.chariot, 1, {left:newLeft+"%"});
  }
});
