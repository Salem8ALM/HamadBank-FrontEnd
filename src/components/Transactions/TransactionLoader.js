import React from "react";
import ContentLoader from "react-content-loader";

const TransactionLoader = () => {
  return (
    <div>
      <FadingLoaderCard1 />
      <FadingLoaderCard2 />
      <FadingLoaderCard3 />
      <FadingLoaderCard4 />
      <FadingLoaderCard5 />
    </div>
  );
};

const FadingLoaderCard1 = () => {
  return (
    <ContentLoader
      width={300}
      height={40}
      backgroundColor="#ababab"
      foregroundColor="#fafafa"
      className=" w-full"
    >
      <rect x="0" y="15" rx="5" ry="5" width="800" height="15" />
    </ContentLoader>
  );
};

const FadingLoaderCard2 = () => {
  return (
    <ContentLoader
      width={300}
      height={40}
      backgroundColor="#bfbfbf"
      foregroundColor="#fafafa"
      className=" w-full"
    >
      <rect x="0" y="15" rx="5" ry="5" width="800" height="15" />
    </ContentLoader>
  );
};

const FadingLoaderCard3 = () => {
  return (
    <ContentLoader
      width={300}
      height={40}
      backgroundColor="#dadada"
      foregroundColor="#fafafa"
      className=" w-full"
    >
      <rect x="0" y="15" rx="5" ry="5" width="800" height="15" />
    </ContentLoader>
  );
};

const FadingLoaderCard4 = () => {
  return (
    <ContentLoader
      width={300}
      height={40}
      backgroundColor="#ececec"
      foregroundColor="#fafafa"
      className=" w-full"
    >
      <rect x="0" y="15" rx="5" ry="5" width="800" height="15" />
    </ContentLoader>
  );
};

const FadingLoaderCard5 = () => {
  return (
    <ContentLoader
      width={300}
      height={40}
      backgroundColor="#f7f7f7"
      foregroundColor="#fafafa"
      className=" w-full"
    >
      <rect x="0" y="15" rx="5" ry="5" width="800" height="15" />
    </ContentLoader>
  );
};

export default TransactionLoader;
