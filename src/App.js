import React from 'react';
import logo from './logo.svg';
import './App.css';

class Mensaje extends React.Component {
  render() {
    return this.props.shouldDisplayMessage
      ? 'Este es el estado del componente, entregado desde el padre.'
      : '';
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMessage: false,
    };
  }
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
          <Mensaje shouldDisplayMessage={this.state.displayMessage} />
        </div>
      </div>
    );
  }
}

export default App;
