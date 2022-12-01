import { useState } from 'react'
import './../styles/components/_infoBloc.scss'

const InfoBloc = ({title, content}) => {
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
            <div className="infoBloc__content">
                {Array.isArray(content) ? (
                <ul className="infoBloc__list">
                    {content.map((equipment, index) => (
                        <li key={index} className="infoBloc__list-element">
                            {equipment}
                        </li>
                    ))}
                </ul>
                ) : (
                <p className="collapse__text">{content}</p>
                )}
            </div>
        </div>
    )
}

export default InfoBloc