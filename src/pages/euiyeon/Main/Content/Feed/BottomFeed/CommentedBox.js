import React from 'react';

class CommentedBox extends React.Component {
  render() {
    const { userName, content } = this.props;

    return (
      <li className="comment_list">
        <div className="comment_info_box">
          <span className="commented_id">{userName}</span>
          <span className="commented_comment">{content}</span>
        </div>
        <div className="comment_mod_box">
          <i className="far fa-heart fa-sm"></i>
          <i className="far fa-trash-alt fa-sm"></i>
        </div>
      </li>
    );
  }
}

export default CommentedBox;
