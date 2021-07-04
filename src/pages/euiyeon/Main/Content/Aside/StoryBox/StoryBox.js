import React from 'react';

class StoryBox extends React.Component {
  render() {
    return (
      <div className="storybox">
        <div className="storybar">
          <span className="storyname">스토리</span>
          <span className="storyShowAll">모두 보기</span>
        </div>
        <ul className="userlist">
          <li className="userbox">
            <img
              alt="프사"
              className="profile_img"
              src="./images/euiyeon/euiyeon.jpg"
            />
            <div className="user_profile">
              <span className="profile_id">euiyeonlee</span>
              <p className="nickname">20분전</p>
            </div>
          </li>
          <li className="userbox">
            <img
              alt="프사"
              className="profile_img"
              src="./images/euiyeon/euiyeon.jpg"
            />
            <div className="user_profile">
              <span className="profile_id">euiyeonlee</span>
              <p className="nickname">1시간전</p>
            </div>
          </li>
          <li className="userbox">
            <img
              alt="프사"
              className="profile_img"
              src="./images/euiyeon/euiyeon.jpg"
            />
            <div className="user_profile">
              <span className="profile_id">euiyeonlee</span>
              <p className="nickname">5시간전</p>
            </div>
          </li>
          <li className="userbox">
            <img
              alt="프사"
              className="profile_img"
              src="./images/euiyeon/euiyeon.jpg"
            />
            <div className="user_profile">
              <span className="profile_id">euiyeonlee</span>
              <p className="nickname">14시간전</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default StoryBox;
