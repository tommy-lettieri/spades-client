import React from 'react';
import CardModel from '../models/Card';
import Card from './Card';
import Player from './Player';
import Suit from '../constants/enums/Suit';

let playedCard = new CardModel(5, Suit.SPADE);

type BoardProps = {
    style?: any
    players: {
        north: {
            name?: string,
            bet?: string
        },
        south: {
            name?: string,
            bet?: string
        },
        east: {
            name?: string,
            bet?: string
        },
        west: {
            name?: string,
            bet?: string
        },
    }
}

function Board(props: BoardProps) {
    return (
        <div style={{
            display: 'flex',
            ...props.style
        }}>
            <Player playedCard={playedCard} name={props.players.west.name || ''} bet={props.players.west.bet} style={{
                width: '33%',
                height: '100%',
                backgroundColor: 'green',
                alignItems: 'flex-end',
                justifyContent: 'center'
            }} />

            <div style={{
                width: '33%',
                height: '100%',
                backgroundColor: 'blue'
            }}>
                <Player playedCard={playedCard} name={props.players.north.name || ''} bet={props.players.north.bet} onTop={true} style={{
                    width: '100%',
                    height: '50%',
                    backgroundColor: 'yellow'
                }} />
                <Player playedCard={playedCard} name={props.players.south.name || ''} bet={props.players.south.bet} style={{
                    width: '100%',
                    height: '50%',
                    backgroundColor: 'purple'
                }} />
            </div>
            <Player playedCard={playedCard} name={props.players.east.name || ''} bet={props.players.east.bet} style={{
                width: '33%',
                height: '100%',
                backgroundColor: 'red',
                alignItems: 'flex-start',
                justifyContent: 'center'
            }} />
        </div>
    );
}

export default Board;
