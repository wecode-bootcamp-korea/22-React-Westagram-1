import React from 'react';
import CommentList from './commentList';
import './comment.scss';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: '',
    };
  }

  handleCommentValue = e => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  deleteComment = e => {
    this.setState({ commentList: e.target.id });
  };

  addComment = e => {
    e.preventDefault();
    const { commentList, commentValue } = this.state;
    this.setState({
      commentList: [
        ...commentList,
        {
          id: commentList.length + 1,
          userName: 'jongmin_8910',
          content: commentValue,
          isLiked: false,
        },
      ],
      commentValue: '',
    });
  };

  render() {
    const { commentList, commentValue } = this.state;
    return (
      <div className="commentArea">
        <ul>
          {commentList.map(comment => {
            return (
              <CommentList
                key={comment.id}
                UserId={comment.userName}
                comment={comment.content}
              />
            );
          })}
        </ul>
        <div className="feedTime">10시간 전</div>
        <div className="commentInput">
          <button class="emozi">
            <img class="smile" src="/images/Jongmin/emozi.png" alt="emoticon" />
          </button>
          <input
            className="write"
            onChange={this.handleCommentValue}
            onKeyPress={this.handleKeyPress}
            type="text"
            value={commentValue}
          />
          <button
            c
            className={`summit ${
              this.state.commentValue.length >= 1 ? 'on' : 'off'
            }`}
            onClick={this.addComment}
          >
            게시
          </button>
        </div>
      </div>
    );
  }
}

export default Comment;
