import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Title(props) {
  return (
    <h1>{props.value}</h1>
  );
}

function Type(props) {
  return (
    <p>{props.value}</p>
  );
}

function Assignee(props) {
  return (
    <p>{props.value}</p>
  );
}

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Task Title",
      type: "Task",
      assignee: "John Doe",
    };
  }

  renderTitle(title) {
    return (
      <Title 
        value={title}
      />
    );
  }

  renderType(type) {
    return (
      <Type
        value={type}
      />
    );
  }

  renderAssignee(assignee) {
    return (
      <Assignee
        value={assignee}
      />
    );
  }

  render() {
    const title = this.state.title;
    const type = this.state.type;
    const assignee = this.state.assignee;
    
    return (
      <div class="task-card">
        <div class="task-title">
          {this.renderTitle(title)}
        </div>
        <div class="task-type">
          {this.renderType(type)}
        </div>
        <div class="task-assignee">
          {this.renderAssignee(assignee)}
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Task />, document.getElementById("root"));
