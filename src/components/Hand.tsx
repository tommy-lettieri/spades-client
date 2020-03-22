import React from 'react';
import CardModel from '../models/Card';
import Card from './Card';

type HandProps = {
    cards: CardModel[],
    style?: any
}

let getMaxCardWidth = (numOfCards:number, paddingPercent:number=0) => `${((100/(numOfCards || 1))- (paddingPercent*2))}%`;

function Hand(props: HandProps) {
    let paddingPercent = 1
    let maxCardWidth = getMaxCardWidth(props.cards.length, paddingPercent);
    return (
        <div style={props.style}>
            {props.cards.map(card => <Card card={card} style={{
                maxWidth: maxCardWidth,
                padding: `${paddingPercent}%`,
                float: 'left'
                }}/>)}
        </div>
    );
}

export default Hand;
