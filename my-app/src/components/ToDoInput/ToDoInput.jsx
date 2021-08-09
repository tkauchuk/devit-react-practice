import { useState } from "react";

export const ToDoInput = () => {
    const [task, setTask] = useState([]);
    return (
        <input
            type="text"
            value={task}
            >
        </input>
    )
};

