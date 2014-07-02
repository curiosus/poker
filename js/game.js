/**
 * jepeterson@gmail.com 6/17/14.
 */



(function startGame() {

    var pot = 0;
    var numberOfPlayers = 10;
    var players = [];
    var initialPlayerStack = 200;
    var smallBlind = 1;
    var bigBlind = 2;
    var suits = ['Diamonds', 'Spades', 'Clubs', 'Hearts'];
    var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    var deck = {cards: []};


    (function init() {


        for (var i = 0; i < numberOfPlayers; i++) {
            var player = {id: 'p-' + i, stack: initialPlayerStack};
            player.stack = initialPlayerStack;
            players[i] = player;
        }


    }());

    $('#btn-deal').click(function () {
        deal();
    });

    function deal() {
        buildDeck(suits, ranks, deck);
        for (var i = 0; i < players.length; i++) {
            var player = players[i];
            player.pocketCards = pocketCards();
            console.log(player.stack);
            console.log(player.pocketCards);
        }
    }

    function pocketCards() {
        var pocketCards = [];
        var r;
        for (var i = 0; i < 2; i++) {
            r = Math.floor(Math.random() * 52);
            pocketCards.push(deck.cards[r]);
        }

        return pocketCards;


    }

    /*
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

     */

})();


function changePlayerColor(playerElement, color) {
    return function () {
        playerElement.css({'background-color': color});
    }
}

function buildDeck(suits, ranks, deck) {
    for (var i = 0; i < suits.length; i++) {
        var suit = suits[i];
        for (var j = 0; j < ranks.length; j++) {
            var rank = ranks[j];
            var card = {rank: rank, suit: suit, value: i };
            deck.cards.push(card);
        }
    }
}






