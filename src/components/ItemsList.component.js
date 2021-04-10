import React from 'react';
import Item from './Item.component'
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Scroll from './Scroll.component';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    // spadding: theme.spacing.unit * 4,
    marginTop: 10,
    padding: 30,
    //maxWidth: 500,
  },
    card: {
      maxWidth: 345,
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
      backgroundColor: "#fafafa",
    },
    media: {
      height: 300,
    },
  });

const ItemList = ({ items }) => {
  const classes = useStyles();
  //console.log("inside list;", items);

    return (
      <div className={classes.root}>
      <Scroll>
      <Paper className={classes.paper}>
        <Container>  
        <Grid container spacing={3}>
          {items.length>0? items.map((item, i) => (
            <Grid item xs={12} sm={4} key={i}>
                <Item 
                    key= {i}
                    item = {items[i].name} 
                    count={items[i].count}
                />
            </Grid> 
            )
          )
          : 
          <Typography>There is No Item... </Typography>
          }
        </Grid>
      </Container>
      </Paper>
      </Scroll>
    </div>
    )
}
export default ItemList;