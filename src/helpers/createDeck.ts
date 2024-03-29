export default function createDeck(): string[] {
  const suits = ["D", "S", "H", "C"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
  ];
  const deck: string[] = [];

  for (let i: number = 0; i < values.length; i++) {
    for (let j: number = 0; j < suits.length; j++) {
      const card: string = values[i] + suits[j];
      deck.push(card);
    }
  }

  shuffleDeck(deck);

  //TEST SCENARIOS

  // multiple Blackjacks
  // deck.unshift("AH");
  // deck.unshift("TH");
  // deck.unshift("AH");
  // deck.unshift("TH");
  // deck.unshift("AH");
  // deck.unshift("TH");
  // deck.unshift("AH");
  // deck.unshift("TH");
  // deck.unshift("6H");
  // deck.unshift("5H");

  // tie
  // deck.unshift("AH");
  // deck.unshift("9H");
  // deck.unshift("AH");
  // deck.unshift("9H");

  // dealer has blackjack
  // deck.unshift("AH");
  // deck.unshift("TH");

  return deck;
}

function shuffleDeck(deck: string[]): string[] {
  for (let i: number = deck.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}
