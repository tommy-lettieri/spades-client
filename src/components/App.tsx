import React from 'react';
import '../App.css';
import Login from './Login';
import CardModel from '../models/Card';
import Card from './Card';
import Chat from './Chat';
import Suit from '../constants/enums/Suit';
import Deck from '../models/Deck';
import Hand from './Hand';
import Player from './Player';
import Board from './Board';
import ScoreBoard from './ScoreBoard';

type AppProps = {
}

type AppState = {
}

let d = new Deck();
let cards = d.getCards().slice(0, 13);
let playedCard = d.getCards()[14];
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
        }}>
        <div style={{
          display: 'flex',
          flexGrow: 5
        }}
        >
          <ScoreBoard scores={[
            {
              nsRoundScore: 1,
              ewRoundScore: 3,
              nsCumulativeScore: 1,
              ewCumulativeScore: 3
            },
            {
              nsRoundScore: 2,
              ewRoundScore: 2,
              nsCumulativeScore: 3,
              ewCumulativeScore: 5
            },
            {
              nsRoundScore: 3,
              ewRoundScore: 1,
              nsCumulativeScore: 6,
              ewCumulativeScore: 6
            },
          ]} style={{
            flexGrow: 1
          }} />
          <Board
            style={{
              flexGrow: 2,
            }}
            players={{
              north: {
                name: 'north',
                bet: '1'
              },
              east: {
                name: 'east',
                bet: '2'
              },
              south: {
                name: 'south',
                bet: '3'
              },
              west: {
                name: 'west',
                bet: '4'
              },
            }}
          />
          <Board
            style={{
              flexGrow: 1,
              height: '100px',
            }}
            players={{
              north: {
                name: 'north',
                bet: '1'
              },
              east: {
                name: 'east',
                bet: '2'
              },
              south: {
                name: 'south',
                bet: '3'
              },
              west: {
                name: 'west',
                bet: '4'
              },
            }}
          />
        </div>
        <Hand cards={cards} />
        <Chat style={{
          height: '300px',
          width: '100%',
          flexGrow: 1
        }} />
      </div>
    );
  }
}

export default App;
