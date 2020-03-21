import React from 'react';
// import './App.css';
import Login from './Login';

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
      <Login />
    );
  }
}

export default App;
