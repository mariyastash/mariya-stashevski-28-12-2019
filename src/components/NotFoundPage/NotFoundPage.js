import React from "react";
import { Link } from "react-router-dom";

import classes from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>404</div>
      <p>Oops! Something is wrong.</p>
      <p>
        <Link to="/" className={classes.linkTo}>
          Go to Home
        </Link>
      </p>
    </div>
  );
};
export default NotFoundPage;
