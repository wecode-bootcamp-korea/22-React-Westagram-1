import React from 'react';
import './RecommendBox.scss';

class RecommendBox extends React.Component {
  render() {
    return (
      <div className="recommend_box">
        <div className="recommend_bar">
          <span className="recommendForYou">회원님을 위한 추천</span>
          <span className="recommendShowAll">모두 보기</span>
        </div>
        <ul className="recommend_list">
          <li className="recommend_user">
            <div className="user_profile_wrapper">
              <img
                alt="프사"
                className="profile_img"
                src="./images/euiyeon/euiyeon.jpg"
              />
              <div className="user_profile">
                <span className="profile_id">hi</span>
                <p className="nickname">lee님 외 2명</p>
              </div>
            </div>
            <button className="commentBtn">팔로우</button>
          </li>
          <li className="recommend_user">
            <div className="user_profile_wrapper">
              <img
                alt="프사"
                className="profile_img"
                src="./images/euiyeon/euiyeon.jpg"
              />
              <div className="user_profile">
                <span className="profile_id">hihihi</span>
                <p className="nickname">lee님 외 2명</p>
              </div>
            </div>
            <button className="commentBtn">팔로우</button>
          </li>
          <li className="recommend_user">
            <div className="user_profile_wrapper">
              <img
                alt="프사"
                className="profile_img"
                src="./images/euiyeon/euiyeon.jpg"
              />
              <div className="user_profile">
                <span className="profile_id">hihihi</span>
                <p className="nickname">lee님 외 2명</p>
              </div>
            </div>
            <button className="commentBtn">팔로우</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default RecommendBox;
