import React from 'react';
import './storyPlay.scss';

class StoryPlay extends React.Component {
  render() {
    return (
      <div className="storyPlay">
        <div className="buttonBackground">
          <button className="friendStory">
            <img className="userPhoto" src={this.props.img} alt="user" />
          </button>
        </div>
        <div className="storyUser">{this.props.id}</div>
      </div>
    );
  }
}

export default StoryPlay;
