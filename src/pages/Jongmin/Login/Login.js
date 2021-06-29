import React from 'react';
import '../Login/Login.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import '../../../styles/variable.scss';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }
  handleIdInput = e => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pw: e.target.value,
    });
  };
  goToMain = () => {
    this.props.history.push('/main');
  };

  render() {
    return (
      <div class="WholePage">
        <div class="loginMainPage">
          <div class="mainPage">
            <div class="homeImg">
              <div class="slidShow">
                <img
                  class="screenShot"
                  src="https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg"
                  alt="1"
                />
              </div>
            </div>
            <div class="loginPage">
              <div class="login">
                <div class="logoContain">
                  <img
                    class="logo1"
                    src="/images/Jongmin/Westagram.png"
                    alt="logo"
                  ></img>
                </div>
                <div class="loginInfo">
                  <div class="IdPw">
                    <div class="Infoinput">
                      <input
                        class="userinfoID"
                        type="text"
                        placeholder="전화번호, 사용자 이름 또는 이메일"
                        onChange={this.handleIdInput}
                        value={this.state.id}
                      ></input>
                    </div>
                    <div class="Infoinput">
                      <input
                        class="userinfoPW"
                        type="password"
                        placeholder="비밀번호"
                        onChange={this.handlePwInput}
                        value={this.state.pw}
                      ></input>
                    </div>
                    <div class="loginButton">
                      <button
                        className={`buttonDisable ${
                          this.state.id.includes('@') &&
                          this.state.pw.length >= 5
                            ? 'on'
                            : 'off'
                        }`}
                        type="button"
                        onClick={this.goToMain}
                      >
                        <span className="btnText">로그인</span>
                      </button>
                    </div>
                    <div class="OrArea">
                      <div class="line"></div>
                      <div class="or">또는</div>
                      <div class="line"></div>
                    </div>
                    <div class="facebookLogin">
                      <button type="button">
                        <span class="facebookLogo"></span>
                        <span class="toFacebook">Facebook으로 로그인</span>
                      </button>
                    </div>
                  </div>
                  <a
                    class="forgetPW"
                    href="https://www.instagram.com/accounts/password/reset/"
                  >
                    비밀번호를 잊으셨나요?
                  </a>
                </div>
              </div>
              <div class="signup">
                <div class="createId">
                  <p class="noid">
                    계정이 없으신가요?{' '}
                    <a href="https://www.instagram.com/accounts/emailsignup/">
                      가입하기
                    </a>
                  </p>
                </div>
              </div>
              <div class="download">
                <p class="appDown">앱을 다운로드하세요.</p>
                <div class="linkStore">
                  <a
                    class="apple"
                    href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
                  >
                    <img
                      src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                      alt="appstore"
                    />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D79D4EEBC-A27C-4B63-BFC2-CFB74861054C%26utm_content%3Dlo%26utm_medium%3Dbadge">
                    <img
                      src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                      alt="playstore"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="loginFooter">
          <div class="footerMain">
            <div class="infolinks">
              <div class="allInfo">
                <a
                  class="infos"
                  href="https://about.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  소개
                </a>
                <a
                  class="infos"
                  href="https://about.instagram.com/blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  블로그
                </a>
                <a
                  class="infos"
                  href="https://about.instagram.com/about-us/careers"
                  target="_blank"
                  rel="noreferrer"
                >
                  채용 정보
                </a>
                <a
                  class="infos"
                  href="https://help.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  도움말
                </a>
                <a
                  class="infos"
                  href="https://developers.facebook.com/docs/instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  API
                </a>
                <a
                  class="infos"
                  href="https://help.instagram.com/519522125107875"
                  target="_blank"
                  rel="noreferrer"
                >
                  개인정보처리방침
                </a>
                <a
                  class="infos"
                  href="https://help.instagram.com/581066165581870"
                  target="_blank"
                  rel="noreferrer"
                >
                  약관
                </a>
                <a
                  class="infos"
                  href="https://www.instagram.com/directory/profiles/"
                  target="_blank"
                  rel="noreferrer"
                >
                  인기 계정
                </a>
                <a
                  class="infos"
                  href="https://www.instagram.com/directory/hashtags/"
                  target="_blank"
                  rel="noreferrer"
                >
                  해시태그
                </a>
                <a
                  class="infos"
                  href="https://www.instagram.com/explore/locations/"
                  target="_blank"
                  rel="noreferrer"
                >
                  위치
                </a>
              </div>
            </div>
            <div class="lagAndCopy">
              <select class="language">
                <option value="kr">한국어</option>
                <option value="jp">日本語</option>
                <option value="en">English</option>
              </select>
              <div class="copy">© 2021 Instagram from Facebook</div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(Login);
