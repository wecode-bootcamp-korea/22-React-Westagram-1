import React, { Component } from 'react';

import CommentedBox from './CommentedBox';
import './BottomFeed.scss';

class BottomFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      comments: [],
    };
  }
  componentDidMount() {
    this.setState({ comments: this.props.comments });
  }

  handleCommentValue = e => {
    const { value } = e.target;
    this.setState({ inputValue: value });
  };

  handleCommentPost = e => {
    const oldComments = this.state.comments;
    if (this.state.inputValue) {
      const newComments = oldComments.concat({
        id: oldComments.length + 1,
        userName: 'lee',
        content: this.state.inputValue,
        isLiked: false,
      });
      this.setState({ inputValue: '', comments: newComments });
      e.preventDefault();
    }
  };

  render() {
    console.log(this.state.comments, 'sss');
    const {
      like_click,
      like_user_profile_img,
      like_user_profile_id,
      like_num,
      profile_id,
      post_user_mension,
      comments,
    } = this.props;
    return (
      <>
        <div className="feed_info">
          <div className="feed_icon_bar">
            <div className="feed_icon_bar_left">
              <i className="far fa-heart fa-lg">{like_click}</i>
              <i className="far fa-comment fa-lg"></i>
              <i className="far fa-external-link-alt fa-lg"></i>
            </div>
            <i className="far fa-bookmark fa-lg" id="bookmark"></i>
          </div>
          <div className="whoIsLike">
            <img
              alt="프사"
              className="profile_img_sm"
              src={like_user_profile_img}
            />
            <span className="profile_id_num">{like_user_profile_id}</span>
            <span>님 외 </span>
            <span className="profile_id_num">{like_num}명</span>
            <span>이 좋아합니다</span>
          </div>
          <div className="posting">
            <span className="posting_id" id="postId">
              {profile_id}
            </span>
            <span className="posting_comment">{post_user_mension}</span>
          </div>
          <div className="commented_box">
            <ul className="comment_ul_list" id="cmt_ul">
              {this.state.comments.map(comment => (
                <CommentedBox
                  commentId={comment.id}
                  userName={comment.userName}
                  content={comment.content}
                  isLiked={comment.isLiked}
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
              this.state.inputValue.length > 0
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
