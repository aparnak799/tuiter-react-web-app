import React from "react";

const BannerSection = ({ profile }) => {
  return (
    <div>
      <img className="w-100" src={profile.bannerPicture} alt="Banner" />
    </div>
  );
};

export default BannerSection;