import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed/Feed';
import Story from './Story/Story';
import Aside from './Aside/Aside';

import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      feeds: [
        {
          id: 23,
          imgs: 'images/gwanyong/puppy-1207816_1920.jpg',
          writer: 'gwanyong ',
          writerImg: 'images/gwanyong/profile.jpeg',
          introText: '귀여운 갱얼쥐~👻',
        },
        {
          id: 24,
          imgs: 'images/gwanyong/inu.jpg',
          writer: 'musk203 ',
          writerImg: 'images/gwanyong/musk.jpeg',
          introText: '화성 갈끄이까앙아~🏆',
        },
      ],
      storys: [
        {
          id: 101,
          stroyId: 'dlwlrma',
          img: 'images/gwanyong/iu2.jpeg',
        },
        {
          id: 102,
          stroyId: 'winter',
          img: 'images/gwanyong/winter5.jpeg',
        },
        {
          id: 103,
          stroyId: 'karina',
          img: 'images/gwanyong/karina.png',
        },
        {
          id: 104,
          stroyId: 'aespa',
          img: 'images/gwanyong/karina3.jpeg',
        },
        {
          id: 105,
          stroyId: 'dnlsxj _',
          img: 'images/gwanyong/winter2.jpeg',
        },
      ],
      recommands: [
        {
          id: 1001,
          userId: 'Elon Musk',
          img: 'images/gwanyong/musk.jpeg',
        },
        {
          id: 1002,
          userId: 'karina',
          img: 'images/gwanyong/karina.png',
        },
        {
          id: 1003,
          userId: 'dlwlrma',
          img: 'images/gwanyong/iu2.jpeg',
        },
        {
          id: 1004,
          userId: 'winter',
          img: 'images/gwanyong/winter2.jpeg',
        },
      ],
    };
  }

  render() {
    const { feeds, storys, recommands } = this.state;

    return (
      <>
        <Nav />
        <div className="main">
          <main id="main">
            <div className="mainContainer">
              <Story storysArray={storys} />
              {feeds.map(feed => (
                <Feed
                  key={feed.id}
                  id={feed.id}
                  img={feed.imgs}
                  writer={feed.writer}
                  writerImg={feed.writerImg}
                  introText={feed.introText}
                />
              ))}
            </div>
            <Aside recommands={recommands} />
          </main>
        </div>
      </>
    );
  }
}

export default Main;
