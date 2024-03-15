"use strict";
function createDeck(jsonDeck) {
    var deck = '#separator:tab';
    deck += '\n#html:false';
    jsonDeck.forEach(function (card) {
        deck += "\n".concat(card.question, "\t").concat(card.answer);
    });
    return deck;
}
module.exports = {
    createDeck: createDeck
};
