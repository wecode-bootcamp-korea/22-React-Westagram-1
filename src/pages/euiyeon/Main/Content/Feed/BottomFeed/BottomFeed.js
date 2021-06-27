import React, { Component } from 'react';

import CommentedBox from './CommentedBox';
import './BottomFeed.scss';

class BottomFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      isActive: false,
      comments: [{ nickName: 'kim', content: 'hihihi' }],
    };
  }

  checkValid = () => {
    this.state.inputValue.length > 0
      ? this.setState({ isActive: true })
      : this.setState({ isActive: false });
  };

  handleCommentValue = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleCommentPost = e => {
    this.setState({ content: e.target.value });
  };

  render() {
    return (
      <>
        <div className="feed_info">
          <div className="feed_icon_bar">
            <div className="feed_icon_bar_left">
              <i className="far fa-heart fa-lg"></i>
              <i className="far fa-comment fa-lg"></i>
              <i className="fas fa-external-link-alt fa-lg"></i>
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
              <li className="comment_list">
                <div className="comment_info_box">
                  <span className="posting_id">lee</span>
                  <span className="posting_comment">한강 이쁘네요</span>
                </div>
                <div className="comment_mod_box">
                  <i className="far fa-heart fa-sm"></i>
                  <i className="far fa-trash-alt fa-sm"></i>
                </div>
              </li>
              {this.state.comments.map(arrayItem => (
                <CommentedBox propcontent={arrayItem} handleCommentPost />
              ))}
            </ul>
          </div>
        </div>
        <div className="comment_box">
          <input
            className="input_comment"
            type="text"
            placeholder="댓글 달기..."
            onKeyUp={this.checkValid}
            onChange={this.handleCommentValue}
          />
          <button
            className={
              this.state.isActive
                ? 'comment_input_btn'
                : 'comment_input_btn_disabled'
            }
            type="submit"
            onClick={this.handleCommentPost}
          >
            게시
          </button>
        </div>
      </>
    );
  }
}

export default BottomFeed;
