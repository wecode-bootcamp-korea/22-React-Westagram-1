import React from 'react';
import Nav from '../../../components/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './Main.scss';
import '../../../styles/common.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      replys: [],
      content: '',
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const replyArray = [...this.state.replys];
    replyArray.push({
      user: 'musk',
      content: this.state.content,
    });
  };

  handleChange = e => {
    this.setState = {
      content: e.target.value,
    };
  };

  render() {
    return (
      <>
        <Nav />
        <div className="main">
          <main id="main">
            <div className="mainContainer">
              <section id="storyContainer">
                <div className="story">
                  <div className="storyBackground">
                    <img
                      className="storyImg"
                      src="images/gwanyong/iu2.jpeg"
                      alt="story"
                    />
                  </div>
                  <span className="storyId">dlwlrma</span>
                </div>
                <div className="story">
                  <div className="storyBackground">
                    <img
                      className="storyImg"
                      src="images/gwanyong/iu2.jpeg"
                      alt="story"
                    />
                  </div>
                  <span className="storyId">dlwlrma</span>
                </div>
                <div className="story">
                  <div className="storyBackground">
                    <img
                      className="storyImg"
                      src="images/gwanyong/iu2.jpeg"
                      alt="story"
                    />
                  </div>
                  <span className="storyId">dlwlrma</span>
                </div>
                <div className="story">
                  <div className="storyBackground">
                    <img
                      className="storyImg"
                      src="images/gwanyong/iu2.jpeg"
                      alt="story"
                    />
                  </div>
                  <span className="storyId">dlwlrma</span>
                </div>
                <div className="story">
                  <div className="storyBackground">
                    <img
                      className="storyImg"
                      src="images/gwanyong/iu2.jpeg"
                      alt="story"
                    />
                  </div>
                  <span className="storyId">dlwlrma</span>
                </div>
              </section>
              <section className="feed">
                <div className="feedInfo">
                  <div className="profile">
                    <div className="imgBackground">
                      <img
                        className="writerImg"
                        src="images/gwanyong/profile.jpeg"
                        alt="my-profile"
                      />
                    </div>
                    <p className="myId">gwanyong _</p>
                  </div>

                  <div className="feedOption">
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                </div>
                <article className="feedImg">
                  <img
                    className="feedImg"
                    src="images/gwanyong/puppy-1207816_1920.jpg"
                    alt="feedImage"
                  />
                </article>
                <section className="replyContainer">
                  <div className="feedIconBox">
                    <div className="leftBox">
                      <FontAwesomeIcon className="icon" icon={faHeart} />
                      <FontAwesomeIcon className="icon" icon={faComment} />
                      <FontAwesomeIcon className="icon" icon={faShare} />
                    </div>
                    <div className="rightBox">
                      <FontAwesomeIcon className="icon" icon={faBookmark} />
                    </div>
                  </div>
                  <div className="userContents">
                    <span className="writerId">gwanyong &nbsp;</span>
                    <p className="feedDes">귀여운 갱얼쥐~👻</p>
                  </div>

                  <ul className="replyBox">
                    <li className="replyColumn">
                      <div className="replyText">
                        <span className="replyId">gwanyong</span>
                        <span className="replyContent">dnfkdfl</span>
                      </div>

                      <div className="replyIcon">
                        <FontAwesomeIcon className="heart" icon={faHeart} />
                        <FontAwesomeIcon className="trash" icon={faTrash} />
                      </div>
                    </li>
                  </ul>

                  <p className="countedDay">1일 전</p>
                  <div className="replyInputBox">
                    <form
                      className="inputContainer"
                      onSubmit={this.handleSubmit}
                    >
                      <FontAwesomeIcon className="imoges" icon={faSmile} />
                      <input
                        onChange={this.handleChange}
                        className="replyInput"
                        type="text"
                        placeholder="댓글 달기..."
                      />
                      <button className="replyBtn">게시</button>
                    </form>
                  </div>
                </section>
              </section>
            </div>
            <aside id="sideMenu">
              <section className="profileBox">
                <div className="myInfo">
                  <img
                    className="myImg"
                    src="images/gwanyong/profile.jpeg"
                    alt="my-profile"
                  />

                  <div className="nameTag">
                    <p className="myId">gwanynong _</p>
                    <p className="myName">관용</p>
                  </div>
                </div>

                <button className="accountChangeBtn">전환</button>
              </section>

              <section className="recommendContainer">
                <div className="recommendHead">
                  <p
                    style={{
                      fontSize: '14px',
                      color: '#8e8e8e',
                      fontWeight: 'bold',
                    }}
                  >
                    회원님을 위한 추천
                  </p>
                  <p className="viewAll">모두 보기</p>
                </div>
                <div className="recommendList">
                  <div className="recommendUser">
                    <div className="userInfo">
                      <img
                        className="userImg"
                        src="images/gwanyong/musk.jpeg"
                        alt="friend-profile"
                      />
                      <div className="nameTag">
                        <p className="userId">Elon Mask </p>
                        <p className="relation">회원님을 팔로우합니다</p>
                      </div>
                    </div>

                    <button className="followBtn">팔로우</button>
                  </div>
                  <div className="recommendUser">
                    <div className="userInfo">
                      <img
                        className="userImg"
                        src="images/gwanyong/musk.jpeg"
                        alt="friend-profile"
                      />
                      <div className="nameTag">
                        <p className="userId">Elon Mask</p>
                        <p className="relation">회원님을 팔로우합니다</p>
                      </div>
                    </div>

                    <button className="followBtn">팔로우</button>
                  </div>
                  <div className="recommendUser">
                    <div className="userInfo">
                      <img
                        className="userImg"
                        src="images/gwanyong/musk.jpeg"
                        alt="friend-profile"
                      />
                      <div className="nameTag">
                        <p className="userId">Elon Mask &nbsp;</p>
                        <p className="relation">회원님을 팔로우합니다</p>
                      </div>
                    </div>

                    <button className="followBtn">팔로우</button>
                  </div>
                  <div className="recommendUser">
                    <div className="userInfo">
                      <img
                        className="userImg"
                        src="images/gwanyong/musk.jpeg"
                        alt="friend-profile"
                      />
                      <div className="nameTag">
                        <p className="userId">Elon Mask</p>
                        <p className="relation">회원님을 팔로우합니다</p>
                      </div>
                    </div>

                    <button className="followBtn">팔로우</button>
                  </div>
                </div>
              </section>
              <section className="companyInfo"></section>
            </aside>
          </main>
        </div>
      </>
    );
  }
}

export default Main;
