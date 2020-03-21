import Card from './Card';
import Suit from '../constants/enums/Suit';

class Deck {
    private cards:Card[] = [];
    constructor() {
        for(let i: number = 0; i < 52; i++) {
            let suitIndex = Math.floor(i /13);
            let value = (i % 13) + 2;
            let suit:Suit;
            switch(suitIndex) {
                case 0:
                    suit = Suit.SPADE;
                    break;
                case 1:
                    suit = Suit.HEART;
                    break;
                case 2:
                    suit = Suit.CLUB;
                    break;
                case 3:
                    suit = Suit.DIAMOND;
                    break;
                default:
                    console.error('INVALID SUIT DEF');
                    suit = Suit.SPADE;
                    break;
            }
            this.cards.push(new Card(value, suit));
        }
    }

    shuffle() {
        for(let i:number = 0; i < this.cards.length; i++) {
            let randomIndex:number = Math.floor(Math.random() * this.cards.length);
            let temp:Card = this.cards[i];
            this.cards[i] = this.cards[randomIndex];
            this.cards[randomIndex] = temp;
        }
    }

    getCards(): Card[] {
        return this.cards;
    }
}

export default Deck;