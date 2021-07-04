import React from 'react';
import './TopFeed.scss';

class TopFeed extends React.Component {
  render() {
    const { profile_img, profile_id } = this.props;
    return (
      <div className="feed_bar">
        <div className="feed_profile">
          <img alt="프사" className="profile_img" src={profile_img} />
          <span className="profile_id">{profile_id}</span>
        </div>
        <div className="view_more_box">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
    );
  }
}

export default TopFeed;
