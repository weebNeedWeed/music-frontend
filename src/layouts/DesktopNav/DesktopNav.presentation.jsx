import useStyles from "./DesktopNav.styles";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import menuItems from "helpers/menuItems";
import clsx from "clsx";
import DesktopPlayer from "components/DesktopPlayer/DesktopPlayer.index";
import DesktopSearch from "components/DesktopSearch/DesktopSearch.index";

function DesktopNavPresentation() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.container}>
      <div className={classes.navList}>
        {menuItems.map((elm, index) => (
          <Link
            className={clsx(
              classes.navItem,
              location.pathname === elm.path && `${classes.navItem}--active`,
            )}
            to={elm.path}
            key={index}
          >
            <span className={`${classes.navItem}__icon`}>
              <elm.icon />
            </span>
            <span className={`${classes.navItem}__text`}>{elm.name}</span>
          </Link>
        ))}
      </div>

      <DesktopSearch />

      <DesktopPlayer />
    </div>
  );
}

export default DesktopNavPresentation;
