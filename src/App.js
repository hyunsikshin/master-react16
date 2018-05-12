import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';

class ErrorMaker extends Component {
  state = {
    friends: ['hyunsik', 'lynn', 'nicolas', 'biggie', '2pac'],
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined,
      });
    }, 2000);
  };

  render() {
    const { friends } = this.state;
    return friends.map(friend => ` ${friend} `);
  }
}

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById('trytouch'));
  }
}

class RetrunTypes extends Component {
  render() {
    return 'YO SUP?';
  }
}

const Message = () => 'Just touched this!';

const ErrorFallBack = () => 'Sorry something went wrong';

class App extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch = (error, info) => {
    console.log(`catched ${error} the info i have is ${JSON.stringify(info)}`);
    this.setState({
      hasError: true,
    });
  };

  render() {
    const { hasError } = this.setState;
    return (
      <Fragment>
        <RetrunTypes />
        <Portals />
        {hasError ? <ErrorFallBack /> : <ErrorMaker />}
      </Fragment>
    );
  }
}

export default App;
