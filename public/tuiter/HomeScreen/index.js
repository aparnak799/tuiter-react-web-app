import NavigationSidebar from "../NavigationSideBar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

function homeComponent() {
  $("#wd-home").append(`
        <!-- <h2>Explore</h2> -->
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2 border-bottom">
         <!-- <h3>NavigationSidebar</h3> -->
         ${NavigationSidebar("Home")}
        </div>
        <div class="col-10 col-lg-7 col-xl-6">
         <!-- <h3>ExploreComponent</h3> -->
         ${PostList()}
        </div>
        <div class="wd-suggestions-bg d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 rounded h-100">
         <!-- <h3>WhoToFollowList </h3> -->
         ${PostSummaryList()}
        </div>
       </div>

    `);
}

$(homeComponent);