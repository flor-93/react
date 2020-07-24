import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

class Text extends React.Component {
  state = {
    displayMessage: false,
  };

  render() {
    return (
      <div
        className="div-body"
        onClick={() => this.setState({ displayMessage: true })}
      >
        {this.state.displayMessage ? 'Este es el estado del componente' : ''}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

serviceWorker.unregister();
