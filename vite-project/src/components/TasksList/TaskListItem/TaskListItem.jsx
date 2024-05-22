import { Button, TYPE_BUTTON } from "../../Button";
import style from './TasksListItem.module.css'

function TasksListItem(props) {
    // eslint-disable-next-line react/prop-types
    const { tarefa } = props
    return (
        <li className={style.TasksListItem}>
            {tarefa}
            <Button text='-' type={TYPE_BUTTON.SECUNDARY} />
        </li>
    )
}

export { TasksListItem }