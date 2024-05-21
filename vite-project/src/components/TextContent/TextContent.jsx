import style from './TextContent.module.css'

function TextContent(props) { 
    return (
        <input 
            className={style.TextContent} type="text" 
            {...props} />
    )
}

export { TextContent }