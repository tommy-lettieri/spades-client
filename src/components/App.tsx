import React from 'react';
// import './App.css';
import Login from './Login';
import CardModel from '../models/Card';
import Card from './Card';
import Suit from '../constants/enums/Suit';
import Deck from '../models/Deck';
import Hand from './Hand';
import Player from './Player';

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
      <div>
        {/* <Login /> */}
        {/* <Card card={new CardModel(2, Suit.SPADE)} /> */}
        {/* {d.getCards().map((c:CardModel)=><Card style={{maxWidth: '100px'}}card={c} />)} */}
        <Player playedCard={playedCard} style={{height: '200px'}} name="TOMTOM" bet="5" onTop={true} />
        <Player playedCard={playedCard} style={{height: '200px'}} name="TOMTOM" bet="5" />
        <Hand cards={cards}/>
      </div>
    );
  }
}

export default App;
