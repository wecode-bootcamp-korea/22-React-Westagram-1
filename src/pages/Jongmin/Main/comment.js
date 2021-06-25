import React from 'react';
import '../Main/comment.scss';

class Comment extends React.Component {
  state = {
    comment: '',
    comments: [],
    btn: '게시',
  };

  num = 0;

  handleChange = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      if (!this.state.comment) {
        e.preventDefault();
      } else {
        this.handleComment();
      }
    }
  };

  handleComment = () => {
    this.setState({
      comments: this.state.comments.concat({
        num: this.num,
        comment: this.state.comment,
      }),
      comment: '',
    });
    this.num += 1;
  };

  handleRemove = num => {
    const { comments } = this.state;
    const nextComments = comments.filter(comment => {
      return comment.num !== num;
    });
    this.setState({
      comments: nextComments,
    });
  };

  render() {
    const { comments } = this.state;
    return (
      <div className="commentArea">
        <ul>
          {comments.map(commentText => {
            return (
              <li className="talking" key={commentText.num}>
                <span className="commentUserId">jongmin_8910</span>
                {commentText.comment}
                <button
                  className="deleteReply"
                  onClick={() => this.handleRemove(commentText.num)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <div className="commentInput">
          <button class="emozi">
            <img class="smile" src="/images/Jongmin/emozi.png" alt="emoticon" />
          </button>
          <input
            value={this.state.comment}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyPress}
            type="text"
            className="write"
          />
          <button
            onClick={
              !this.state.comment
                ? e => {
                    e.preventDefault();
                  }
                : this.handleComment
            }
            className={`summit ${this.state.comment.value >= 1 ? 'on' : 'off'}`}
          >
            {' '}
            {this.state.btn}
          </button>
        </div>
      </div>
    );
  }
}

export default Comment;
