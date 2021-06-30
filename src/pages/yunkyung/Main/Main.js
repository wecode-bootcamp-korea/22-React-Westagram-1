import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed';
// import Comment from './Comment';
// import COMMENTDATA from './CommentData';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feed: [
        {
          id: 'zzz_yk',
          mention: 'love cat',
          img: '/images/yunkyung/cat.jpg',
        },
        {
          id: 'zzz_yk',
          mention: 'love cat',
          img: '/images/yunkyung/cat.jpg',
        },
        {
          id: 'zzz_yk',
          mention: 'love cat',
          img: '/images/yunkyung/cat.jpg',
        },
      ],
    };
  }

  render() {
    const { feed } = this.state;
    return (
      <>
        <Nav />
        <div className="main_body">
          <div className="mainWrap">
            <div className="main">
              {feed.map(feeds => {
                return (
                  <Feed id={feeds.id} mention={feeds.mention} img={feeds.img} />
                );
              })}
            </div>
            <div className="main-right">
              <div className="main-right-nav">
                <div className="main-right-title">
                  <img
                    alt="wecode 프로필 사진"
                    src="./images/yunkyung/wecode.jpg"
                  />
                  <h1>
                    Wecode_bootcamp<p>WeCode | 위코드</p>
                  </h1>
                </div>
              </div>
              <div className="main_right_top">
                <div className="title">
                  <h1>스토리</h1>
                  <p>모두 보기</p>
                </div>
                <div className="profile">
                  <div className="profile_detail">
                    <img
                      alt="고양이 story 사진"
                      src="./images/yunkyung/cat1.png"
                    />
                    <div className="profile_text">
                      <h1>zzz_yk</h1>
                      <p>30분 전</p>
                    </div>
                  </div>
                  <div className="profile_detail">
                    <img
                      alt="고양이 story 사진"
                      src="./images/yunkyung/cat1.png"
                    />
                    <div className="profile_text">
                      <h1>zzz_yk</h1>
                      <p>30분 전</p>
                    </div>
                  </div>
                  <div className="profile_detail">
                    <img
                      alt="고양이 story 사진"
                      src="./images/yunkyung/cat1.png"
                    />
                    <div className="profile_text">
                      <h1>zzz_yk</h1>
                      <p>30분 전</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main_right_bottom">
                <div className="title">
                  <h1>회원님을 위한 추천</h1>
                  <p>모두 보기</p>
                </div>
                <div className="profile">
                  <div className="profile_detail">
                    <img
                      alt="고양이 추천 카테고리 사진"
                      src="./images/yunkyung/cat1.png"
                    />
                    <div className="profile_text">
                      <h1>zzz_yk</h1>
                      <p>30분 전</p>
                    </div>
                  </div>
                  <div className="profile_detail">
                    <img
                      alt="고양이 추천 카테고리 사진"
                      src="./images/yunkyung/cat1.png"
                    />
                    <div className="profile_text">
                      <h1>zzz_yk</h1>
                      <p>30분 전</p>
                    </div>
                  </div>
                  <div className="profile_detail">
                    <img
                      alt="고양이 추천 카테고리 사진"
                      src="./images/yunkyung/cat1.png"
                    />
                    <div className="profile_text">
                      <h1>zzz_yk</h1>
                      <p>30분 전</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detail_text">
                <h1>
                  Instagram 정보·지원·홍보 센터·API·채용
                  정보·개인정보처리방침·약관·디렉터리·프로필·해시태그·언어
                </h1>
                <br />
                <h2>ⓒ 2021 INSTAGRAM</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
