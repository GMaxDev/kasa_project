import '../styles/tag.scss'

const Tag = ({getTag}) => {
    return (
        <section className="tag">
            <p className='tag__content'>{getTag}</p>
        </section>
    )
}

export default Tag