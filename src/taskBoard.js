import React from "react";
import TaskCard from "./taskCard.js"

function TaskColumn(props) {
  return (
    <div class="task-column">
      <h2>{props.value}</h2>
      <TaskCard />
      <TaskCard />
    </div>
  );
}

class TaskBoard extends React.Component {
  render() {
    return (
      <div class="board">
        <TaskColumn value="TO DO" />
        <TaskColumn value="IN PROGRESS" />
        <TaskColumn value="READY TO TEST" />
        <TaskColumn value="DONE" />
      </div>
    );
  }
}

export default TaskBoard;