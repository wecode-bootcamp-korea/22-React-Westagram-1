import React from 'react';
import './commentList.scss';

class CommentList extends React.Component {
  render() {
    console.log(this.props.commentId);
    const { commentId } = this.props;
    return (
      <li className="talking" key={this.props.key}>
        <span className="commentUserId">{this.props.UserId}</span>
        <span className="mentionUserComment">{this.props.comment}</span>
        <button
          className="deleteReply"
          onClick={() => this.props.deleteComment(commentId)}
        >
          X
        </button>
        <button
          className="likeBtn"
          value={this.props.isLiked}
          onClick={() => this.props.changelike(commentId)}
        >
          <img
            className="heart"
            src={
              this.props.isLiked ? this.props.redHeart : this.props.blackHeart
            }
            alt="Like"
          ></img>
        </button>
      </li>
    );
  }
}

export default CommentList;
