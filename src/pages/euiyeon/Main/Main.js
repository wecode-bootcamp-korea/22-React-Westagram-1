import React from 'react';

import Content from './Content/Content';
import Nav from '../../../components/Nav/Nav';

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Content />
      </>
    );
  }
}

export default Main;
