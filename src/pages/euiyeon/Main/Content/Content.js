import React from 'react';
import './Content.scss';

import Feed from './Feed/Feed';
import Aside from './Aside/Aside';

class Content extends React.Component {
  render() {
    return (
      <div class="Main">
        <main>
          <div className="container">
            <Feed />
            <Aside />
          </div>
        </main>
      </div>
    );
  }
}

export default Content;
