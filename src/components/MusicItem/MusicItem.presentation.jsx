import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import useStyles from "./MusicItem.styles";

function MusicItemPresentation(props) {
  const classes = useStyles();
  const { imageUrl, name, uploaderName, youtubeUrl, handlePlay, actionList } =
    props;

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image={imageUrl} component="span" />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h6">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {uploaderName}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {youtubeUrl}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary" onClick={handlePlay}>
            {"Play"}
          </Button>
          {actionList.map((elm, index) => (
            <Button
              key={index}
              onClick={elm.handleClick}
              size="small"
              color="secondary"
            >
              {elm.title}
            </Button>
          ))}
        </CardActions>
      </div>
    </Card>
  );
}

export default MusicItemPresentation;
