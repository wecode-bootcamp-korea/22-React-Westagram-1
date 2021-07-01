import React from 'react';
import TopFeed from './TopFeed/TopFeed';
import BottomFeed from './BottomFeed/BottomFeed';
import './Feed.scss';

class Feed extends React.Component {
  render() {
    const {
      feed_id,
      profile_img,
      profile_id,
      feed_img,
      like_click,
      like_user_profile_img,
      like_user_profile_id,
      post_user_mension,
      comments,
    } = this.props;
    console.log(this.props);

    return (
      <article className="feed">
        <TopFeed profile_img={profile_img} profile_id={profile_id} />
        <img alt="피드사진" className="feed_img" src={feed_img} />
        <BottomFeed
          like_click={like_click}
          like_user_profile_img={like_user_profile_img}
          like_user_profile_id={like_user_profile_id}
          post_user_mension={post_user_mension}
          comments={comments}
        />
      </article>
    );
  }
}

export default Feed;
