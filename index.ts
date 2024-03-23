type JsonCard = {
    'question': string,
    'answer': string
    };
type JsonDeck = Array<JsonCard>;

function createDeck(jsonDeck: JsonDeck): string {
    let deck = '#separator:tab';
    deck += '\n#html:false';
    
    jsonDeck.forEach(card => {
        deck += `\n${card.question}\t${card.answer}`;
    })

    return deck;
}

export {
    createDeck
}