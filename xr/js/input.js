var InputView = Marionette.View.extend({
    tagName: 'div',
    template: _.template(' <form id="input-form">  Position (Entre -240 and 240): <input id="myNumber" type="number" name="quantity" min="-240" max="240" autofocus></form> <form id="score-form">  Score: <input id="myScore" type="number" >Vies: <input id="myLife" type="number" ></form>'),
    onAttach: function() {
        $('#myNumber').focus();
        this.model.set('score',0);
        this.model.set('life',3);
        // $('#myLife').val(3);
    },
    events: {
        'keypress form': 'enterKey'
    },

    modelEvents: {
        'change:score': 'scoreChanged',
        'change:life': 'lifeChanged'
    },

    lifeChanged: function() {
        // console.log('life');
        var life = this.model.get('life');
        $('#myLife').val(life);
        if (life === 0){
            alert('Fin du jeu ! Score : '+this.model.get('score'));

        }
    },
    scoreChanged: function() {
        // console.log('score');
        var score = this.model.get('score');
        $('#myScore').val(score);
    },
    enterKey: function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            this.model.set("x",$('#myNumber').val());
            $('#myNumber').val('');
        }
    },
});
