import React, { Component } from "react";
import { Consumer } from "../../context/context";
import Paper from "@material-ui/core/Paper";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

export default class Search extends Component {
  state = {
    text: ""
  };

  handleClose = () => {
    this.setState({ error: !this.state.error });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (dispatch, event) => {
    event.preventDefault();
    dispatch({
      type: "QUERY_SEARCH",
      payload: this.state.text
    });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <Paper>
              <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                <InputGroup>
                  <Input
                    placeholder="Search..."
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                  <InputGroupAddon addonType="append">
                    <Button onClick={this.handleSubmit.bind(this, dispatch)}>
                      <i className="fas fa-search" />
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </form>
            </Paper>
          );
        }}
      </Consumer>
    );
  }
}
