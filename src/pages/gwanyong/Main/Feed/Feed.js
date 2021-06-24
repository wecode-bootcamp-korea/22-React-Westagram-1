import React from 'react';
import './Feed.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class Feed extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      content: '',
      replys: [],
    };
  }

  handleKeyEvent = e => {
    if (e.key === 'Enter') {
      if (!this.state.content) {
        e.preventDefault();
        alert('댓글을 입력해주세요!');
      } else {
        this.addReply();
      }
    }
  };

  handleChange = e => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ content: '' });
    this.inputRef.current.value = '';
  };

  addReply = () => {
    this.setState({
      replys: this.state.replys.concat({
        content: this.state.content,
      }),
    });
  };

  deleteReply = index => {
    const { replys } = this.state;
    const otherReplys = replys.filter((element, idx) => {
      return idx !== index;
    });
    this.setState({ replys: otherReplys });
  };

  activeHeart = () => {
    this.setState({ isLike: true });
    if (this.state.isLike === true) {
      console.log('빨강');
    }
  };

  render() {
    const { replys } = this.state;
    return (
      <>
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
              {replys.map((text, index) => {
                return (
                  <li className="replyColumn" key={index}>
                    <div className="replyText">
                      <span className="replyId">musk</span>
                      <span className="replyContent">{text.content}</span>
                    </div>

                    <div className="replyIcon">
                      <FontAwesomeIcon
                        className="heart"
                        icon={faHeart}
                        onClick={this.activeHeart}
                      />
                      <FontAwesomeIcon
                        className="trash"
                        icon={faTrash}
                        onClick={() => this.deleteReply(index)}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>

            <p className="countedDay">1일 전</p>
            <div className="replyInputBox">
              <form className="inputContainer" onSubmit={this.handleSubmit}>
                <FontAwesomeIcon className="imoges" icon={faSmile} />
                <input
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyEvent}
                  className="replyInput"
                  type="text"
                  placeholder="댓글 달기..."
                  ref={this.inputRef}
                />
                <button className="replyBtn">게시</button>
              </form>
            </div>
          </section>
        </section>
      </>
    );
  }
}
export default Feed;
