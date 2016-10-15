var tl;
var rail;
var railTemplate = '<svg id="rail" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 48 60" enable-background="new 0 0 48 48" xml:space="preserve"><g><g><path d="M46.1,25.1H1.7c-0.5,0-1-0.399-1-1s0.4-1,1-1h44.5c0.5,0,1,0.4,1,1S46.7,25.1,46.1,25.1z"/></g></g></svg>';

var GameView = Mn.View.extend({
    // template:_.template('<svg id="rail" src="xr/images/noun_229873_cc.svg" alt="rail">'),
    template:_.template(railTemplate),
    className:'game',

    onAttach:function(){
        rail = $('#rail');
        tl = new TimelineMax();
        // tl.add(TweenLite.to(rail, 1, {color:"rgba(60, 116, 190, 1)", ease:Power2.easeIn}));
        TweenLite.to(rail, 1, {opacity:1});
        TweenLite.to(rail, 1, {scaleX:3});
        TweenLite.to(rail, 1, {stroke:color4,fill:color5});
    }
});
