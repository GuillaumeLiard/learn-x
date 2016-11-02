var _ = require('underscore');
var $ = require('jquery');
var Mn = require('backbone.marionette');

module.exports = Mn.Behavior.extend({
    ui: {
        form: '#input-form',
        x: '#x'
    },

    events: {
        'keypress @ui.form': 'validate',
        'change @ui.x': 'updateX'
    },
    initialize:function(){
        this.view.model.set("positive",true);
    },
    onAttach:function(){
        _.bindAll(this,'focusOnInput');
        $(document).on('keydown',this.focusOnInput);
    },
    focusOnInput:function(event){
        this.ui.x.focus();
        this.validate(event);
        // this.view.model.set("x",this.ui.x.val());
    },
    updateX: function(event) {
        // this.view.model.set("x",-100);
        this.view.model.set("x",this.ui.x.val());
    },
    validate: function(event) {
        //   console.log(event.key);
        if (event.keyCode == 13) {
            event.preventDefault();
            this.ui.x.blur();
            this.ui.x.focus();
        }
            // console.log(event.key);
        if (event.key === "-") {
            if (this.ui.x.val() === "") {
                // this.ui.x.val(-0);
            } else{
                event.preventDefault();
                if (!this.view.model.get('teleporting')){
                    this.view.model.set('teleporting',true);
                    this.ui.x.val(-1*this.ui.x.val());
                    this.view.model.set("positive",!this.view.model.get("positive"));

                }
            }           // console.log()
        }
        this.updateX();    
    }
});
