import React from 'react';

class FeedInfo extends React.Component {
  render() {
    return (
      <div className="feed_info">
        <div className="feed_icon_bar">
          <div className="feed_icon_bar_left">
            <i className="far fa-heart fa-lg"></i>
            <i className="far fa-comment fa-lg"></i>
            <i className="fas fa-external-link-alt fa-lg"></i>
          </div>
          <i className="far fa-bookmark fa-lg" id="bookmark"></i>
        </div>
        <div className="whoIsLike">
          <img
            alt="프사"
            className="profile_img_sm"
            src="./images/euiyeon/euiyeon.jpg"
          />
          <span className="profile_id_num">aineworld</span>
          <span>님 외 </span>
          <span className="profile_id_num">10명</span>
          <span>이 좋아합니다</span>
        </div>
        <div className="posting">
          <span className="posting_id" id="postId">
            euiyeonlee
          </span>
          <span className="posting_comment">퇴근길...</span>
        </div>
        <div className="commented_box">
          <ul className="comment_ul_list" id="cmt_ul">
            <li className="comment_list">
              <div className="comment_info_box">
                <span className="posting_id">lee</span>
                <span className="posting_comment">한강 이쁘네요</span>
              </div>
              <div className="comment_mod_box">
                <i className="far fa-heart fa-xs"></i>
                <i className="far fa-trash-alt fa-xs"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FeedInfo;
