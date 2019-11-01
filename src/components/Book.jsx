import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    height: 140,
  }
});

export default function Book(props) {
  const { title, message } = props;

  const classes = useStyles();

  const onClickUpdate = () => {
    alert('clicked update');
  }

  const onClickDelete = () => {
    alert('clicked delete');
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {message}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button size="small" color="primary" onClick={onClickUpdate}>
          Update
        </Button>
        <Button size="small" color="primary" onClick={onClickDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}