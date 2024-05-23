import { TasksListItem } from './index'
import style from './TasksList.module.css'

function TasksList() {
    const tarefas = [
        {id: 1, name: 'hello, world'},
        {id: 2, name: 'item 02'},
        {id: 3, name: 'item 03'},
    ]
    return (
        <ul className={style.TasksList}>
            {tarefas.map(item => <TasksListItem key={item.id} name={item.name} />)}
        </ul>
    )
}

export { TasksList }