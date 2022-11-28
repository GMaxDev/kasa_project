import '../styles/_banner.scss'

const Banner = ({imgSrc, title, alt}) => {
    return(
        <div className="banner">
            <img src={imgSrc} alt={alt}/>
            <h1>{title}</h1>

        </div>
    )
}

export default Banner