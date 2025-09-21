import './Card.css'

const Card = (props) => {
    const { 
        project
    } = props

    return (
        <div className="project_card">
            <img src={project.image} alt="" />
            <div className="project_text">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
            </div>
        </div>
    )
}

export default Card