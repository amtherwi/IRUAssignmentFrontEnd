import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useIntl } from 'react-intl';
import Logo from '../assets/import-from-excel-512.webp';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    spadding: theme.spacing(4),
    margin: 0,
    padding: 10,
    //maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: '15',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  grid:{
      alignItems: 'center',
      padding: 20,
  }
});

function Header(props) {
  const { classes } = props;
  const intl = useIntl();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={5}>
          <Grid item className={classes.grid}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="Jodi logo" src={Logo} />      
            </ButtonBase>
          </Grid>
          <Grid item xs={5} sm container className={classes.grid}>
            <Grid item xs container direction="column" spacing={5}>
              <Grid item xs>
                <Typography gutterBottom variant="h4">
                {intl.formatMessage({ id: 'title' })}
                </Typography>
                <Typography color="textSecondary" variant="h5">
                {intl.formatMessage({ id: 'description' })}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
