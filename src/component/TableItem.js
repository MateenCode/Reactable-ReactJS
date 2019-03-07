import React, { Component } from "react";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";

export default class TableItem extends Component {
  state = {
    row0: "",
    row1: "",
    row2: "",
    row3: "",
    row4: ""
  };

  inputChangeHandler = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = () => {
    this.props.handleData([
      this.state.row0,
      this.state.row1,
      this.state.row2,
      this.state.row3,
      this.state.row4
    ]);

    this.setState({
      row0: "",
      row1: "",
      row2: "",
      row3: "",
      row4: ""
    });
  };

  render() {
    const { row, editMode, index, selectedIdx, startEditing } = this.props;
    const rowLen = row.length;
    return (
      <React.Fragment>
        {row.map((eachRow, i) => {
          if (rowLen === i + 1) {
            return (
              <React.Fragment key={i}>
                {editMode === true && index === selectedIdx ? (
                  <TableCell align="right">
                    <Input
                      className="input_key"
                      id={`row${i}`}
                      onChange={this.inputChangeHandler}
                    />
                    <IconButton
                      onClick={this.handleSubmit}
                      className="ml-4"
                      aria-label="Filter list"
                    >
                      <i className="fas fa-check" />
                    </IconButton>
                  </TableCell>
                ) : (
                  <TableCell key={i} align="right">
                    {eachRow}
                    <IconButton
                      onClick={startEditing}
                      className="ml-4"
                      aria-label="Filter list"
                    >
                      <i className="fas fa-pen" />
                    </IconButton>
                  </TableCell>
                )}
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={i}>
                {editMode === true && index === selectedIdx ? (
                  <TableCell>
                    <Input
                      className="input_key"
                      id={`row${i}`}
                      onChange={this.inputChangeHandler}
                    />
                  </TableCell>
                ) : (
                  <TableCell> {eachRow} </TableCell>
                )}
              </React.Fragment>
            );
          }
        })}
      </React.Fragment>
    );
  }
}
