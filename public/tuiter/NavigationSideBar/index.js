const NavigationSidebar = (active) => {
   return `
    <div class="list-group">
     <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i>
     </a>
     <a class="list-group-item ${
       active.toLowerCase() === "home" ? "active" : ""
     }" href="../HomeScreen/index.html">
         <i class="fas fa-home wd-mr-1" ></i>
        <span class="d-none d-sm-none d-md-none d-lg-inline">Home</span>
     </a>
     <a class="list-group-item ${
       active.toLowerCase() === "explore" ? "active" : ""
     }" href="../explore/index.html">
         <i class="fas fa-hashtag wd-mr-1"></i>  
        <span class="d-none d-sm-none d-md-none d-lg-inline">Explore</span>
     </a>
     <a class="list-group-item" href="/">
         <i class="fas fa-bell wd-mr-1"></i>
        <span class="d-none d-sm-none d-md-none d-lg-inline">Notifications</span>
     </a>
     <a class="list-group-item" href="/">
     <i class="fas fa-envelope wd-mr-1"></i>
        <span class="d-none d-sm-none d-md-none d-lg-inline">Messages</span>
     </a>
     <a class="list-group-item" href="/">
     <i class="fas fa-bookmark wd-mr-1"></i>
        <span class="d-none d-sm-none d-md-none d-lg-inline">Bookmarks</span>
     </a>
     <a class="list-group-item" href="/">
     <i class="fas fa-list wd-mr-1"></i>
        <span class="d-none d-sm-none d-md-none d-lg-inline">Lists</span>
     </a>
     <a class="list-group-item" href="/">
     <i class="fas fa-user wd-mr-1"></i>
        <span class="d-none d-sm-none d-md-none d-lg-inline">Profile</span>
     </a>
     <a class="list-group-item" href="/">
     <i class="fas fa-ellipsis-h wd-mr-1"></i>
        <span class="d-none d-sm-none d-md-none d-lg-inline">More</span>
     </a>
    </div>
    <div class="d-grid mt-2">
      <a href="tweet.html"
         class="btn btn-primary btn-block rounded-pill">
         Tweet</a>
    </div>
  `;
 };
 export default NavigationSidebar;
 
 $(NavigationSidebar);