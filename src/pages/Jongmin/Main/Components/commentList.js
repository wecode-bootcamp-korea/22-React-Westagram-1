import React from 'react';
import './commentList.scss';

class CommentList extends React.Component {
  render() {
    const { key, UserId, comment } = this.props;
    return (
      <li className="talking">
        {key}
        <span className="commentUserId">{UserId}</span>
        <span className="mentionUserComment">{comment}</span>
      </li>
    );
  }
}

export default CommentList;
