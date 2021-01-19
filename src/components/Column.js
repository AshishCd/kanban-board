import React from "react";
import { Droppable } from "react-beautiful-dnd";

//importing component
import { Card, ActionButton } from "./index";

const Column = ({ title, cards, columnId }) => {
  return (
    <Droppable droppableId={String(columnId)}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef} className="column-wrapper">
          <div className="column-title">
            {title}
            <i className="fas fa-ellipsis-h"></i>
          </div>
          {cards.length ? cards.map((card, index) => {
            return (
              <Card
                key={card.id}
                index={index}
                cardId={card.id}
                cardTitle={card.cardTitle}
                priority={card.priority}
                taskId={card.taskId}
                timeLapse={card.timeLapse}
                categories={card.categories}
                commentsCount={card.commentsCount}
                linkCount={card.linkCount}
              />
            );
          }) : (
            <div className="empty-column">
              Noting in Task Column, add new task or drag/drop cards
            </div>
          )}
          <ActionButton columnId={columnId} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Column;
