import React from 'react';
import './recommend.scss';

class Recommand extends React.Component {
  render() {
    return (
      <div className="person">
        <img className="personPhoto" src={this.props.img} alt="recommand"></img>
        <div className="personInfo">
          <div className="personName">{this.props.id}</div>
          <div className="followOrNot">회원님을 위한 추천</div>
        </div>
        <button className="followButoon">팔로우</button>
      </div>
    );
  }
}

export default Recommand;
