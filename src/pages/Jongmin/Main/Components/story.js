import React from 'react';
import StoryPlay from './storyPlay';
import './story.scss';

class Story extends React.Component {
  constructor() {
    super();
    this.state = {
      story: [
        {
          id: 'story_User',
          img: '/images/Jongmin/friendstory.JPG',
        },
      ],
    };
  }

  render() {
    const { story } = this.state;
    return (
      <div className="story">
        {story.map(storys => {
          return <StoryPlay id={storys.id} img={storys.img} />;
        })}
      </div>
    );
  }
}

export default Story;
