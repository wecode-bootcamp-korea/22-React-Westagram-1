import React from 'react';
import './StoryComponent.scss';

class StoryComponent extends React.Component {
  render() {
    return (
      <div className="story">
        <div className="storyBackground">
          <img
            className="storyImg"
            src="images/gwanyong/iu2.jpeg"
            alt="story"
          />
        </div>
        <span className="storyId">dlwlrma</span>
      </div>
    );
  }
}
export default StoryComponent;
