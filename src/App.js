import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    displayMessage: false,
  };
  render() {
    return (
      <div
        className="App"
        onClick={() => this.setState({ displayMessage: true })}
      >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <b>Welcome to React</b>
          </p>
        </header>
        <div className="div-body">
          {this.state.displayMessage ? 'Este es el estado del componente' : ''}
        </div>
      </div>
    );
  }
}

export default App;
