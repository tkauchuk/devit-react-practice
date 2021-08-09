export const ToDoListItem = ({value}) => {
    return <li className="to-do-list-item">
        <span className="task-to-do">
            {value}
        </span>
        <button className="task-done-button" type="button">
            Delete task!
        </button>
    </li>
};