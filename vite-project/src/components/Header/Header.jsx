import { Link } from 'react-router-dom'
import style from './Header.module.css'

function Header() {
    return (
        <div className={style.Header}>
            <Link to='/'>
                <h1>
                    <span>ToDo </span>
                    List
                </h1>
            </Link>
            
            <Link to='/about-us'>
                Sobre Nós
            </Link>
        </div>
    )
}

export { Header }