import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Story from './Components/story';
import Feed from './Components/feed';
import Profile from './Components/profile';
import '../../../styles/reset.scss';
import '../../../styles/variable.scss';
import '../Main/Main.scss';

class MainJongmin extends React.Component {
  constructor() {
    super();
    this.state = {
      feed: [
        {
          id: 'kevinlee1207',
          location: 'Mankato',
          mention: 'Home',
          likeId: 'jongmin_8910',
          img: '/images/Jongmin/feed contents.JPG',
        },
        {
          id: 'kevinlee1207',
          location: 'Mankato',
          mention: 'Home',
          likeId: 'jongmin_8910',
          img: '/images/Jongmin/feed contents.JPG',
        },
      ],
    };
  }

  render() {
    const { feed } = this.state;
    return (
      <div>
        <Nav />
        <main className="mainpage">
          <div className="feedAndStory">
            <Story />
            {feed.map(feeds => {
              return (
                <Feed
                  id={feeds.id}
                  location={feeds.location}
                  likeId={feeds.likeId}
                  mention={feeds.mention}
                  img={feeds.img}
                />
              );
            })}
          </div>
          <Profile />
        </main>
      </div>
    );
  }
}
export default MainJongmin;
