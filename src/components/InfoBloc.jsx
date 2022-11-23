import { useState } from 'react'
import styles from '../styles/InfoBloc.module.scss'

function InfoBloc({title, content}) {
    const [active, setActive] = useState(true)

    const handleToggle = e => {
        setActive(!active)
    }
    return(       
        <div className={`${styles.infoBloc} ${active && 'active'}`}>
            <div className={styles.infoBloc__title} onClick={handleToggle}>
                    {title}
                    <span className={styles.infoBloc__icon}>
                        <i class="fa-solid fa-chevron-up"></i>
                    </span>
                </div>
            <div className={styles.infoBloc__content}>{content}</div>
        </div>
    )
}

export default InfoBloc