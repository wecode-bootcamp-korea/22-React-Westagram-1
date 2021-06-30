import React from 'react';

import './Replys.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as redheart } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class Reply extends React.Component {
  render() {
    const { replyIdx } = this.props;
    console.log(replyIdx, 'reple');

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
            onClick={() => this.props.clickHeart(replyIdx)}
          />

          <FontAwesomeIcon
            className="trash"
            icon={faTrash}
            onClick={() => this.props.deleteReply(replyIdx)}
          />
        </div>
      </li>
    );
  }
}

export default Reply;
