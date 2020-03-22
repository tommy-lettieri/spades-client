import React from 'react';
import CardModel from '../models/Card';
import Card from './Card';


type PlayerProps = {
    playedCard: CardModel,
    style?: any
    name: string,
    bet?: string,
    onTop?: boolean
}

function PlayerDetails(props: PlayerProps) {
    return (
        <div>
            <div>{props.name}</div>
            <div>Bet: {props.bet}</div>
        </div>
    )
}

function Player(props: PlayerProps) {
    return (
        <div style={{
            height: '30%',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            ...props.style
        }}>
            {props.onTop && PlayerDetails(props)}
            <Card card={props.playedCard} style={{
                height: '80%'
                // TODO below didn't work
                // flexGrow: 1
            }} />
            {!props.onTop && PlayerDetails(props)}
        </div>
    );
}

export default Player;
