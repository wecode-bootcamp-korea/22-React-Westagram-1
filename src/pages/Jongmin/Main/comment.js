import React from 'react';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import '../../../styles/variable.scss';

class Comment extends React.Component {
  render() {
    return (
      <>
        <div className="commentArea"></div>
        <div className="feedTime">10시간 전</div>
        <div className="commentInput">
          <button className="emozi">
            <img
              className="smile"
              src="/images/Jongmin/emozi.png"
              alt="emoticon"
            />
          </button>
          <input className="write" type="text" />
          <button onclick="summitComment()" className="summit">
            게시
          </button>
        </div>
      </>
    );
  }
}
