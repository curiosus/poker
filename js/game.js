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
    var playerNames = ['Sue Bob', 'Jesco', 'Mamie', 'Bo', 'Mousie', 'Terri Lynn', 'Dorsey', 'D. Ray', 'Bertie Mae', 'Poney'];

    (function init() {

        for (var i = 0; i < numberOfPlayers; i++) {
            var player = {id: 'p-' + i, stack: initialPlayerStack};
            player.stack = initialPlayerStack;
            player.domElement = $('#' + player.id);
            var s = '#' + player.id + '-header';
            player.name = playerNames[i];
            $(s + '').text(player.name);
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
            dealPocketCards(player);
        }

        playHand();

    }

    function dealPocketCards(player) {
        var playerElement = '#' + player.id + '-pocket-card-';
        for (var j = 0; j < 2; j++) {
            var p = playerElement + j;
            $(p + '').text(player.pocketCards[j].rank + ' ' + player.pocketCards[j].suit);
        }
    }


    function pocketCards() {
        var pocketCards = [];
        for (var i = 0; i < 2; i++) {
            pocketCards.push(retrieveCard());
        }
        return pocketCards;
    }

    function retrieveCard() {
        var card;
        var r;
        do {
            r = Math.floor(Math.random() * 52);
            if (!deck.cards[r].dealt) {
                card = deck.cards[r];
                deck.cards[r].dealt = true;
            }

        } while (!card);
        return card;
    }

    function playHand() {
        for (var i = 0; i < players.length; i++) {
            var player = players[i];
            var ms = 0;
            var playerElement = $('#' + player.id);
            var originalColor = playerElement.css('background-color');
            playerElement.css({'background-color': 'yellow'});
            var changeColor = changePlayerColor(playerElement, originalColor);
            console.log("Hello");
            setTimeout(changeColor, 20000);
            console.log("Goodbye")
        }
    }

    function changePlayerColor(playerElement, color) {
        return function () {
            playerElement.css({'background-color': color});
            console.log("MKAY");
        }
    }
})();


function buildDeck(suits, ranks, deck) {
    for (var i = 0; i < suits.length; i++) {
        var suit = suits[i];
        for (var j = 0; j < ranks.length; j++) {
            var rank = ranks[j];
            var card = {rank: rank, suit: suit, dealt: false, entityCode: '&#10084;' };
            deck.cards.push(card);
        }
    }
}






