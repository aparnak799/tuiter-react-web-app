import React from "react";
const PostItem = ({
  post = {
    userName: "Elon Musk",
    handle: "elonmusk",
    time: "23h",
    body: "Amazing show about @Inspiration4x mission!",
    image: "https://i.ytimg.com/vi/_nwSmOEiDls/maxresdefault.jpg",
    cardTitle:
      "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    cardDesc:
      "From training to launching to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
    cardLink: "netflix.com",
    numberOfLikes: "100K",
    numberOfReposts: "5K",
    numberOfComments: "42.9K",
    avatarIcon:
      "https://image.cnbcfm.com/api/v1/image/107083077-1656593419933-gettyimages-1395062617-t_w16437_4934a878-972d-4bea-b6ef-b61f4ceeb787.jpeg?v=1665592117&w=929&h=523",
  },
}) => {
  return (
    <div className="d-flex p-2 border rounded">
      <div>
        <img
          src={`${post.avatarIcon}`}
          className="wd-avatar-img rounded-circle"
          alt="avatar"
        />
      </div>
      <div className="wd-margin-left">
        <span>
          <label className="text-dark">{post.userName}</label>
          <i className="bi bi-patch-check-fill px-1"></i>
          <label className="wd-gray-text">@{post.handle}</label>
          <label className="wd-gray-text"> - {post.time}</label>
        </span>
        <p>{post.body}</p>

        <div className="row border-thin border-grey border-solid">
          <img
            src={`${post.image}`}
            className="wd-post-image pt-1 pb-1"
            alt="banner"
          />
          <div className="wd-text-bold wd-font-color-white">
            {post.cardTitle}
          </div>
          {post.cardDesc ? (
            <div className="row wd-margin-top" style={{ marginLeft: "2px" }}>
              {post.cardDesc}
            </div>
          ) : (
            ""
          )}

          {post.cardLink ? (
            <div className="wd-margin-top">
              <i className="bi bi-link-45deg">
                <a className="ps-1 wd-hyperlink-grey" href={`${post.cardLink}`}>
                  {post.cardLink}
                </a>
              </i>
            </div>
          ) : (
            ""
          )}
          <div className="row wd-margin-top">
            <div className="col-3 wd-navbar">
              <a className="wd-hyperlink-grey" href="/tuiter/home">
                <i className="bi bi-chat-fill wd-margin-right"></i>
                {post.numberOfComments}
              </a>
            </div>
            <div className="col-3 wd-navbar">
              <a className="wd-hyperlink-grey" href="/tuiter/home">
                <i className="bi bi-arrow-up-left-square wd-margin-right"></i>
                {post.numberOfReposts}
              </a>
            </div>
            <div className="col-3 wd-navbar">
              <a className="wd-hyperlink-grey" href="/tuiter/home">
                <i className="bi bi-heart wd-icon wd-margin-right"></i>
                {post.numberOfLikes}
              </a>
            </div>
            <div className="col-3 wd-navbar">
              <a className="wd-hyperlink-grey" href="/tuiter/home">
                <i className="bi bi-box-arrow-up wd-icon wd-margin-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostItem;