import style from './PageNotFound.module.css'

function PageNotFound() {
    return (
        <div className={style.PageNotFound}>
            <h1>404 Error</h1>
            <h1>Page Not Found</h1>
        </div>
    )
}

export {PageNotFound}