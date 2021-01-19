import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions";

const ActionButton = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const [textValue, setTextValue] = useState("");
  const buttonText = "Add task";

  const openForm = () => {
    setFormOpen(!formOpen);
  };

  const closeForm = () => {
    setFormOpen(false);
    setTextValue("");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setTextValue(value);
  };

  const renderButton = () => {
    return (
      <div className="action-btn-wrapper" onClick={() => openForm()}>
        <i className="fas fa-plus-circle"></i>
        {buttonText}
      </div>
    );
  };

  const handleAddAction = () => {
      const {dispatch, columnId} = props;
      const taskId = Math.floor(1000 + Math.random() * 9000);
      const daysAgo = Math.floor(Math.random() + 1);
      const priorityMeter = taskId <= 2000 ? "normal" : taskId >2000 && taskId <= 4000 ? "high" : taskId > 4000 && taskId <= 6000 ? 'low' : 'urgent'
    if(textValue) {
        dispatch(addTask(columnId, textValue, ["Web", "Mobile"], priorityMeter, taskId, daysAgo));
        setTextValue("");
    }
  };

  const renderForm = () => {
    return (
      <div className="action-form">
        <form>
          <textarea
            placeholder="add your task title"
            onBlur={() => closeForm()}
            autoFocus
            value={textValue}
            onChange={(e) => handleChange(e)}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <button onMouseDown={() => handleAddAction()}>Add</button>
            <i className="fas fa-times" onClick={() => closeForm()}></i>
          </div>
        </form>
      </div>
    );
  };

  return formOpen ? renderForm() : renderButton();
};

export default connect()(ActionButton);
