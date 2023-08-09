import React from "react";
import { Helmet } from "react-helmet";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";

const ComicsPage = () => {
  return (
    <>
      <Helmet>
        <title>Marvel comics</title>
        <meta name="description" content="Marvel comics page" />
      </Helmet>
      <AppBanner />
      <ComicsList />
    </>
  );
};

export default ComicsPage;
