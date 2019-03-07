import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import { Consumer } from "../../context/context";

import FormDialog from "./FormDialog";

export default class Header extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  updateHeader = (dispatch, headerValues) => {
    dispatch({
      type: "UPDATE_HEADER",
      payload: headerValues
    });
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <React.Fragment>
              <FormDialog
                open={this.state.open}
                handleClose={this.handleClose}
                updateHeader={this.updateHeader.bind(this, dispatch)}
              />
              <span className="h3 ml-4 text-muted">ReactTable</span>
              <span className="float-right">
                <IconButton
                  aria-label="Filter list"
                  onClick={this.handleClickOpen}
                >
                  <i className="fas fa-pen" />
                </IconButton>
              </span>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
