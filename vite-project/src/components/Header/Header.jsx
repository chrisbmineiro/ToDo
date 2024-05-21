import style from './Header.module.css'

function Header() {
    return (
        <div className={style.Header}>
            <h1>
                <span>ToDo </span>
                List
            </h1>
        </div>
    )
}

export { Header }