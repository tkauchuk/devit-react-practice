import './App.css';
import {useCallback, useState} from "react";

function App() {
    const [toDoList, addTask] = useState([]);

    const onClick = useCallback(
        () => {
            addTask([...toDoList, "My one task"])
        },
        [toDoList, addTask]
    );

    return <div>
        <ul>
            {
                toDoList.map((task, i) => {
                    return <li key={i}>
                        {task}
                    </li>
                })
            }
        </ul>
        <button onClick={onClick}>Click</button>
    </div>
}

export default App;
