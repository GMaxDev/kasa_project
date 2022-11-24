import { useState } from 'react'
import '../styles/infoBloc.scss'

function InfoBloc({title, content}) {
    const [active, setActive] = useState(false)

    function handleToggle(e) {
        setActive(!active)
    }
    return(       
        <div className={`infoBloc ${active ? "active" : ""}`}>
            <div className="infoBloc__title" onClick={handleToggle}>
                    {title}
                    <span className="infoBloc__icon">
                        <i className="fa-solid fa-chevron-up"></i>
                    </span>
            </div>
            <div className="infoBloc__content">{content}</div>
        </div>
    )
}

export default InfoBloc