import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class FormDialog extends Component {
  state = {
    firstRow: "",
    secondRow: "",
    thirdRow: "",
    fourthRow: "",
    lastRow: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    const { firstRow, secondRow, thirdRow, fourthRow, lastRow } = this.state;
    this.props.updateHeader([
      firstRow,
      secondRow,
      thirdRow,
      fourthRow,
      lastRow
    ]);
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Column Headers</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter values for each row to update header
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Header"
            fullWidth
            name="firstRow"
            value={this.state.firstRow}
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Row"
            fullWidth
            name="secondRow"
            value={this.state.secondRow}
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Second Row"
            fullWidth
            name="thirdRow"
            value={this.state.thirdRow}
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Third Row"
            fullWidth
            name="fourthRow"
            value={this.state.fourthRow}
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Row"
            fullWidth
            name="lastRow"
            value={this.state.lastRow}
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
