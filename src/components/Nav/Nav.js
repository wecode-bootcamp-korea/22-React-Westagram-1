import React from 'react';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav id="navbar">
        <div className="logo">
          <img className="instaLogo" src="images/instagram.svg" alt="logo" />
          <div className="separator"></div>
          <Link className="title" to="/">
            Yongstagram
          </Link>
        </div>
        <div className="searchbarContainer">
          <input className="searchbar" type="text" />
          <span className="searchfont">검색</span>
          <FontAwesomeIcon className="searchIcon" icon={faSearch} />
        </div>
        <div className="icons">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="research"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="heart"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="mypage"
          />
        </div>
      </nav>
    );
  }
}
export default Nav;
