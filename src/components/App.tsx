import React from 'react';
// import './App.css';
import Login from './Login';
import CardModel from '../models/Card';
import Card from './Card';
import Suit from '../constants/enums/Suit';
import Deck from '../models/Deck';

type AppProps = {
}

type AppState = {
}

let d = new Deck();
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
        {d.getCards().map((c:CardModel)=><Card card={c} />)}
      </div>
    );
  }
}

export default App;
