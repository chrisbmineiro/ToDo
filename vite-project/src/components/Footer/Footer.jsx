import style from './Footer.module.css'

function Footer(props) {
    const { criador } = props;
    const anoAtual = new Date().getFullYear()
    return (
        <div className={style.Footer}>
            React Basic - {anoAtual} - {criador}    
        </div>
    )
}

export { Footer }