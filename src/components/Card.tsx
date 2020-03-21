import React from 'react';
import CardModel from '../models/Card';
type CardProps = {
    card: CardModel
}

let getImgUrl = (card: CardModel) => {
    let value: string = card.getValue().toString();
    switch (value) {
        case '11':
            value = 'j';
            break;
        case '12':
            value = 'q';
            break;
        case '13':
            value = 'k';
            break;
        case '14':
            value = 'a';
            break;
    }
    let suit = card.getSuit().toString().toUpperCase();
    return `/card-images/${value}${suit}.png`
}
function Card(props: CardProps) {
    return (
        <div>
            <img src={getImgUrl(props.card)} />
        </div>
    );
}

export default Card;