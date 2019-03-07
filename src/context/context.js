import React, { Component } from "react";

const Context = React.createContext();

const invertDirection = {
  asc: "desc",
  desc: "asc"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "QUERY_SEARCH":
      return {
        ...state,
        query: action.payload
      };
    case "UPDATE_HEADER":
      return {
        ...state,
        columnHeaders: action.payload
      };
    case "SORT_TABLE":
      return {
        ...state,
        sortedBy: action.payload,
        order:
          state.sortedBy === action.payload
            ? invertDirection[state.order]
            : "asc"
      };
    case "UPDATE_ROW":
      return {
        ...state,
        rows: state.rows.map((eachRow, i) => {
          return i === action.payload.index
            ? (eachRow = action.payload.row)
            : eachRow;
        })
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    columnHeaders: ["Meat", "Protein", "Calories", "Carbohydrates", "Fat"],
    rows: [
      ["chicken breast", "25", "200", "37", "8"],
      ["fried chicken", "45", "450", "21", "16"],
      ["baked fish", "15", "250", "30", "9"]
    ],
    sortedBy: "",
    order: "desc",
    query: "all",
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
