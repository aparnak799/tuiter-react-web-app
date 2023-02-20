import PostItem from "./PostItem.js";

const posts = [
  {
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
    numberOfLikes: "37.5K",
    numberOfReposts: "3.5K",
    numberOfComments: "4.2K",
    avatarIcon:
      "https://pbs.twimg.com/media/FAWRiSrUcAQgmYY.jpg",
  },
  {
    userName: "New York Post",
    handle: "nypost",
    time: "2h",
    body: "Grimes seen reading Karl Marx split with world's richest man Elon Musk trib.al/nx2Gfaq",
    image: "https://pbs.twimg.com/media/FAuW2GlXIAIOBN7.jpg",
    cardTitle: "",
    cardDesc: "",
    cardLink: "",
    numberOfLikes: "4K",
    numberOfReposts: "2.4K",
    numberOfComments: "965K",
    avatarIcon:
      "https://pbs.twimg.com/profile_images/966372680306868224/60wfGe9e_400x400.jpg",
  },
];

const PostList = () => {
  return `
        <ul class="list-group wd-font-size">
            ${posts
              .map((post) => {
                return PostItem(post);
              })
              .join("")}
        </ul>
    `;
};
export default PostList;