import React from 'react';
import './Login.scss';
import '../../../styles/variable.scss';

import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      isActive: false,
    };
  }

  checkValid = () => {
    this.state.id.length > 0 && this.state.pw.length >= 6
      ? this.setState({ isActive: true })
      : this.setState({ isActive: false });
  };

  handleInputValue = e => {
    this.setState({ id: e.target.value });
  };

  handlePwdValue = e => {
    this.setState({ pw: e.target.value });
  };

  goToMain = e => {
    if (this.state.isActive) {
      this.props.history.push('/MainEuiyeon');
    }
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
                  onKeyUp={this.checkValid}
                  onChange={this.handleInputValue}
                />
              </div>
              <div className="inputPassword">
                <input
                  className="input"
                  id="pwInput"
                  type="password"
                  placeholder="비밀번호 (6자리 이상)"
                  onKeyUp={this.checkValid}
                  onChange={this.handlePwdValue}
                />
              </div>
            </div>

            <div className="buttonWrap">
              <button
                className={
                  this.state.isActive ? 'loginBtn' : 'loginBtn_disabled'
                }
                type="button"
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
