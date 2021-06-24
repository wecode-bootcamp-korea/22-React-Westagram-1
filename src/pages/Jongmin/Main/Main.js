import React from 'react';
import Nav from '../../../components/Nav/Nav';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import '../../../styles/variable.scss';
import '../Main/Main.scss';

class MainJongmin extends React.Component {
  constructor() {
    super();

    this.state = {
      commentList: [],
      commentText: '',
      userID: 'jongmin_8910',
    };
  }

  commentState = event => {
    this.setState(
      {
        commentText: event.target.value,
      },
      () => console.log('commentText', this.state.commentText)
    );
  };

  commentAdd = () => {
    const commentText = this.state.commentText;
    this.state.commentList.push(commentText);
    this.setState({
      commentList: this.state.commentText,
      commentText: '',
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <main class="mainpage">
          <div class="feedAndStory">
            <div class="story">
              <div class="storyPlay">
                <div class="buttonBackground">
                  <button class="friendStory">
                    <img
                      class="userPhoto"
                      src="/images/Jongmin/friendstory.JPG"
                      alt="user"
                    />
                  </button>
                </div>
                <div class="storyUser">story_User</div>
              </div>
              <div class="storyPlay">
                <div class="buttonBackground">
                  <button class="friendStory">
                    <img
                      class="userPhoto"
                      src="/images/Jongmin/friendstory.JPG"
                      alt="user"
                    />
                  </button>
                </div>
                <div class="storyUser">story_User</div>
              </div>
              <div class="storyPlay">
                <div class="buttonBackground">
                  <button class="friendStory">
                    <img
                      class="userPhoto"
                      src="/images/Jongmin/friendstory.JPG"
                      alt="user"
                    />
                  </button>
                </div>
                <div class="storyUser">story_User</div>
              </div>
              <div class="storyPlay">
                <div class="buttonBackground">
                  <button class="friendStory">
                    <img
                      class="userPhoto"
                      src="/images/Jongmin/friendstory.JPG"
                      alt="user"
                    />
                  </button>
                </div>
                <div class="storyUser">story_User</div>
              </div>
            </div>
            <section class="feeds">
              <div class="feedHeader">
                <div class="feedButton">
                  <div class="feedButtonBackground">
                    <button class="friendFeed">
                      <img
                        class="feedUserPhoto"
                        src="/images/Jongmin/feed profile photo.jpeg"
                        alt="user"
                      />
                    </button>
                  </div>
                </div>
                <div class="idAndLocation">
                  <div class="feedUserId">kevinlee1207</div>
                  <div class="userLocation">Mankato</div>
                </div>
                <button class="threeDots"></button>
              </div>
              <div class="feedContents">
                <img
                  class="feedContentsPhoto"
                  src="/images/Jongmin/feed contents.JPG"
                  alt="feedphoto"
                />
              </div>
              <div class="likeContain">
                <div class="likeHeart">
                  <button class="likeButton">
                    <img
                      onclick="changeHeart()"
                      class="blackHeart"
                      src="/images/Jongmin/instagram black heart.png"
                      alt="Heart"
                    />
                    <img
                      onclick="returnHeart()"
                      class="redHeart"
                      src="/images/Jongmin/instagram red heart.png"
                      alt="LikeHeart"
                    />
                  </button>
                </div>
                <div class="replayContain">
                  <button class="reply">
                    <img
                      class="replyImage"
                      src="/images/Jongmin/reply.png"
                      alt="reply"
                    />
                  </button>
                </div>
                <div class="shareContain">
                  <button class="shareButton">
                    <img
                      class="shareImage"
                      src="/images/Jongmin/share.png"
                      alt="share"
                    />
                  </button>
                </div>
                <div class="saveContain">
                  <button class="saveButton">
                    <img
                      class="saveImage"
                      src="/images/Jongmin/save.png"
                      alt="save"
                    />
                  </button>
                </div>
              </div>
              <div class="mentionLike">
                <div class="mentionId">jongmin_8910</div>
                <div class="Nim">님</div>
                <div class="them">여러 명</div>
                <div class="userLikeU">이 좋아합니다</div>
              </div>
              <div class="userMentionBox">
                <div class="feedIdMention">kevinlee1207</div>
                <div class="userTalking">Home</div>
              </div>
              <div class="showReply">
                <button class="showAllReply">
                  <div class="showReply1">댓글</div>
                  <div class="showReply2">6</div>
                  <div class="showReply3">개 모두 보기</div>
                </button>
                {/* </div>
              <div class="commentArea"></div>
              <div class="feedTime">10시간 전</div>
              <div class="commentInput">
                <button class="emozi">
                  <img
                    class="smile"
                    src="/images/Jongmin/emozi.png"
                    alt="emoticon"
                  />
                </button>
                <input class="write" type="text" />
                <button onclick="summitComment()" class="summit">
                  게시
                </button> */}
              </div>
            </section>
          </div>
          <div class="profileInfo">
            <div class="profilePhotoArea">
              <div class="imageArea"></div>
              <div class="profileDesc">
                <div class="userId">jongmin_8910</div>
                <div class="userName">Jongmin Lee</div>
              </div>
              <button class="change">전환</button>
            </div>
            <div class="recommand">
              <div class="forU">회원님을 위한 추천</div>
              <button class="showAll">모두 보기</button>
            </div>
            <div class="people">
              <div class="person">
                <div class="personPhoto"></div>
                <div class="personInfo">
                  <div class="personName">User_1</div>
                  <div class="followOrNot">회원님을 위한 추천</div>
                </div>
                <button class="followButoon">팔로우</button>
              </div>
              <div class="person">
                <div class="personPhoto"></div>
                <div class="personInfo">
                  <div class="personName">User_1</div>
                  <div class="followOrNot">회원님을 위한 추천</div>
                </div>
                <button class="followButoon">팔로우</button>
              </div>
              <div class="person">
                <div class="personPhoto"></div>
                <div class="personInfo">
                  <div class="personName">User_1</div>
                  <div class="followOrNot">회원님을 위한 추천</div>
                </div>
                <button class="followButoon">팔로우</button>
              </div>
              <div class="person">
                <div class="personPhoto"></div>
                <div class="personInfo">
                  <div class="personName">User_1</div>
                  <div class="followOrNot">회원님을 위한 추천</div>
                </div>
                <button class="followButoon">팔로우</button>
              </div>
              <div class="person">
                <div class="personPhoto"></div>
                <div class="personInfo">
                  <div class="personName">User_1</div>
                  <div class="followOrNot">회원님을 위한 추천</div>
                </div>
                <button class="followButoon">팔로우</button>
              </div>
              <div class="links">
                <div class="allLinks">
                  <a
                    class="infos_main"
                    href="https://about.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    소개
                  </a>
                  <div class="dot">·</div>
                  <a
                    class="infos_main"
                    href="https://help.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    도움말
                  </a>
                  <div class="dot">·</div>
                  <a
                    class="infos_main"
                    href="https://about.instagram.com/blog"
                    target="_blank"
                    rel="noreferrer"
                  >
                    홍보 센터
                  </a>
                  <div class="dot">·</div>
                  <a
                    class="infos_main"
                    href="https://developers.facebook.com/docs/instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    API
                  </a>
                  <div class="dot">·</div>
                  <a
                    class="infos_main"
                    href="https://about.instagram.com/about-us/careers"
                    target="_blank"
                    rel="noreferrer"
                  >
                    채용 정보
                  </a>
                  <div class="dot">·</div>
                  <a
                    class="infos_main"
                    href="https://help.instagram.com/519522125107875"
                    target="_blank"
                    rel="noreferrer"
                  >
                    개인정보처리방침
                  </a>
                  <div class="dot">·</div>
                </div>
                <div class="allLinks">
                  <a
                    class="infos_main"
                    href="https://help.instagram.com/581066165581870"
                    target="_blank"
                    rel="noreferrer"
                  >
                    약관
                  </a>
                  <div class="dot">·</div>
                  <a
                    class="infos_main"
                    href="https://www.instagram.com/explore/locations/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    위치
                  </a>
                  <div class="dot">·</div>
                  <a
                    class="infos_main"
                    href="https://www.instagram.com/directory/profiles/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    인기 계정
                  </a>
                  <div class="dot">·</div>
                  <a
                    class="infos_main"
                    href="https://www.instagram.com/directory/hashtags/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    해시태그
                  </a>
                  <div class="dot">·</div>
                  <div class="languageBox">
                    <select class="language">
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
              <div class="copyright">© 2021 Instagram from Facebook</div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default MainJongmin;
