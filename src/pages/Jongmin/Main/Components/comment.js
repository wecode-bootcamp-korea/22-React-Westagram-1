import React from 'react';
import CommentList from './commentList';
import './comment.scss';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: '',
      blackHeart: '/images/Jongmin/instagramBlackHeart.png',
      redHeart: '/images/Jongmin/instagramRedHeart.png',
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

  handleCommentValue = e => {
    const { value } = e.target;
    this.setState({ commentValue: value });
  };

  addComment = e => {
    e.preventDefault();
    const { commentList, commentValue } = this.state;
    this.setState({
      commentList: [
        ...commentList,
        {
          id: commentList.length + 1,
          userName: 'jongmin_8910',
          content: commentValue,
          isLiked: false,
        },
      ],
      commentValue: '',
    });
  };

  deleteReply = index => {
    console.log('클릭');
    const { commentList } = this.state;
    const otherReplys = commentList.filter(element => {
      return element.id !== index;
    });
    this.setState({ commentList: otherReplys });
  };

  changeLike = id => {
    const commentList = [...this.state.commentList];

    commentList.filter(ele => {
      if (ele.id === id) {
        commentList[id - 1].isLiked = !commentList[id - 1].isLiked;
      }
    });
    this.setState({ commentList: commentList });
  };

  render() {
    const { commentList, commentValue } = this.state;
    return (
      <div className="commentArea">
        <ul>
          {commentList.map(comment => {
            return (
              <CommentList
                key={comment.id}
                commentId={comment.id}
                UserId={comment.userName}
                comment={comment.content}
                isLiked={comment.isLiked}
                deleteComment={this.deleteReply}
                changelike={this.changeLike}
                blackHeart={this.state.blackHeart}
                redHeart={this.state.redHeart}
              />
            );
          })}
        </ul>
        <div className="feedTime">10시간 전</div>
        <div className="commentInput">
          <button className="emozi">
            <img
              className="smile"
              src="/images/Jongmin/emozi.png"
              alt="emoticon"
            />
          </button>
          <input
            className="write"
            onChange={this.handleCommentValue}
            onKeyPress={this.handleKeyPress}
            type="text"
            value={commentValue}
          />
          <button
            className={`summit ${
              this.state.commentValue.length >= 1 ? 'on' : 'off'
            }`}
            onClick={this.addComment}
          >
            게시
          </button>
        </div>
      </div>
    );
  }
}

export default Comment;
