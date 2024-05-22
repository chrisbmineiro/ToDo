import { TasksListItem } from './index'
import style from './TasksList.module.css'

function TasksList() {
    return (
        <ul className={style.TasksList}>
            <TasksListItem tarefa = 'Terminar o curso do TIC de React' />
            <TasksListItem tarefa = 'item 2' />
            <TasksListItem tarefa = 'item 3' />
        </ul>
    )
}

export { TasksList }