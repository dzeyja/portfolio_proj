import './ProjectSection.css'
import proj1 from '../../assets/project1.png'
import proj2 from '../../assets/project2.png'
import proj3 from '../../assets/project3.png'

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

                <div className="project_cards">
                    <div className="project_card">
                        <img src={proj1} alt="" />
                        <div className="project_text">
                            <h1>SaaS Landing Page</h1>
                            <p>A beautiful landing page app using React and Tailwind.</p>
                        </div>
                    </div>
                    <div className="project_card">
                        <img src={proj2} alt="" />
                        <div className="project_text">
                            <h1>Orbit Analytics Dashboard</h1>
                            <p>Interactive analytics dashboard with data visualization and filtering capabilities.</p>
                        </div>
                    </div>
                    <div className="project_card">
                        <img src={proj3} alt="" />
                        <div className="project_text">
                            <h1>E-commerce Platform</h1>
                            <p>Full-featured e-commerce platform with user authentication and payment processing.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default ProjectSection