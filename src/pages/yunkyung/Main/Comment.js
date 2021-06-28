import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    const { commentList } = this.props;

    return (
      <>
        <ul className="comment_list">
          {commentList.map((comment, i) => (
            <li key={i} className="comment_box">
              <span className="comment_id">{comment.userName}</span>
              {comment.content}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Comment;
