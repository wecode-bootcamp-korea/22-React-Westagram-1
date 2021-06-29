import React from 'react';
import './RecommendUser.scss';

class RecommendUser extends React.Component {
  render() {
    return (
      <div className="recommendUser">
        <div className="userInfo">
          <img className="userImg" src={this.props.img} alt="friend-profile" />
          <div className="nameTag">
            <p className="userId">{this.props.userId} </p>
            <p className="relation">회원님을 팔로우합니다</p>
          </div>
        </div>

        <button className="followBtn">팔로우</button>
      </div>
    );
  }
}
export default RecommendUser;
