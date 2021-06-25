import React from 'react';
import './TopFeed.scss';

class TopFeed extends React.Component {
  render() {
    return (
      <div className="feed_bar">
        <div className="feed_profile">
          <img
            alt="프사"
            className="profile_img"
            src="images/euiyeon/euiyeon.jpg"
          />
          <span className="profile_id">euiyeonlee</span>
        </div>
        <div className="view_more_box">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
    );
  }
}

export default TopFeed;
