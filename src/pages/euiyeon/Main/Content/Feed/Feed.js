import React from 'react';
import './Feed.scss';

import TopFeed from './TopFeed/TopFeed';
import BottomFeed from './BottomFeed/BottomFeed';

class Feed extends React.Component {
  render() {
    return (
      <section className="articleWrapper">
        <article className="feed">
          <TopFeed />
          <img
            alt="피드사진"
            className="feed_img"
            src="./images/euiyeon/feed.jpg"
          />
          <BottomFeed />
        </article>
      </section>
    );
  }
}

export default Feed;
