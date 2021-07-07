import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    const { commentList } = this.props;

    // json으로 사용할 때는 {this.state.CommentData.map(comment)} 로 사용한다.
    return (
      <>
        <ul className="comment_list">
          {commentList.map(comment => {
            return (
              <li key={comment.id} className="comment_box">
                <span className="comment_id">{comment.userName}</span>
                <span className="comment_content">{comment.content}</span>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Comment;
