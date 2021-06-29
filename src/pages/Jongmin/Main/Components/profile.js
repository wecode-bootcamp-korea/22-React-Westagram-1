import React from 'react';
import Recommand from './recommand';
import Link from './link';
import './profile.scss';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      recommand: [
        {
          id: 'User_1',
          img: '/images/Jongmin/person1.JPG',
        },
      ],
    };
  }

  render() {
    const { recommand } = this.state;
    return (
      <div className="profileInfo">
        <div className="profilePhotoArea">
          <img
            className="imageArea"
            src="/images/Jongmin/photo.jpeg"
            alt="profile"
          ></img>
          <div className="profileDesc">
            <div className="userId">jongmin_8910</div>
            <div className="userName">Jongmin Lee</div>
          </div>
          <button className="change">전환</button>
        </div>
        <div className="recommand">
          <div className="forU">회원님을 위한 추천</div>
          <button className="showAll">모두 보기</button>
        </div>
        <div className="people">
          {recommand.map(recommands => {
            return <Recommand id={recommands.id} img={recommands.img} />;
          })}
          <Link />
        </div>
      </div>
    );
  }
}

export default Profile;
