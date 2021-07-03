import React from 'react';
import StoryComponent from './StoryComponent/StoryComponent';
import './Story.scss';

class Story extends React.Component {
  render() {
    const { storysArray } = this.props;
    return (
      <>
        <section id="storyContainer">
          {storysArray.map((story, idx) => {
            return (
              <StoryComponent
                key={idx}
                storyId={story.stroyId}
                storyImg={story.img}
              />
            );
          })}
        </section>
      </>
    );
  }
}

export default Story;
