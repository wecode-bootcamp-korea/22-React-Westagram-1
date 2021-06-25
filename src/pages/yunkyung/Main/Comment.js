import React, { Component } from 'react';
import './Comment.scss';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      inputValue: '',
    };
  }

  handleCommment = e => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  reset = () => {
    this.setState({
      commentValue: '',
    });
  };

  addComment = e => {
    const { key, target } = e;

    if (key === 'Enter') {
      this.appendComment();
      return;
    }
    this.setState({
      inputValue: target.value,
    });
  };

  appendComment = () => {
    this.setState({
      commentList: [
        ...this.state.commentList,
        {
          no: this.state.commentList.length + 1,
          westaId: 'zzz_yk',
          comment: this.state.inputValue,
        },
      ],
      inputValue: '',
    });
  };

  render() {
    const { addComment, westaId } = this.state;
    const { commentValue } = this.state;
    console.log(commentValue);

    return (
      <>
        <div className="reply">
          <input
            type="text"
            id="input"
            value={commentValue}
            placeholder="댓글 달기..."
            onChange={this.handleCommment}
          />
          <button type="button" class="reply-btn" onClick={this.addComment}>
            게시
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
