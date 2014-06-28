/**
 * jepeterson@gmail.com 6/17/14.
 */


(function startGame() {

    console.log('Starting game...');

    var numberOfPlayers = 10;
    var players = [];

    (function init() {
        for (var i = 0; i < numberOfPlayers; i++) {
            var player = {id: 'p-' + i};
            players[i] = player;
        }
    }());

    var game = function () {
        var ms = 0;
        for (var i = 0; i < players.length; i++) {
            var player = players[i];
            var playerElement = $('#' + player.id);
            var originalColor = playerElement.css('background-color');
            playerElement.css({'background-color' : 'yellow'});
            setTimeout(changePlayerColor(playerElement, originalColor), ms = ms + 2000);
        }
    };

    game();

    $('#btn-deal').click(function () {
        game();
    });


})();


function changePlayerColor(playerElement, color) {
   return function() {
       playerElement.css({'background-color' : color});
   }
}
