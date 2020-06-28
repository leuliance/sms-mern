import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Typography, Link } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import React from "react";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const Breadcrumb = () => {
  return (
    <div
      style={{
        padding: "10px",
        paddingLeft: "40px",
        backgroundColor: "#f3f3f3",
      }}
    >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link color="inherit" href="/" onClick={handleClick}>
          Material-UI
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
    </div>
  );
};
export default Breadcrumb;
