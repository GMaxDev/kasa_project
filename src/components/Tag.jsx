import '../styles/tag.scss'

const Tag = ({getTag}) => {
    return (
        <main className="tag">
            <p className='tag__content'>{getTag}</p>
        </main>
    )
}

export default Tag