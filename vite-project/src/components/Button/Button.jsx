import style from './Button.module.css'
import { TYPE_BUTTON } from './constants'

function Button(props) {
    const { text, type = TYPE_BUTTON.PRIMARY, ...outrasProps } = props
    return (
        <button className={style.Button} type={type} {...outrasProps}>
            {text}
        </button>
    )
}

export { Button }