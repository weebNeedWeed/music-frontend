const styles = {
  root: {
    color: "#F51E38",
    height: "6px",
  },
  thumb: {
    height: "0",
    width: "0",
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  track: {
    height: "6px",
    borderRadius: "1px",
  },
  rail: {
    height: "6px",
    borderRadius: "1px",
  },
};

export default styles;
