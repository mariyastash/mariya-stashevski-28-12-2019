import React, { useState } from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import classes from "./Layout.module.css";

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  return (
    <React.Fragment>
      <Toolbar
        drawerToggleClicked={() => setShowSideDrawer(!showSideDrawer)}
      ></Toolbar>
      <SideDrawer
        open={showSideDrawer}
        closed={() => setShowSideDrawer(false)}
      ></SideDrawer>
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
