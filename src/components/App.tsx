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
      <div style={{ height: '100%' }}>
        {/* <Login /> */}
        {/* <Card card={new CardModel(2, Suit.SPADE)} /> */}
        {/* {d.getCards().map((c:CardModel)=><Card style={{maxWidth: '100px'}}card={c} />)} */}
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
        ]} />
        <Board
          style={{
            width: '33%',
            height: '30%',
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
        <Hand cards={cards} />
        <Chat style={{
          height: '300px',
          width: '100%',
          backgroundColor: 'green'
        }} />
      </div>
    );
  }
}

export default App;
