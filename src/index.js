import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Task Title",
            type: "Task",
            assignee: "John Doe"
        };
    }
    
    render() {
        return (
            <div class="task-card">
                <div class="task-title">{this.title}</div>
                <div class="task-type">{this.type}</div>
                <div class="task-assignee">{this.assignee}</div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Task />, document.getElementById("root"));
