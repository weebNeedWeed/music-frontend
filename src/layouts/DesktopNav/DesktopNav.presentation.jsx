import useStyles from "./DesktopNav.styles";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import menuItems from "helpers/menuItems";
import clsx from "clsx";
import DesktopPlayer from "components/DesktopPlayer/DesktopPlayer.index";
import DesktopSearch from "components/DesktopSearch/DesktopSearch.index";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";

function DesktopNavPresentation({ loggedIn }) {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.container}>
      <div className={classes.navList}>
        {menuItems.map((elm, index) => {
          if (loggedIn && elm.displayWhenLoggedIn) {
            return (
              <Link
                className={clsx(
                  classes.navItem,
                  location.pathname === elm.path &&
                    `${classes.navItem}--active`,
                )}
                to={elm.path}
                key={index}
              >
                <span className={`${classes.navItem}__icon`}>
                  <elm.icon />
                </span>
                <span className={`${classes.navItem}__text`}>{elm.name}</span>
              </Link>
            );
          } else if (!loggedIn && elm.defaultDisplay) {
            return (
              <Link
                className={clsx(
                  classes.navItem,
                  location.pathname === elm.path &&
                    `${classes.navItem}--active`,
                )}
                to={elm.path}
                key={index}
              >
                <span className={`${classes.navItem}__icon`}>
                  <elm.icon />
                </span>
                <span className={`${classes.navItem}__text`}>{elm.name}</span>
              </Link>
            );
          }
        })}
        <div className={classes.credit}>
          <MusicVideoIcon
            className={classes.cIcon}
            style={{ fontSize: "40px" }}
          />
        </div>
      </div>

      <DesktopSearch />

      <DesktopPlayer />
    </div>
  );
}

export default DesktopNavPresentation;
