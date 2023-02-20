const PostItem = (post) => {
    return `
    <div class="d-flex p-2 border-bottom border-light">
      <div>
          <img
              src=${post.avatarIcon}
              class="wd-avatar-img rounded-circle" />
      </div>
      <div class="wd-margin-left">
          <span>
              <label class="text-white">${post.userName}</label>
              <i class="wd-float-left fa fa-check-circle wd-float-left-side-bar wd-icon-dark-mode pt-1"></i>
              <label class="wd-gray-text">@${post.handle}</label>
              <label class="wd-gray-text">- ${post.time}</label>
          </span>
          <p>${post.body}</p>
       
          <div class="row border border-light rounded" >
          <img src=${post.image} class="border-bottom border-light wd-post-image pt-1 pb-1"/>
          <div class="wd-text-bold wd-font-color-white">
          ${post.cardTitle}
          </div>
          ${
            post.cardDesc
              ? `        <div class="row wd-margin-top" style="margin-left: 2px;">
          ${post.cardDesc}
          </div>`
              : ""
          }
          ${
            post.cardLink
              ? `        <div class="wd-margin-top">
          <i class="fa fa-link wd-icon-grey"><a class="ps-1 wd-hyperlink-grey" href="${post.cardLink}">${post.cardLink}</a></i>
          </div>`
              : ""
          }
          <div class="row wd-margin-top">
              <div class="col-3 wd-navbar"><a class="wd-hyperlink-grey" href="#"><i class="fa fa-comment wd-margin-right"></i>${
                post.numberOfComments
              }</a></div>
              <div class="col-3 wd-navbar"><a class="wd-hyperlink-grey" href="#"><i class="fa fa-retweet wd-margin-right"></i>${
                post.numberOfReposts
              }</a></div>
              <div class="col-3 wd-navbar"><a class="wd-hyperlink-grey" href="#"><i class="fa fa-heart wd-icon wd-margin-right"></i>${
                post.numberOfLikes
              }</a></div>
              <div class="col-3 wd-navbar"><a class="wd-hyperlink-grey" href="#"><i class="fa fa-upload wd-icon wd-margin-right"></i></a></div>
          </div>
      </div>
  
      
      </div>
      </div>
   `;
  };
  export default PostItem;
  
  {
    
  }