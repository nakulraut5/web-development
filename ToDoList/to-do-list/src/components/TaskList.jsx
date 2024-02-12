import React from "react";

function TaskList(props) {
    return (<div>
        <input type="checkbox" />
        <label for="scales">{props.text}</label>
    </div>);
}

export default TaskList;