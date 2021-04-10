import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { closeDialog } from "../store/actions/items.actions";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import ItemsService from "../services/items.service";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const styles = (theme) => ({
  root: {
    display: "flex",
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(2),
    top: theme.spacing(2),
    color: theme.palette.grey[500],
  },
  td: {
    textalign:"center"
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children} - items details</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const ItemDetails = ({ item, open }) => {
  const [items, setItems] = useState([]);

  const dispatch = useDispatch();

  const getItemValues = (item) => {
    console.log("1", item);
    ItemsService.getItemDetails(item).then((response) => {
      console.log("res", response.data.data);
      setItems(response.data.data);
    });
  };

  useEffect(() => {
    getItemValues(item);
  }, [item]);

  useEffect(() => {
    return () => {
      setItems([]);
      console.log("cleaned up");
    };
  }, [item]);

  const handleClose = () => {
    dispatch(closeDialog());
  };
  const renderItems = (item, index) => {
    return (
      <Tr key={index}>
        <Td style={{textAlign:"center"}}>{item.description}</Td>
        <Td style={{textAlign:"center"}}>{item.price}</Td>
        <Td style={{textAlign:"center"}}>{item.discountPrice}</Td>
        <Td style={{textAlign:"center"}}>{item.q1}</Td>
        <Td style={{textAlign:"center"}}>{item.size}</Td>
        <Td style={{textAlign:"center"}}>{item.color}</Td>
      </Tr>
    );
  };

  return (
    <div>
      <Dialog
        fullScreen={false}
        fullWidth={true}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {item}
        </DialogTitle>
        <DialogContent dividers>
          <Grid>
            <Table>
              <Thead>
                <Tr>
                  <Th>Description</Th>
                  <Th>Price</Th>
                  <Th>Discount Price</Th>
                  <Th>Item for</Th>
                  <Th>Size</Th>
                  <Th>Color</Th>
                </Tr>
              </Thead>
              <Tbody>{items.map(renderItems)}</Tbody>
            </Table>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ItemDetails;
