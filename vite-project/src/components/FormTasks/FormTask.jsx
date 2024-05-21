import { TextContent, Button } from '../../components'

import style from './FormTasks.module.css'

function FormTasks() {
    return (
        <form className={style.FormTasks}>
            <TextContent />
            <Button text = '+' />
        </form>
    )
}

export { FormTasks }