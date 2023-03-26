import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
            <div class="d-flex mb-2">
                       <!-- search field and cog -->
                       <input type="text" class="wd-search-input" placeholder="Search Tuiter"/>
                       <a href="explore-settings.html">
                       <i class="fa fa-cog fa-2x wd-text-white align-middle" style="margin-left: 25px; background: black; color: #4E9ED1 !important;"></i> 
                      </a>
           </div>
           <ul class="nav mb-2 border-bottom border-light">
                      <!-- tabs -->
                      <li class="wd-nav-item">
                      <a class="nav-link wd-selected" href="for-you.html">For you</a>
                    </li>
                    <li class="wd-nav-item">
                      <a class="nav-link wd-gray-text" href="trending.html">Trending</a>
                    </li>
                    <li class="wd-nav-item">
                      <a class="nav-link wd-gray-text" href="news.html">News</a>
                    </li>
                    <li class="wd-nav-item">
                      <a class="nav-link wd-gray-text" href="sports.html">Sports</a>
                    </li>
                    <li class="wd-nav-item">
                      <a class="nav-link wd-gray-text" href="entertainment.html">Entertainment</a>
                    </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="wd-container">
           <img class="wd-main-content-img" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" />
           <div class="wd-bottom-left wd-main-content-img-text">SpaceX's Starship</div>
         </div>
           ${PostSummaryList()}
    `;
};
export default ExploreComponent;

$(ExploreComponent);