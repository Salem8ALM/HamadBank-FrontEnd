import React from "react";
import ContentLoader from "react-content-loader";

const ProfileCardLoader = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={400}
    viewBox="0 0 300 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Profile Image */}
    <circle cx="150" cy="80" r="50" />
    {/* Username */}
    <rect x="100" y="150" rx="4" ry="4" width="100" height="20" />
    {/* Balance */}
    <rect x="80" y="180" rx="4" ry="4" width="140" height="15" />
    {/* Upload text */}
    <rect x="60" y="210" rx="4" ry="4" width="180" height="10" />
    {/* File Button */}
    <rect x="110" y="230" rx="4" ry="4" width="80" height="20" />
    {/* Save Button */}
    <rect x="110" y="260" rx="4" ry="4" width="80" height="20" />
    {/* Action Buttons */}
    <rect x="80" y="300" rx="4" ry="4" width="60" height="15" />{" "}
    {/* Withdraw */}
    <rect x="160" y="300" rx="4" ry="4" width="60" height="15" />{" "}
    {/* Deposit */}
  </ContentLoader>
);

export default ProfileCardLoader;
