import React from 'react';
import CardModel from '../models/Card';
import Card from './Card';
import Player from './Player';
import Suit from '../constants/enums/Suit';

let playedCard = new CardModel(5, Suit.SPADE);
type BoardProps = {
}

function Board(props: BoardProps) {
    return (
        <div style={{
            width: '100%',
            height: '700px',
            display: 'flex'
        }}>
            <Player playedCard={playedCard} name="TOMTOM" bet="5" style={{
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
                <Player playedCard={playedCard} name="TOMTOM" bet="5" onTop={true} style={{
                    width: '100%',
                    height: '50%',
                    backgroundColor: 'yellow'
                }} />
                <Player playedCard={playedCard} name="TOMTOM" bet="5" style={{
                    width: '100%',
                    height: '50%',
                    backgroundColor: 'purple'
                }} />
            </div>
            <Player playedCard={playedCard} name="TOMTOM" bet="5" style={{
                width: '33%',
                height: '100%',
                backgroundColor: 'red',
                alignItems: 'flex-start',
                justifyContent: 'center'
            }} />
            {/* <Player playedCard={playedCard} style={{ height: '200px' }} name="TOMTOM" bet="5" onTop={true} /> */}
        </div>
    );
}

export default Board;
