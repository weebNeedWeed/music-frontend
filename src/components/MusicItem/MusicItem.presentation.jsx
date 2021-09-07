import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import useStyles from "./MusicItem.styles";

function MusicItemPresentation() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://i.ytimg.com/vi/sqljo295DkE/mqdefault.jpg"
        component="span"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Porter Robinson & Madeon - Shelter (Official Video) (Short Film with
            A-1 Pictures & Crunchyroll)
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            https://www.youtube.com/watch?v=fuFxw4BKC7A
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">
            {"Play"}
          </Button>
          <Button size="small" color="secondary">
            {"Add to list"}
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default MusicItemPresentation;
