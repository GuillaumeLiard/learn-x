var newX;

var ChariotBehavior = Mn.Behavior.extend({
    ui:{
        chariot:'#chariot'
    },
  modelEvents: {
    'change:x': 'xChanged'
  },
  xChanged: function(event) {
      newX = this.view.model.get('x');
      TweenLite.to(this.ui.chariot, 1, {left:newX*6});
    //   .to(rail, 1, {scaleX:3,transformOrigin:"57% center"});
      console.log(newX);
  }
});
