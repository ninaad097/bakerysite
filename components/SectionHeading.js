const SectionHeading = ({ slogan , title  , isWhite }) => {
    return (
        <div  className="sectionh">
            <h1 style={{ color : isWhite ? '#efc7c2 ': 'primary'}}>{slogan}</h1>
            <p style={{ color : isWhite ? '#efc7c2' : 'primary'}}>{title}</p>
        </div>
    )
}

export default SectionHeading
