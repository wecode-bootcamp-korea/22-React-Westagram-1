import React from 'react';
import './Aside.scss';
import RecommendUser from './RecommendUser/RecommendUser';

class Aside extends React.Component {
  render() {
    const { recommands } = this.props;
    return (
      <aside id="sideMenu">
        <section className="profileBox">
          <div className="myInfo">
            <img
              className="myImg"
              src="images/gwanyong/profile.jpeg"
              alt="my-profile"
            />

            <div className="nameTag">
              <p className="myId">gwanynong _</p>
              <p className="myName">관용</p>
            </div>
          </div>

          <button className="accountChangeBtn">전환</button>
        </section>

        <section className="recommendContainer">
          <div className="recommendHead">
            <p
              style={{
                fontSize: '14px',
                color: '#8e8e8e',
                fontWeight: 'bold',
              }}
            >
              회원님을 위한 추천
            </p>
            <p className="viewAll">모두 보기</p>
          </div>
          <div className="recommendList">
            {recommands.map((user, index) => {
              return (
                <RecommendUser
                  key={index}
                  img={user.img}
                  userId={user.userId}
                />
              );
            })}
          </div>
        </section>
        <section className="companyInfo"></section>
      </aside>
    );
  }
}
export default Aside;
