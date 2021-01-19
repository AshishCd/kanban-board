import React, { Fragment } from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { sortArr } from "../actions";
import "./css/App.css";

//importing component
import { Column } from "./index";

function App(props) {
  const { tasksColumn } = props;

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    const {dispatch} = props;
    if (!destination) {
      return;
    }
    dispatch(sortArr(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    ))
  };

  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: "flex" }}>
          {tasksColumn.map((column) => {
            return (
              <Column
                columnId={column.id}
                key={column.id}
                title={column.title}
                cards={column.cards}
              />
            );
          })}
        </div>
      </DragDropContext>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    tasksColumn: state.column,
  };
};

export default connect(mapStateToProps)(App);
