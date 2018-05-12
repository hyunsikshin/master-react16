import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById('trytouch'));
  }
}

const Message = () => 'Just touched this!';

class RetrunTypes extends Component {
  render() {
    return 'YO SUP?';
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <RetrunTypes />
        <Portals />
      </Fragment>
    );
  }
}

export default App;
