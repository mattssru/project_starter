import React from "react";
import { HomeLayout } from "components/layouts/HomeLayout";
import { SectionBanner } from "components/homepage";

const IndexPage = () => {
  const rendertemplate = () => {
    return (
      <>
        <SectionBanner />
      </>
    );
  };
  return (
    <>
      <HomeLayout>{rendertemplate()}</HomeLayout>
    </>
  );
};

export default IndexPage;
