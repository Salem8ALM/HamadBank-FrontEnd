import React from "react";
import ContentLoader from "react-content-loader";

const UserCardLoader = () => (
  <ContentLoader
    speed={2}
    width={200}
    height={250}
    viewBox="0 0 200 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="100" cy="60" r="60" /> {/* Circular loader for profile image */}
    <rect x="35" y="130" rx="4" ry="4" width="130" height="15" />{" "}
    {/* Username */}
    <rect x="50" y="160" rx="3" ry="3" width="100" height="10" />{" "}
    {/* Balance */}
    <rect x="65" y="190" rx="5" ry="5" width="70" height="20" />{" "}
    {/* Transfer button */}
  </ContentLoader>
);

export default UserCardLoader;
