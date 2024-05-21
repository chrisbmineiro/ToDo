import { Button, TYPE_BUTTON } from "../../Button";
import style from './TasksListItem.module.css'

function TasksListItem(props) {
    const { tarefa } = props
    return (
        <li className={style.TasksListItem}>
            {tarefa}
            <Button text='-' type={TYPE_BUTTON.PRIMARY} />
        </li>
    )
}

export { TasksListItem }