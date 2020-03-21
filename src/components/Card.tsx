import React from 'react';
import CardModel from '../models/Card';

type CardProps = {
    card: CardModel
}

function Card(props: CardProps) {
  return (
      <div>
          {props.card.getSuit() + props.card.getValue()}
      </div>
  );
}

export default Card;
