import { FormTasks, TasksList } from "../../components"
import style from './Inicial.module.css'

function Inicial() {
    return (
        <div className={style.Inicial}>
            <FormTasks />
            <TasksList />
        </div>
    )
}

export { Inicial }