var Mn = require('backbone.marionette');
var Backbone = require('backbone');
var _ = require('underscore');

var AlterKey = require('./../behaviors/alterKey');
var ChariotBehavior = require('./../behaviors/chariotBehavior');
var RailBehavior = require('./../behaviors/railBehavior');
var FormBehavior = require('./../behaviors/formBehavior');

// module.exports = function(){



var step=10;

var tl;
var rail;
// var railTemplate = '';
var railTemplate = '<svg id="rail" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 48 60" enable-background="new 0 0 48 48" xml:space="preserve"><g><g><path d="M46.1,25.1H1.7c-0.5,0-1-0.399-1-1s0.4-1,1-1h44.5c0.5,0,1,0.4,1,1S46.7,25.1,46.1,25.1z"/></g></g></svg>';
// var railTemplate = '<svg id="rail" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 23 48 60" enable-background="new 0 0 48 48" xml:space="preserve"><g><g><path d="M46.1,25.1H1.7c-0.5,0-1-0.399-1-1s0.4-1,1-1h44.5c0.5,0,1,0.4,1,1S46.7,25.1,46.1,25.1z"/></g></g></svg>';
var chariotTemplate = '<svg id="chariot" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 128 160" enable-background="new 0 0 128 128" xml:space="preserve"><g><g><path fill="#000000" d="M125.5,54H2.5c-1.1,0-2-0.9-2-2V34.5c0-1.1,0.9-2,2-2h123c1.1,0,2,0.9,2,2V52    C127.5,53.1,126.6,54,125.5,54z M4.5,50h119V36.5H4.5V50z"/></g><g><path fill="#000000" d="M93.7,127.5c-7.2,0-13-5.8-13-13c0-2,0.5-4,1.4-5.8c2.2-4.4,6.7-7.2,11.7-7.2c5,0,9.4,2.8,11.7,7.2    c0.9,1.8,1.4,3.8,1.4,5.8C106.7,121.7,100.9,127.5,93.7,127.5z M93.7,105.5c-3.4,0-6.5,1.9-8.1,5c-0.6,1.3-1,2.6-1,4    c0,5,4.1,9,9,9c5,0,9-4,9-9c0-1.4-0.3-2.8-1-4C100.2,107.4,97.1,105.5,93.7,105.5z"/></g><g><path fill="#000000" d="M93.7,120.5c-3.3,0-6-2.7-6-6c0-0.9,0.2-1.8,0.6-2.7c1-2.1,3.1-3.3,5.4-3.3s4.4,1.3,5.4,3.3    c0.4,0.8,0.6,1.7,0.6,2.7C99.7,117.8,97,120.5,93.7,120.5z M93.7,110.5c-1.5,0-2.9,0.9-3.6,2.2c-0.3,0.6-0.4,1.2-0.4,1.8    c0,2.2,1.8,4,4,4s4-1.8,4-4c0-0.6-0.1-1.2-0.4-1.8C96.6,111.3,95.2,110.5,93.7,110.5z"/></g><g><path fill="#000000" d="M34.3,127.5c-7.2,0-13-5.8-13-13c0-2,0.5-4,1.4-5.8c2.2-4.4,6.7-7.2,11.7-7.2c5,0,9.4,2.8,11.7,7.2    c0.9,1.8,1.4,3.8,1.4,5.8C47.4,121.7,41.5,127.5,34.3,127.5z M34.3,105.5c-3.4,0-6.5,1.9-8.1,5c-0.6,1.3-1,2.6-1,4c0,5,4.1,9,9,9    s9-4,9-9c0-1.4-0.3-2.8-1-4C40.9,107.4,37.8,105.5,34.3,105.5z"/></g><g><path fill="#000000" d="M34.3,120.5c-3.3,0-6-2.7-6-6c0-0.9,0.2-1.8,0.6-2.7c1-2.1,3.1-3.3,5.4-3.3s4.4,1.3,5.4,3.3    c0.4,0.8,0.6,1.8,0.6,2.7C40.4,117.8,37.7,120.5,34.3,120.5z M34.3,110.5c-1.5,0-2.9,0.9-3.6,2.2c-0.3,0.6-0.4,1.2-0.4,1.8    c0,2.2,1.8,4,4,4s4-1.8,4-4c0-0.6-0.1-1.2-0.4-1.8C37.2,111.3,35.9,110.5,34.3,110.5z"/></g><g><path fill="#000000" d="M107.8,36.5H20.2c-0.8,0-1.5-0.5-1.8-1.2c-0.3-0.7-0.1-1.6,0.4-2.2L42.1,10C48.3,3.9,56.1,0.5,64,0.5    c7.9,0,15.7,3.4,21.9,9.5l23.4,23.1c0.6,0.6,0.8,1.4,0.4,2.2C109.4,36,108.6,36.5,107.8,36.5z M25,32.5H103L83,12.8    c-5.4-5.3-12.2-8.3-19-8.3s-13.6,2.9-19,8.3L25,32.5z"/></g><g><path fill="#000000" d="M111.3,111.6h-7.7c-0.8,0-1.4-0.4-1.8-1.1c-1.5-3.1-4.6-5-8.1-5c-3.4,0-6.5,1.9-8.1,5    c-0.3,0.7-1,1.1-1.8,1.1H44.2c-0.8,0-1.4-0.4-1.8-1.1c-1.5-3.1-4.6-5-8.1-5s-6.5,1.9-8.1,5c-0.3,0.7-1,1.1-1.8,1.1h-7.7    c-1,0-1.8-0.7-2-1.7L6.4,52.3c-0.1-0.6,0.1-1.2,0.5-1.6S7.8,50,8.4,50h111.3c0.6,0,1.1,0.3,1.5,0.7s0.5,1,0.5,1.6l-8.4,57.5    C113.1,110.8,112.3,111.6,111.3,111.6z M104.7,107.6h4.8l7.8-53.5H10.7l7.8,53.5h4.8c2.4-3.8,6.5-6.1,11-6.1s8.7,2.3,11,6.1h37.3    c2.4-3.8,6.5-6.1,11-6.1C98.2,101.5,102.3,103.8,104.7,107.6z"/></g><g><path fill="#000000" d="M97.7,84.3c-0.6,0-1-0.4-1-1V60.6c0-0.6,0.4-1,1-1s1,0.4,1,1v22.7C98.7,83.8,98.2,84.3,97.7,84.3z"/></g><g><path fill="#000000" d="M75.2,84.3c-0.6,0-1-0.4-1-1V60.6c0-0.6,0.4-1,1-1s1,0.4,1,1v22.7C76.2,83.8,75.8,84.3,75.2,84.3z"/></g><g><path fill="#000000" d="M52.8,84.3c-0.6,0-1-0.4-1-1V60.6c0-0.6,0.4-1,1-1s1,0.4,1,1v22.7C53.8,83.8,53.3,84.3,52.8,84.3z"/></g><g><path fill="#000000" d="M30.3,84.3c-0.6,0-1-0.4-1-1V60.6c0-0.6,0.4-1,1-1s1,0.4,1,1v22.7C31.3,83.8,30.9,84.3,30.3,84.3z"/></g><g><path fill="#000000" d="M113.9,92.8H14.1c-0.6,0-1-0.4-1-1s0.4-1,1-1h99.7c0.6,0,1,0.4,1,1S114.4,92.8,113.9,92.8z"/></g></g></svg>';
var inputTemplate = ' <form id="input-form"><input id="x" type="number" step='+step+' value="0" name="quantity" min="-240" max="240" autofocus></form>';

module.exports = Mn.View.extend({
    // template:_.template('<svg id="rail" src="xr/images/noun_229873_cc.svg" alt="rail">'),
    template:_.template(railTemplate+chariotTemplate+inputTemplate),
    className:'game',
    model:new Backbone.Model(),
    behaviors: [AlterKey,ChariotBehavior,RailBehavior,FormBehavior],

    ui:{
        game:'.game'
    },

    onAttach:function(){
        // console.log('attached');
        // tl = new TimelineMax();

        // tl.pause();



        // tl.seek('intro2');
    },



});

// };
