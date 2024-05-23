import { FormTasks, TasksList } from "../../components"
import style from './Home.module.css'

function Home() {
    return (
        <div className={style.Home}>
            <FormTasks />
            <TasksList />
        </div>
    )
}

export { Home }