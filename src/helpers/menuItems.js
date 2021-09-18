import DashboardIcon from "@material-ui/icons/Dashboard";
import InfoIcon from "@material-ui/icons/Info";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";

const menuItems = [
  {
    path: "/",
    name: "Discover",
    icon: DashboardIcon,
    displayWhenLoggedIn: true,
    defaultDisplay: true,
  },

  {
    path: "/playlist",
    name: "My playlist",
    icon: QueueMusicIcon,
    displayWhenLoggedIn: true,
    defaultDisplay: false,
  },
  {
    path: "/about",
    name: "About",
    icon: InfoIcon,
    displayWhenLoggedIn: true,
    defaultDisplay: true,
  },
  {
    path: "/logout",
    name: "Logout",
    icon: MeetingRoomIcon,
    displayWhenLoggedIn: true,
    defaultDisplay: false,
  },
];

export default menuItems;
