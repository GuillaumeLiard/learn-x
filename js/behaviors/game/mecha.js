var _ = require('underscore');
var Backbone = require('backbone');
var Mn = require('backbone.marionette');
require('gsap');

module.exports = Mn.Behavior.extend({
    modelEvents:{
        "change:life":'abc'
    },
    abc:function(){
        console.log('abc abc');
    }
});
