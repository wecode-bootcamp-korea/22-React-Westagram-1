import React from 'react';

class CommentedBox extends React.Component {
  constructor() {
    super();
    this.state = {
      content: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }
  render() {
    const { nickName, content } = this.props.commentList;

    return (
      <li className="comment_list">
        <div className="comment_info_box">
          <span className="commented_id">{nickName}</span>
          <span className="commented_comment">{content}</span>
        </div>
        <div className="comment_mod_box">
          {/* <button type="button" id="heartBtn"> */}
          <i className="far fa-heart fa-sm"></i>
          {/* </button> */}
          {/* <button type="button" id="deleteBtn"> */}
          <i className="far fa-trash-alt fa-sm"></i>
          {/* </button> */}
        </div>
      </li>
    );
  }
}

export default CommentedBox;
