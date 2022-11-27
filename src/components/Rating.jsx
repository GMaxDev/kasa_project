import '../styles/Rating.module.scss'
import greyRating from '../assets/img/star_rate.svg'
import redRating from '../assets/img/star_rate_red.svg'

const Rating = ({ rating }) =>  {
{/*function Rating(rating)  */}
    const stars = [1, 2, 3, 4, 5]
    console.log(rating)
    return (
        <div className="rating">
            {stars.map((star) => rating >= star ? (
                <img
                    key={star.toString()}
                    className="rating__icon"
                    src={redRating}
                    alt=""
                />
            ) : (
                <img
                    key={star.toString()}
                    className="rating__icon"
                    src={greyRating}
                    alt=""
                />
                )
            )}
        </div>
    )
}

export default Rating