import React from 'react';
import './Aside.scss';

import ProfileWrap from './ProfileWrap/ProfileWrap';
import StoryBox from './StoryBox/StoryBox';
import RecommendBox from './RecommendBox/RecommendBox';
import WestaInfoBox from './WestaInfoBox/WestaInfoBox';

class Aside extends React.Component {
  render() {
    return (
      <aside className="sideWrapper">
        <div className="sidebar">
          <div className="profile_bar">
            <ProfileWrap />
            <StoryBox />
            <RecommendBox />
            <WestaInfoBox />
          </div>
        </div>
      </aside>
    );
  }
}

export default Aside;
