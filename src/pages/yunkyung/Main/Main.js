import React, { Component } from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import Comment from './Comment';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentList: [],
    };
  }

  writeCommment = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  addCommment = () => {
    this.setState({
      commentList: this.state.commentList.concat([this.state.comment]),
      comment: '',
    });
  };

  enterKey = e => {
    if (e.key === 'Enter') {
      this.addCommment();
    }
  };

  render() {
    console.log(this.state.comment);
    return (
      <>
        <Nav />
        <div className="main_body">
          <div className="mainWrap">
            <div className="main">
              <div className="feeds">
                <div className="feeds_left">
                  <img src="./images/yunkyung/cat1.png" />
                  <h1>zzz_yk</h1>
                </div>
                <div className="feeds_right">
                  <p>…</p>
                </div>
                <div className="feeds_content">
                  <img src="./images/yunkyung/cat.jpg" />
                </div>
                <div className="feeds_icons">
                  <div className="feeds_icons_left">
                    <a href="#">
                      <img src="https://img.icons8.com/windows/32/000000/search.png" />
                    </a>
                    <a href="#">
                      <img src="https://img.icons8.com/windows/32/000000/like.png" />
                    </a>
                    <a href="#">
                      <img src="https://img.icons8.com/dotty/80/000000/filled-sent.png" />
                    </a>
                  </div>
                  <div className="feeds_icons_right">
                    <a href="#">
                      <img src="https://img.icons8.com/material-outlined/24/000000/bookmark-ribbon--v2.png" />
                    </a>
                  </div>
                </div>
                <div className="feeds_text">
                  <div className="feeds_text_top">
                    <img src="./images/yunkyung/cat1.png" />
                    <h1>
                      <strong>Wecode</strong>님 외 <strong>36명</strong>이
                      좋아합니다
                    </h1>
                    <h2>
                      <strong>zzz_yk</strong> 보고싶다 고양이
                    </h2>
                    <p>42분 전</p>
                    <ul className="comment_list">
                      {this.state.commentList.map(comment => {
                        return (
                          <li className="comment_box">
                            <span className="comment_id">zzz_yk</span>
                            {comment}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="reply">
                  <input
                    type="text"
                    id="input"
                    value={this.state.comment}
                    placeholder="댓글 달기..."
                    onChange={this.writeCommment}
                    onKeyPress={this.enterKey}
                  />
                  <button
                    type="button"
                    class="reply-btn"
                    onClick={this.addCommment}
                  >
                    게시
                  </button>
                </div>
              </div>
            </div>
            <div className="main-right">
              <div className="main-right-nav">
                <div className="main-right-title">
                  <img src="./images/yunkyung/wecode.jpg" />
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
                    <img src="./images/yunkyung/cat1.png" />
                    <div className="profile_text">
                      <h1>zzzyk</h1>
                      <p>30분 전</p>
                    </div>
                  </div>
                  <div className="profile_detail">
                    <img src="./images/yunkyung/cat1.png" />
                    <div className="profile_text">
                      <h1>zzzyk</h1>
                      <p>30분 전</p>
                    </div>
                  </div>
                  <div className="profile_detail">
                    <img src="./images/yunkyung/cat1.png" />
                    <div className="profile_text">
                      <h1>zzzyk</h1>
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
                    <img src="./images/yunkyung/cat1.png" />
                    <div className="profile_text">
                      <h1>zzzyk</h1>
                      <p>30분 전</p>
                    </div>
                  </div>
                  <div className="profile_detail">
                    <img src="./images/yunkyung/cat1.png" />
                    <div className="profile_text">
                      <h1>zzzyk</h1>
                      <p>30분 전</p>
                    </div>
                  </div>
                  <div className="profile_detail">
                    <img src="./images/yunkyung/cat1.png" />
                    <div className="profile_text">
                      <h1>zzzyk</h1>
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
                <h2>ⓒ 2019 INSTAGRAM</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
