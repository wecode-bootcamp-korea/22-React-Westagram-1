import React from 'react';
import Comment from './comment';
import '../Components/feed.scss';

class Feed extends React.Component {
  render() {
    return (
      <section className="feeds">
        <div className="feedHeader">
          <div className="feedButton">
            <div className="feedButtonBackground">
              <button className="friendFeed">
                <img
                  className="feedUserPhoto"
                  src="/images/Jongmin/feed profile photo.jpeg"
                  alt="user"
                />
              </button>
            </div>
          </div>
          <div className="idAndLocation">
            <div className="feedUserId">{this.props.id}</div>
            <div className="userLocation">{this.props.location}</div>
          </div>
          <button className="threeDots"></button>
        </div>
        <div className="feedContents">
          <img class="feedContentsPhoto" src={this.props.img} alt="feedphoto" />
        </div>
        <div className="likeContain">
          <div className="likeHeart">
            <button className="likeButton">
              <img
                onclick="changeHeart()"
                className="blackHeart"
                src="/images/Jongmin/instagramBlackHeart.png"
                alt="Heart"
              />
              <img
                onclick="returnHeart()"
                className="redHeart"
                src="/images/Jongmin/instagramRedHeart.png"
                alt="LikeHeart"
              />
            </button>
          </div>
          <div className="replayContain">
            <button className="reply">
              <img
                className="replyImage"
                src="/images/Jongmin/reply.png"
                alt="reply"
              />
            </button>
          </div>
          <div className="shareContain">
            <button className="shareButton">
              <img
                className="shareImage"
                src="/images/Jongmin/share.png"
                alt="share"
              />
            </button>
          </div>
          <div className="saveContain">
            <button className="saveButton">
              <img
                className="saveImage"
                src="/images/Jongmin/save.png"
                alt="save"
              />
            </button>
          </div>
        </div>
        <div className="mentionLike">
          <div className="mentionId">{this.props.likeId}</div>
          <div className="Nim">님</div>
          <div className="them">여러 명</div>
          <div className="userLikeU">이 좋아합니다</div>
        </div>
        <div className="userMentionBox">
          <div className="feedIdMention">{this.props.id}</div>
          <div className="userTalking">{this.props.mention}</div>
        </div>
        <div className="showReply">
          <button className="showAllReply">
            <div className="showReply1">댓글</div>
            <div className="showReply2">6</div>
            <div className="showReply3">개 모두 보기</div>
          </button>
        </div>
        <Comment />
      </section>
    );
  }
}

export default Feed;
