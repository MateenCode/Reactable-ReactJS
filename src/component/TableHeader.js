import React from "react";
import TableCell from "@material-ui/core/TableCell";

export default function TableHeader(props) {
  return (
    <TableCell className="header_text" onClick={props.handleSort}>
      {props.header}

      {props.sortedBy === props.header && props.order === "asc" ? (
        <span className="p-1">
          <i className="fas fa-arrow-up" />
        </span>
      ) : (
        <span className="p-1">
          <i className="fas fa-arrow-down" />
        </span>
      )}
    </TableCell>
  );
}
