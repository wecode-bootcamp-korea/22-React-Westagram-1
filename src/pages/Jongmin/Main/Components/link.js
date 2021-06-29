import React from 'react';
import './link.scss';

class Link extends React.Component {
  render() {
    return (
      <>
        <div className="links">
          <div className="allLinks">
            <a
              className="infos_main"
              href="https://about.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              소개
            </a>
            <div className="dot">·</div>
            <a
              className="infos_main"
              href="https://help.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              도움말
            </a>
            <div className="dot">·</div>
            <a
              className="infos_main"
              href="https://about.instagram.com/blog"
              target="_blank"
              rel="noreferrer"
            >
              홍보 센터
            </a>
            <div className="dot">·</div>
            <a
              className="infos_main"
              href="https://developers.facebook.com/docs/instagram"
              target="_blank"
              rel="noreferrer"
            >
              API
            </a>
            <div className="dot">·</div>
            <a
              className="infos_main"
              href="https://about.instagram.com/about-us/careers"
              target="_blank"
              rel="noreferrer"
            >
              채용 정보
            </a>
            <div className="dot">·</div>
            <a
              className="infos_main"
              href="https://help.instagram.com/519522125107875"
              target="_blank"
              rel="noreferrer"
            >
              개인정보처리방침
            </a>
            <div className="dot">·</div>
          </div>
          <div className="allLinks">
            <a
              className="infos_main"
              href="https://help.instagram.com/581066165581870"
              target="_blank"
              rel="noreferrer"
            >
              약관
            </a>
            <div className="dot">·</div>
            <a
              className="infos_main"
              href="https://www.instagram.com/explore/locations/"
              target="_blank"
              rel="noreferrer"
            >
              위치
            </a>
            <div className="dot">·</div>
            <a
              className="infos_main"
              href="https://www.instagram.com/directory/profiles/"
              target="_blank"
              rel="noreferrer"
            >
              인기 계정
            </a>
            <div className="dot">·</div>
            <a
              className="infos_main"
              href="https://www.instagram.com/directory/hashtags/"
              target="_blank"
              rel="noreferrer"
            >
              해시태그
            </a>
            <div className="dot">·</div>
            <div className="languageBox">
              <select className="language">
                <option
                  hidden=""
                  disabled="disabled"
                  selected="selected"
                  value=""
                >
                  언어
                </option>
                <option value="kr">한국어</option>
                <option value="jp">日本語</option>
                <option value="en">English</option>
              </select>
            </div>
          </div>
        </div>
        <div className="copyright">© 2021 Instagram from Facebook</div>
      </>
    );
  }
}

export default Link;
