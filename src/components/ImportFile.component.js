import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Box, Typography, Button, Grid, withStyles } from "@material-ui/core";

import ImportDataService from "../services/import-file.service";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "#EEEEEE",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      isError: false,
      fileInfos: [],
    };
  }

  // componentDidMount() {
  //   ImportDataService.getFiles().then((response) => {
  //     this.setState({
  //       fileInfos: response.data,
  //     });
  //   });
  // }

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
    });
  }

  upload() {
    let currentFile = this.state.selectedFiles[0];

    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

    ImportDataService.import(currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.msg,
          isError: false,
        });
        return;
      })
 
    this.setState({
      selectedFiles: undefined,
    });
  }

  render() {
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
      fileInfos,
      isError,
    } = this.state;

    return (
      <React.Fragment>
        <Grid container spacing={3} className="flex flex-row">
          <Grid
            item
            xs={12}
            className="flex flex-row mb-12 shadow-outline"
          ></Grid>
          <Grid item
            xs={12}
            className="flex flex-row mb-12 shadow-outline">
{currentFile && (
              <Box className="mb25" display="flex" alignItems="center">
                <Box width="100%" mr={1}>
                  <BorderLinearProgress
                    variant="determinate"
                    value={progress}
                  />
                </Box>
                <Box minWidth={35}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                  >{`${progress}%`}</Typography>
                </Box>
              </Box>
            )}

          </Grid>
            
            <label htmlFor="btn-upload">
              <input
                id="btn-upload"
                name="btn-upload"
                style={{ display: "none" }}
                type="file"
                onChange={this.selectFile}
              />
              <Button
                className="btn-choose"
                variant="outlined"
                component="span"
              >
                Choose excel file to import
              </Button>
            </label>
            <Grid item
            xs={12}
            className="flex flex-row mb-12 shadow-outline">
     
            </Grid>
            <Grid item xs={12} className='mr-10'>
            {selectedFiles && selectedFiles.length > 0
                ? <Typography className='flex flex-full pr-12 pt-12 shadow-outline'>Selected file: {selectedFiles[0].name}</Typography>
                : null}
            </Grid>
            <Grid item xs={12} className='mr-10'>
            <Button
              className="btn-upload"
              color="primary"
              variant="contained"
              component="span"
              disabled={!selectedFiles}
              onClick={this.upload}
            >
              Upload
            </Button>
            </Grid>

            <Typography
              variant="subtitle2"
              className={`upload-message ${isError ? "error" : ""}`}
            >
              {message}
            </Typography>
          
        </Grid>
      </React.Fragment>
    );
  }
}
