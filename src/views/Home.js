import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ImportFile from '../components/ImportFile.component'
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: 700,
  },
  paper: {
    // spadding: theme.spacing.unit * 4,
    marginTop: 10,
    padding: 30,
    height: 600,
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
function Home(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Container>
          <Typography color="textPrimary" gutterBottom variant="h3">
            WELCOME..{" "}
          </Typography>
          <Grid container spacing="4" className="flex flex-row">
            <Grid item>
              <Typography color="textSecondary" gutterBottom variant="h5">
                This Web App build for Development Test for Vison Realization
                Office (VRO) in Ministry of Justice.
              </Typography>
              <Typography>
                Import Excel file to transform data into Sql Server db and
                phisycal Json file.
              </Typography>
              
            </Grid>
            <Grid item>
            <ImportFile />
            </Grid>
            <Grid>
              
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  );
}
Home.propTypes = {};
export default Home;
