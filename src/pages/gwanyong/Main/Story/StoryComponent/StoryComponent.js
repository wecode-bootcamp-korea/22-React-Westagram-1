import React from 'react';
import './StoryComponent.scss';

class StoryComponent extends React.Component {
  render() {
    return (
      <div className="story">
        <div className="storyBackground">
          <img className="storyImg" src={this.props.storyImg} alt="story" />
        </div>
        <span className="storyId">{this.props.storyId}</span>
      </div>
    );
  }
}
export default StoryComponent;
