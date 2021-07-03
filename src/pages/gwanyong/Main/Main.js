import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Story from './Story/Story';
import Aside from './Aside/Aside';
import Feed from './Feed/Feed';

import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      feeds: [],
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

  componentDidMount() {
    fetch('/data/feedData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({ feeds: data });
      });
  }

  changeState = e => {
    this.setState({ feeds: e });
  };

  render() {
    const { feeds, storys, recommands } = this.state;
    return (
      <>
        <Nav />
        <div className="main">
          <main id="main">
            <div className="mainContainer">
              <Story storysArray={storys} />
              {feeds.map((feed, index) => (
                <Feed
                  key={feed.id}
                  id={feed.id}
                  img={feed.imgs}
                  writer={feed.writer}
                  writerImg={feed.writerImg}
                  feedIdx={index}
                  introText={feed.introText}
                  feeds={feeds}
                  changeState={this.changeState}
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
