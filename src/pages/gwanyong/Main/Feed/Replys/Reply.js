import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as redheart } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Replys.scss';

class Reply extends React.Component {
  clickHeart = id => {
    const newFeed = [...this.props.feeds];
    newFeed[this.props.feedIdx].replis = newFeed[this.props.feedIdx].replis.map(
      reply => {
        if (reply.id === id) {
          reply.isLiked = !reply.isLiked;
        }
        return reply;
      }
    );

    this.props.changeState(newFeed);
  };

  deleteReply = index => {
    const newFeed = [...this.props.feeds];
    newFeed[this.props.feedIdx].replis = newFeed[
      this.props.feedIdx
    ].replis.filter(element => {
      return element.id !== index;
    });
    this.props.changeState(newFeed);
  };
  render() {
    const { replyIdx } = this.props;

    return (
      <li className="replyColumn" key={replyIdx}>
        <div className="replyText">
          <span className="replyId">{this.props.userName}</span>
          <span className="replyContent">{this.props.text}</span>
        </div>

        <div className="replyIcon">
          <FontAwesomeIcon
            className={this.props.isLiked ? 'heartActive' : 'heart'}
            icon={redheart}
            onClick={() => this.clickHeart(replyIdx)}
          />

          <FontAwesomeIcon
            className="trash"
            icon={faTrash}
            onClick={() => this.deleteReply(replyIdx)}
          />
        </div>
      </li>
    );
  }
}

export default Reply;
