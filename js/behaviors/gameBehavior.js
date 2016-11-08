var Mn = require('backbone.marionette');
require('gsap');

var bad;

module.exports = Mn.Behavior.extend({
    modelEvents: {
        'change:keyTouchRail': 'handleBad',
        'change:keyTouchChariot': 'handleGood',
    },
    ui:{
        key:'#key',
        chariot:'#chariot',
        rail:'#rail',
        railPath:'#rail g path',
        lifeIcon:'#life-icon',
        lifeIconPath:'#life-icon path',
    },
    initialize:function(){
        bad = new TimelineMax();
    },

    handleBad:function(){
        if(this.view.model.get('keyTouchRail')){
            bad.fromTo(this.ui.rail, 0.3, {y:"+=-2"}, {y:"+=2", ease:RoughEase.ease.config({strength:8, points:20, template:Linear.easeNone, randomize:false})})
            .to(this.ui.railPath, 0.3, {fill:"red"},0)
            .to(this.ui.railPath, 0.3, {fill:"#dcfafc"})
            .to(this.ui.key, 0.3, {scale:0,opacity:0,transformOrigin:'50% 100%'},0.3)
            .fromTo(this.ui.lifeIcon, 0.3, {y:"+=-2"}, {y:"+=2", ease:RoughEase.ease.config({strength:8, points:20, template:Linear.easeNone, randomize:false})},0)
            .to(this.ui.lifeIconPath, 0.3, {fill:"red"},0)
            .call(this.loseLife,null,this,"=0")
            .to(this.ui.lifeIconPath, 0.3, {fill:"#dcfafc"});
        }
    },
    loseLife:function(){
        this.view.model.set('life',this.view.model.get('life')-1);
            // console.log('loose life');

    },
    handleGood:function(){
        if(this.view.model.get('keyTouchChariot')){
            console.log('good');
        }
    },


});
