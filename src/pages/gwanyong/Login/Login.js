import React from 'react';
import { withRouter } from 'react-router';
import '../../../styles/common.scss';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      btnColor: 'rgb(192, 223, 253)',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      id: '',
      pw: '',
    });
  };

  goToMain = () => {
    let id = this.state.id;
    let pw = this.state.pw;

    this.isEmail(id) && this.isPassword(pw)
      ? this.props.history.push('/MainGwanyong')
      : alert('id 또는 비밀번호를 확인해주세요!');
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    return this.isEmail(this.state.id) && this.isPassword(this.state.pw)
      ? this.setState({ btnColor: 'rgb(83, 150, 246)' })
      : this.state.btnColor;
  };

  isEmail = value => {
    let regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(value);
  };

  isPassword = value => {
    let regExp = /[0-9]{5,10}$/;
    return regExp.test(value);
  };

  render() {
    console.log(this.props.onSubmit);
    return (
      <div className="Login">
        <div className="container">
          <section id="leftImg">
            <img
              src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
              alt="home-img"
            />
          </section>
          <section id="rightForm">
            <section className="loginBox">
              <h1 className="title">Westagram</h1>
              <form className="loginForm" onSubmit={this.handleSubmit}>
                <input
                  className="userId"
                  name="id"
                  type="text"
                  value={this.state.id}
                  onChange={this.handleChange}
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <input
                  className="userPassword"
                  name="pw"
                  type="password"
                  value={this.state.pw}
                  onChange={this.handleChange}
                  placeholder="비밀번호 (숫자 5자리 이상)"
                />

                <button
                  className="loginBtn"
                  onClick={this.goToMain}
                  style={{
                    backgroundColor: this.state.btnColor,
                  }}
                >
                  로그인
                </button>
                <div className="option">
                  <div className="line"></div>
                  <p className="option-text">또는</p>
                </div>
                <a
                  className="facebookLogin"
                  href="https://wecode.co.kr/programs"
                >
                  <i className="fab fa-facebook-square"></i>
                  Facebook으로 로그인
                </a>
                <p className="lostPw">비밀번호를 잊으셨나요?</p>
              </form>
            </section>

            <section id="signUp">
              <span>계정이 없으신가요?</span>
              <a href="https://wecode.co.kr/programs">
                <span style={{ color: 'rgb(0, 149, 246)' }}>
                  &nbsp;&nbsp; 가입하기
                </span>
              </a>
            </section>
            <p className="downloadText">앱을 다운로드 하세요</p>
            <section id="downloadBtn">
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                alt="iosDownload"
              />
              <img
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                alt="goolgeDownload"
              />
            </section>
          </section>
        </div>
        <footer className="info">
          <p className="info-text">
            소개 &nbsp;&nbsp;&nbsp; 블로그&nbsp;&nbsp;&nbsp;
            채용&nbsp;&nbsp;&nbsp; 정보&nbsp;&nbsp;&nbsp;
            도움말&nbsp;&nbsp;&nbsp; API&nbsp;&nbsp;&nbsp;
            개인정보처리방침&nbsp;&nbsp;&nbsp; 약관&nbsp;&nbsp;&nbsp;
            인기&nbsp;&nbsp;&nbsp; 계정&nbsp;&nbsp;&nbsp;
            해시태그&nbsp;&nbsp;&nbsp; 위치&nbsp;&nbsp;&nbsp;
          </p>

          <p>한국어&nbsp; © 2021 Instagram from Facebook</p>
        </footer>
      </div>
    );
  }
}

export default withRouter(Login);
