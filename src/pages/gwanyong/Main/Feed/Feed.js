import React from 'react';
import Reply from './Replys/Reply';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './Feed.scss';

class Feed extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      //댓글 state
      content: '',
      // replys: [],
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
    const { value } = e.target;
    this.setState({ content: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ content: '' });
    this.inputRef.current.value = '';
  };

  addReply = e => {
    const { replys, content } = this.state;
    let newFeed = this.props.feeds;

    newFeed[this.props.feedIdx].replis = [
      ...newFeed[this.props.feedIdx].replis,
      {
        id: newFeed[this.props.feedIdx].replis.length + 1,
        userName: 'yongyong04',
        content: content,
        isLiked: false,
      },
    ];
  };
  clickHeart = id => {
    const replys = [...this.state.replys]; //댓글 리스트 복사

    replys.filter(ele => {
      if (ele.id === id) {
        replys[id - 1].isLiked = !replys[id - 1].isLiked;
      }
    });
    this.setState({ replys: replys });
  };

  deleteReply = index => {
    let newFeed = this.props.feeds[this.props.feedIdx].replis;
    console.log(newFeed);

    // console.log(replys);
    // console.log(this.props.feeds[this.props.feedIdx].replis[index - 1].id);
    // console.log(index, 'index');
    newFeed = [
      newFeed.filter(element => {
        return element.id !== index;
      }),
    ];
    this.props.changeState(newFeed);
  };

  render() {
    return (
      <>
        <section className="feed">
          <div className="feedInfo">
            <div className="profile">
              <div className="imgBackground">
                <img
                  className="writerImg"
                  src={this.props.writerImg}
                  alt="my-profile"
                />
              </div>
              <p className="myId">{this.props.writer} _</p>
            </div>

            <div className="feedOption">
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <article className="feedImg">
            <img className="feedImg" src={this.props.img} alt="feedImage" />
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
              <span className="writerId">{this.props.writer} &nbsp;</span>
              <p className="feedDes">{this.props.introText}</p>
            </div>

            <ul className="replyBox">
              {this.props.feeds[this.props.feedIdx].replis.map(reply => (
                <Reply
                  key={Math.random()}
                  replyIdx={reply.id}
                  userName={reply.userName}
                  text={reply.content}
                  isLiked={reply.isLiked}
                  clickHeart={this.clickHeart}
                  deleteReply={this.deleteReply}
                  feeds={this.feeds}
                />
              ))}
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
