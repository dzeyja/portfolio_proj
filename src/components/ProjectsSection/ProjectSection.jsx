import './ProjectSection.css'
import proj1 from '../../assets/project1.png'
import proj2 from '../../assets/project2.png'
import proj3 from '../../assets/project3.png'
import ProjectCards from '../ProjectCards/ProjectCards'

const ProjectSection = () => {
    return (
        <section>
            <div className="container">
                <div className='project_title'>
                    <h1 className='title'>
                        Featured <span>Projects</span>
                    </h1>
                    <p className='title_desc'>
                        Here are some of my recent projects. 
                        Each project was carefully crafted with 
                        attention to detail, performance, and user
                        experience.
                    </p>
                </div>

                <ProjectCards />
                
            </div>
        </section>
    )
}

export default ProjectSection