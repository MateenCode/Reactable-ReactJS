import React, { Component } from "react";
import { Consumer } from "../context/context";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// components
import TableItem from "./TableItem";
import TableHeader from "./TableHeader";

export default class Tables extends Component {
  state = {
    editMode: false,
    selectedIdx: -1
  };

  handleSort = (dispatch, key) => {
    dispatch({
      type: "SORT_TABLE",
      payload: key
    });
  };

  startEditing = i => {
    this.setState({
      editMode: true,
      selectedIdx: i
    });
  };

  stopEditing = () => {
    this.setState({
      editMode: false,
      selectedIdx: -1
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const {
            columnHeaders,
            rows,
            query,
            sortedBy,
            order,
            dispatch
          } = value;
          const newRows =
            query === "all" ? rows : rows.filter(row => row[0].includes(query));

          const sortedRows =
            sortedBy === ""
              ? newRows
              : newRows.sort((a, b) => {
                  const valueA = a[columnHeaders.indexOf(sortedBy)];
                  const valueB = b[columnHeaders.indexOf(sortedBy)];
                  let sortedValue = 0;
                  if (valueA < valueB) {
                    sortedValue = -1;
                  } else if (valueA > valueB) {
                    sortedValue = 1;
                  }
                  if (order === "desc") {
                    sortedValue *= -1; // if descending order, turn around the sort order
                  }
                  return sortedValue;
                });
          return (
            <React.Fragment>
              {newRows === undefined ||
                (newRows.length === 0 && (
                  <p className="text-center text-warning">
                    No records matched the specified query
                  </p>
                ))}
              <Table>
                <TableHead>
                  <TableRow>
                    {columnHeaders.map((header, i) => (
                      <TableHeader
                        header={header}
                        key={`th-${i}`}
                        handleSort={this.handleSort.bind(
                          this,
                          dispatch,
                          header
                        )}
                        order={order}
                        sortedBy={sortedBy}
                      />
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedRows.map((row, i) => (
                    <TableRow key={`thc-${i}`}>
                      <TableItem
                        row={row}
                        index={i}
                        editMode={this.state.editMode}
                        selectedIdx={this.state.selectedIdx}
                        startEditing={this.startEditing.bind(this, i)}
                        stopEditing={this.stopEditing}
                      />
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
