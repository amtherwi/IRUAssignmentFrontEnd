// import React, { useEffect, useState } from "react";
// import Container from "@material-ui/core/Container";
import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch } from 'react-redux';
import { openDialog } from '../store/actions/items.actions';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial'
  },
  value:{
    paddingTop:20,
    textAlign:"center",
    textTransform:"uppercase"
  },
  item:{ 
    textTransform:"uppercase",
  }
});

function Item({ item, count }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
        <Typography className={classes.item} align="center" variant="body2" component="span">
            {item}
          </Typography>

          <Typography className={classes.value} variant="h6" color="textPrimary" component="h3">
            {count} (items) 
          </Typography>
        </CardContent>
        <CardActions>
        <Button 
        color="primary" 
        size="medium"
        onClick={event => dispatch(openDialog(item))}
        >
        More..
        </Button>
      </CardActions>
      </Card>
     
    </div>
  );
}

export default Item;