import React, { Component } from 'react';
import './Comment.scss';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
  render() {
    return (
      <>
        <div className="reply">
          <input
            type="text"
            id="input"
            placeholder="댓글 달기..."
            onkeyup="enterKey()"
          />
          <button type="button" class="reply-btn">
            게시
          </button>
        </div>
      </>
    );
  }
}

export default Comment;
