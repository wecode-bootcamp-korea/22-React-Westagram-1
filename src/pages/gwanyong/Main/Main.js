import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed/Feed';
import Story from './Story/Story';
import Aside from './Aside/Aside';

import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      content: '',
      replys: [],
    };
  }

  render() {
    return (
      <>
        <Nav />
        <div className="main">
          <main id="main">
            <div className="mainContainer">
              <Story />
              <Feed />
            </div>
            <Aside />
          </main>
        </div>
      </>
    );
  }
}

export default Main;
