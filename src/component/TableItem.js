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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log(this.state);
  };

  render() {
    const {
      row,
      editMode,
      index,
      selectedIdx,
      startEditing,
      stopEditing
    } = this.props;
    const rowLen = row.length;
    return (
      <React.Fragment>
        {row.map((eachRow, i) => {
          // const daState = Object.keys(this.state).filter(state => {
          //   return state === `row${i}`;
          // });

          if (rowLen === i + 1) {
            return (
              <React.Fragment key={i}>
                {editMode === true && index === selectedIdx ? (
                  <TableCell align="right">
                    <Input
                      className="input_key"
                      name={`row${i}`}
                      // value={daState}
                      onChange={this.handleChange}
                    />
                    <IconButton
                      onClick={stopEditing}
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
                      name={`row${i}`}
                      // value={daState}
                      onChange={this.handleChange}
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
