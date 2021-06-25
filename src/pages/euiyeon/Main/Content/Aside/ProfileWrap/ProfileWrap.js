import React from 'react';
import './ProfileWrap.scss';

class ProfileWrap extends React.Component {
  render() {
    return (
      <div className="profile_wrapper">
        <img
          alt="프사"
          className="profile_img_lg"
          src="./images/euiyeon/euiyeon.jpg"
        />
        <div className="profileName_wrapper">
          <span className="profile_id">euiyeonlee</span>
          <p className="nickname">이의연</p>
        </div>
      </div>
    );
  }
}

export default ProfileWrap;
