import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "../../style/link-btn.scss";

const Page404 = () => {
  return (
    <div>
      <Helmet>
        <title>Error</title>
        <meta name="description" content="Error page" />
      </Helmet>
      <ErrorMessage />
      <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}>
        Page doesn't exist
      </p>
      <Link className="link-btn" to="/">
        Back to main page
      </Link>
    </div>
  );
};

export default Page404;
