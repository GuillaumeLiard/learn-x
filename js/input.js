var InputView = Marionette.View.extend({
    tagName: 'div',
    template: _.template(' <form id="input-form">  Position (Entre -240 and 240): <input id="myNumber" type="number" name="quantity" min="-240" max="240" autofocus></form>'),
    onAttach: function() {
        console.log('focus');
        $('#myNumber').focus();
    },
    events: {
        'keypress form': 'enterKey'
    },

    

    enterKey: function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            this.model.set("x",$('#myNumber').val());
            $('#myNumber').val('');
        }
    },
});
