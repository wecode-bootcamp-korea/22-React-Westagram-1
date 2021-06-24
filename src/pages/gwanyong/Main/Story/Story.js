import React from 'react';
import StoryComponent from './StoryComponent/StoryComponent';

import './Story.scss';

class Story extends React.Component {
  render() {
    return (
      <>
        <section id="storyContainer">
          <StoryComponent />
          <StoryComponent />
          <StoryComponent />
          <StoryComponent />
          <StoryComponent />
          <StoryComponent />
        </section>
      </>
    );
  }
}

export default Story;
