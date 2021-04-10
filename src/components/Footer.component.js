import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { FaHeart } from "react-icons/fa";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  
  grid: {
    alignItems: "center",
    padding: 0,
  },
});

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Grid container spacing={5}>
          <Grid item className={classes.grid}>
            <>
              <small>
                © 2021 made with <FaHeart style={{ color: "red" }} /> by -{" "}
                Abdurrahman AlTherwi
              </small>
              <br />
            </>
          </Grid>
        </Grid>
    </div>
  );
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
