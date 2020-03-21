import React from 'react';
// import './App.css';
import Login from './Login';
import CardModel from '../models/Card';
import Card from './Card';
import Suit from '../constants/enums/Suit';

type AppProps = {
}

type AppState = {
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      // <Login />
      <Card card={new CardModel(2, Suit.SPADE)} />
    );
  }
}

export default App;
