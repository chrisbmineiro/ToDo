import { TasksListItem } from './index'
import style from './TaskList.module.css'

function TasksList() {
    return (
        <ul className={style.TasksList}>
            <TasksListItem tarefa = 'item 1' />
            <TasksListItem tarefa = 'item 2' />
            <TasksListItem tarefa = 'item 3' />
        </ul>
    )
}

export { TasksList }