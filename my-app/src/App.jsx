import { useCallback, useState } from 'react';
import './App.css';
import _, { debounce } from 'lodash';
// import { useCallback, useState } from "react";
import { ToDoList } from './components/ToDoList';
import { ToDoListItem } from './components/ToDoListItem';

// function App() {
//     const [toDoList, addTask] = useState([]);

//     const onClick = useCallback(
//         () => {
//             addTask([...toDoList, "My one task"])
//         },
//         [toDoList, addTask]
//     );

//     return <div>
//         <ul>
//             {
//                 toDoList.map((task, i) => {
//                     return <li key={i}>
//                         {task}
//                     </li>
//                 })
//             }
//         </ul>
//         <button onClick={onClick}>Click</button>
//     </div>
// }

function App() {
    const [message, createMessage] = useState('');
    const onInput = useCallback(
        (e) => {
            createMessage(e.target.value);
            console.log(message, '--------');
        }, [message]
    )
    const [tasks, setTask] = useState('[]');
    const onClick = useCallback(
        () => {
            setTask([message, ...tasks])
            console.log(tasks);
        }, [tasks, message]
        )
    return (
        <>
        <label>
            <input
                value={message}
                    onChange={onInput}
            >
            </input>
        </label>
        <button onClick={onClick}>
            Create a task!
        </button>
        </>
    )
}

export default App;
