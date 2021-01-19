import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Card = ({
  cardTitle,
  priority,
  taskId,
  timeLapse,
  categories,
  commentsCount,
  linkCount,
  cardId,
  index,
}) => {
  return (
    <Draggable draggableId={String(cardId)} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <div className="card-wrapper">
          <div className="ticket-info">
            <div>
              <span
                className={`ticket-type ${
                  priority.toLowerCase() === "normal"
                    ? "green"
                    : priority.toLowerCase() === "urgent"
                    ? "red"
                    : priority.toLowerCase() === "low"
                    ? "lightBlue"
                    : "yellow"
                }`}
              >
                {priority}
              </span>
              <span className="ticket-id">{`#${taskId}`}</span>
            </div>
            <span className="ticket-time">{`${timeLapse} ${
              timeLapse > 1 ? "days" : "day"
            } ago`}</span>
          </div>
          <div className="card-title">
            <div>{cardTitle}</div>
            {categories.map((cat, index) => {
              return <span key={index}>{cat}</span>;
            })}
          </div>
          <div className="comment-wrapper">
            <div className="ticket-comments">
              <div>
                {" "}
                <span>
                  <i className="fas fa-comments" style={{ marginRight: 8 }}></i>
                  {`${commentsCount}`}
                </span>
                <span>
                  <i className="fas fa-link" style={{ marginRight: 8 }}></i>
                  {`${linkCount}`}
                </span>
              </div>
              <div>
                <span className="ticket-assign-user">
                  <i className="fas fa-plus-circle"></i>
                </span>
                <span className="ticket-assign-user">
                  <i className="far fa-user-circle"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
