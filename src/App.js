import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';

//Higher Order Component -> HOC
const BoundaryHOC = ProtectedComponent =>
  class Boundary extends Component {
    state = {
      hasError: false,
    };

    componentDidCatch = () => {
      this.setState({
        hasError: true,
      });
    };

    render() {
      const { hasError } = this.state;
      if (hasError) {
        return <ErrorFallBack />;
      } else {
        return <ProtectedComponent />;
      }
    }
  };

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

const PErrorMaker = BoundaryHOC(ErrorMaker);

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById('trytouch'));
  }
}

const PPortals = BoundaryHOC(Portals);

class RetrunTypes extends Component {
  render() {
    return 'YO SUP?';
  }
}

const Message = () => 'Just touched this!';

const ErrorFallBack = () => 'Sorry something went wrong';

class App extends Component {
  render() {
    return (
      <Fragment>
        <RetrunTypes />
        <PPortals />
        <PErrorMaker />
      </Fragment>
    );
  }
}

export default BoundaryHOC(App);
