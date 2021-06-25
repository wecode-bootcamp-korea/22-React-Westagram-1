import React from 'react';
import './CommentBox.scss';

class CommentBox extends React.Component {
  render() {
    return (
      <div className="comment_box">
        <input
          className="input_comment"
          type="text"
          placeholder="댓글 달기..."
        />
        <button
          className="commentBtn"
          type="submit"
          // onClick="submitComment()"
          disabled
        >
          게시
        </button>
      </div>
    );
  }
}

export default CommentBox;
