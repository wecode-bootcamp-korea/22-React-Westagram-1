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
          <button type="button" id="heartBtn">
            <i className="far fa-heart fa-sm"></i>
          </button>
          <button type="button" id="deleteBtn">
            <i className="far fa-trash-alt fa-sm"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default CommentedBox;
