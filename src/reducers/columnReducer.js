import CardActions from "../actions";

let cardId = 10;

const initialState = [
  {
    title: "New Tasks",
    id: `column-${0}`,
    cards: [
      {
        id: `card-${0}`,
        cardTitle: "Mobile account settings view",
        priority: "normal",
        taskId: 1023,
        timeLapse: 1,
        categories: ["Mobile", "Apps"],
        commentsCount: 10,
        linkCount: 6,
      },
      {
        id: `card-${1}`,
        cardTitle: "Dribble freebies - blog template",
        priority: "normal",
        taskId: 957,
        timeLapse: 5,
        categories: ["Template", "Dribble", "Blog", "Shot"],
        commentsCount: 0,
        linkCount: 1,
      },
    ],
  },
  {
    title: "In Progress",
    id: `column-${1}`,
    cards: [
      {
        id: `card-${2}`,
        cardTitle: "Chatmail Redesing",
        priority: "high",
        taskId: 1073,
        timeLapse: 1,
        categories: ["Mail", "Apps"],
        commentsCount: 15,
        linkCount: 9,
      },
      {
        id: `card-${3}`,
        cardTitle: "Video dashboard",
        priority: "urgent",
        taskId: 967,
        timeLapse: 5,
        categories: ["Web", "Dashboard"],
        commentsCount: 0,
        linkCount: 2,
      },
      {
        id: `card-${4}`,
        cardTitle: "Mystic Landing Page",
        priority: "normal",
        taskId: 946,
        timeLapse: 10,
        categories: ["Web", "Landing", "RWD"],
        commentsCount: 0,
        linkCount: 2,
      },
    ],
  },
  {
    title: "Review",
    id: `column-${2}`,
    cards: [
      {
        id: `card-${5}`,
        cardTitle: "Magzine Homepage",
        priority: "urgent",
        taskId: 1073,
        timeLapse: 1,
        categories: ["Web", "Mobile"],
        commentsCount: 12,
        linkCount: 2,
      },
    ],
  },
  {
    title: "Done",
    id: `column-${3}`,
    cards: [
      {
        id: `card-${6}`,
        cardTitle: "Web account settings view",
        priority: "urgent",
        taskId: 1573,
        timeLapse: 1,
        categories: ["Web", "App"],
        commentsCount: 12,
        linkCount: 2,
      },
      {
        id: `card-${7}`,
        cardTitle: "Mobile App - all preview jpg ",
        priority: "low",
        taskId: 1103,
        timeLapse: 1,
        categories: ["Web", "App"],
        commentsCount: 12,
        linkCount: 2,
      },
      {
        id: `card-${8}`,
        cardTitle: "Registration form optimazitaion",
        priority: "high",
        taskId: 1103,
        timeLapse: 2,
        categories: ["Form", "Web"],
        commentsCount: 8,
        linkCount: 3,
      },
      {
        id: `card-${9}`,
        cardTitle: "Assets for developers",
        priority: "urgent",
        taskId: 1987,
        timeLapse: 2,
        categories: ["Form", "Web"],
        commentsCount: 0,
        linkCount: 0,
      },
    ],
  },
];

const columnReducer = (state = initialState, action) => {
  switch (action.type) {
    case CardActions.ADD_TASK: {
      const {
        title,
        columnId,
        category,
        priority,
        taskId,
        daysAgo,
      } = action.payLoad;
      const newCard = {
        id: `card-${cardId}`,
        cardTitle: title,
        priority,
        categories: category,
        commentsCount: (Math.floor(Math.random() * 10)),
        linkCount: (Math.floor(Math.random() * 10)),
        taskId,
        timeLapse: daysAgo,
      };
      cardId += 1;
      const newCardState = state.map((column) => {
        if (column.id === columnId) {
          return {
            ...column,
            cards: [...column.cards, newCard],
          };
        } else {
          return column;
        }
      });
      return newCardState;
    }

    case CardActions.DRAG_ARR:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
      } = action.payLoad;
      const newState = [...state];
      //in the same column
      if (droppableIdStart === droppableIdEnd) {
        //columns return a list between 4 columns (new tasks, in progress, review, done)
        const columns = state.find((column) => droppableIdStart === column.id);
        const reOrderingCard = columns.cards.splice(droppableIndexStart, 1);
        columns.cards.splice(droppableIndexEnd, 0, ...reOrderingCard); //place the card according to index and add another array items after that
      }

      if (droppableIdStart !== droppableIdEnd) {
          //find the column from where we are dragging the card
          const dragColumn = state.find((column) =>  droppableIdStart === column.id)

          //remove that card out from current column
          const card = dragColumn.cards.splice(droppableIndexStart, 1); //this will give you card that you have shuffle

          //find the column where drag has ended
          const columnEnd = state.find((column) => droppableIdEnd === column.id); 

          //put the card in columnEnd
          columnEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newState;

    default:
      return state;
  }
};

export default columnReducer;
