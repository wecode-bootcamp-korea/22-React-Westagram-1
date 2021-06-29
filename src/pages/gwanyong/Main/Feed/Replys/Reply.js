import React from 'react';

import './Replys.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as redheart } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class Reply extends React.Component {
  render() {
    return (
      <li className="replyColumn" key={this.props.replyIdx}>
        <div className="replyText">
          <span className="replyId">{this.props.userName}</span>
          <span className="replyContent">{this.props.text}</span>
        </div>

        <div className="replyIcon">
          <FontAwesomeIcon
            className={this.props.isLiked ? 'heartActive' : 'heart'}
            icon={redheart}
            onClick={() => this.props.clickHeart(this.props.replyIdx)}
          />

          <FontAwesomeIcon
            className="trash"
            icon={faTrash}
            onClick={() => this.props.deleteReply(this.props.replyIdx)}
          />
        </div>
      </li>
    );
  }
}

export default Reply;
