import React from 'react';

import FeedInfo from './FeedInfo/FeedInfo';
import CommentBox from './CommentBox/CommentBox';

class BottomFeed extends React.Component {
  render() {
    return (
      <>
        <FeedInfo />
        <CommentBox />
      </>
    );
  }
}

export default BottomFeed;
