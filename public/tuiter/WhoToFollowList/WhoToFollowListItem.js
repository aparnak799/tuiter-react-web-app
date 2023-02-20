function WhoToFollowListItem(item) {
    return `
    <div class="px-2 py-1">
    <span class="d-flex my-3">
      <div class="wd-flex-1">
        <img
          src=${item.avatarIcon}
          class="wd-avatar-img rounded-circle" />
      </div>
      <div class="d-flex flex-column ml-4 wd-flex-2">
        <span class="wd-bold text-white">${item.userName}
        <i class="wd-float-left fa fa-check-circle wd-float-left-side-bar wd-icon-dark-mode pt-1"></i></span>
        <span class="wd-gray-text">@${item.handle}</span>
      </div>
      <button type="button" class="wd-follow-button wd-flex-1 btn btn-primary rounded-pill"><span class="text-white">Follow</span></button>
    </span>
  </div>
      `;
  }
  
  export default WhoToFollowListItem;
  
  $(WhoToFollowListItem);