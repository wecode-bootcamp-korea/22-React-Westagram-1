import React from 'react';
import './Login.scss';
import '../../../styles/variable.scss';

import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/main');
  };
  render() {
    return (
      <div class="Login">
        <section className="loginBox">
          <div className="logo">
            <div className="logoFont">Westagram</div>
          </div>

          <form className="loginForm">
            <div className="inputWrap">
              <div className="inputId">
                <input
                  className="input"
                  id="idInput"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
              </div>
              <div className="inputPassword">
                <input
                  className="input"
                  id="pwInput"
                  type="password"
                  placeholder="비밀번호 (6자리 이상)"
                />
              </div>
            </div>

            <div className="buttonWrap">
              <button
                className="loginButton"
                type="submit"
                onClick={this.goToMain}
              >
                {' '}
                로그인{' '}
              </button>
            </div>
          </form>

          <div className="forgotText">
            <a className="forgotPassword">비밀번호를 잊으셨나요?</a>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
