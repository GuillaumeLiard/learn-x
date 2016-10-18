var AlterKey = Mn.Behavior.extend({
    ui: {
        form: '#input-form',
        x: '#x'
    },

    events: {
        'keypress @ui.form': 'validate',
        'change @ui.x': 'updateX'
    },
    onAttach:function(){
        _.bindAll(this,'focusOnInput');
        $(document).on('keydown',this.focusOnInput);
    },
    focusOnInput:function(){
        this.ui.x.focus();
        this.view.model.set("x",this.ui.x.val());
    },
    updateX: function(event) {
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
            event.preventDefault();
            if (this.ui.x.val() === "") {
                // this.ui.x.val(-0);
            } else{
                this.ui.x.val(-1*this.ui.x.val());
            }
            this.view.model.set("x",this.ui.x.val());
        }
    }
});
