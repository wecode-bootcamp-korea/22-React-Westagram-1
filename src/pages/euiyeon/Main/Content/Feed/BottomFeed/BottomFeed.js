import React, { Component } from 'react';

import CommentedBox from './CommentedBox';
import './BottomFeed.scss';

class BottomFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      isActive: false,
      comments: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          comments: data,
        });
      });
  }

  checkValid = () => {
    this.state.inputValue.length > 0
      ? this.setState({ isActive: true })
      : this.setState({ isActive: false });
  };

  handleCommentValue = e => {
    const { value } = e.target;
    this.setState({ inputValue: value });
  };

  handleCommentPost = e => {
    e.preventDefault();
    if (this.state.inputValue) {
      let arr = this.state.comments;
      arr = arr.concat({
        id: arr.length + 1,
        userName: 'lee',
        content: this.state.inputValue,
      });
      this.setState({ inputValue: '', comments: arr });
    }
  };

  render() {
    return (
      <>
        <div className="feed_info">
          <div className="feed_icon_bar">
            <div className="feed_icon_bar_left">
              <i className="far fa-heart fa-lg"></i>
              <i className="far fa-comment fa-lg"></i>
              <i className="far fa-external-link-alt fa-lg"></i>
            </div>
            <i className="far fa-bookmark fa-lg" id="bookmark"></i>
          </div>
          <div className="whoIsLike">
            <img
              alt="프사"
              className="profile_img_sm"
              src="./images/euiyeon/euiyeon.jpg"
            />
            <span className="profile_id_num">aineworld</span>
            <span>님 외 </span>
            <span className="profile_id_num">10명</span>
            <span>이 좋아합니다</span>
          </div>
          <div className="posting">
            <span className="posting_id" id="postId">
              euiyeonlee
            </span>
            <span className="posting_comment">퇴근길...</span>
          </div>
          <div className="commented_box">
            <ul className="comment_ul_list" id="cmt_ul">
              {this.state.comments.map(e => (
                <CommentedBox
                  key={e.id}
                  commentId={e.id}
                  userName={e.userName}
                  content={e.content}
                />
              ))}
            </ul>
          </div>
        </div>
        <form className="comment_box" onSubmit={this.handleCommentPost}>
          <input
            className="input_comment"
            type="text"
            placeholder="댓글 달기..."
            onKeyUp={this.checkValid}
            value={this.state.inputValue}
            onChange={this.handleCommentValue}
          />
          <button
            className={
              this.state.isActive
                ? 'comment_input_btn'
                : 'comment_input_btn_disabled'
            }
            type="submit"
          >
            게시
          </button>
        </form>
      </>
    );
  }
}

export default BottomFeed;
