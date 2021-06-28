import React from 'react';

class CommentedBox extends React.Component {
  constructor() {
    super();
    this.state = {
      content: '',
    };
  }
  render() {
    const { nickName, content } = this.props.commentList;

    return (
      <li className="comment_list">
        <div className="comment_info_box">
          <span className="posting_id">{nickName}</span>
          <span className="posting_comment">{content}</span>
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
