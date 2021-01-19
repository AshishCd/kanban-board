import ActionTypes from "../actions";

export const addTask = (
  columnId,
  title,
  category,
  priority,
  taskId,
  daysAgo
) => {
  return {
    type: ActionTypes.ADD_TASK,
    payLoad: { columnId, title, category, priority, taskId, daysAgo },
  };
};

export const sortArr = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId
) => {
  return {
    type: ActionTypes.DRAG_ARR,
    payLoad: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
    },
  };
};
