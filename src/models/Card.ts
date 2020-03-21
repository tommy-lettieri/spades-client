import Suit from "../constants/enums/Suit";

class Card {
    private value: number;
    private suit: Suit;

    constructor(value: number, suit: Suit) {
        if (value < 2 || value > 14) {
            throw new Error('Bad value');
        }

        this.value = value;
        this.suit = suit;
    }
    
    getValue() : number {
        return this.value;
    }

    getSuit() : Suit {
        return this.suit;
    }
}

export default Card;