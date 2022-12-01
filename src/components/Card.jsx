import './../styles/components/_card.scss'

const Card =({title, cover}) => {
    return(
        <div className="card">
            <div className="card__imageContainer">
                <img src={cover} alt="" />
            </div>
            <div className="card__apartmentTitle">
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default Card