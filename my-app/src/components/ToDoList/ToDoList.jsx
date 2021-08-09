import { ToDoListItem } from "../ToDoListItem";

export const ToDoList = ({ tasks }) => {
    return (
        <ul className="to-do-list">
            {
                tasks.map((task) => {
                    return <ToDoListItem value={ task }/>
                })
            }
        </ul>
    )
}
