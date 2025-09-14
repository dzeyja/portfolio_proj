import './AboutSection.css'

const AboutSection = () => {
    return (
        <section>
            <div className="container">
                <h1 className='title'>
                    About <span>Me</span>
                </h1>
                <div className="about">
                    <div className="about_text">
                        <h1 className='about_title'>
                            Passionate Web Developer & Tech Creator
                        </h1>
                        <p>
                            With over 2 years of experience in web development, I specialize in 
                            creating responsive, accessible, and performant web applications using
                            modern technologies.
                        </p>
                        <p>
                            I'm passionate about creating elegant solutions to complex problems, 
                            and I'm constantly learning new technologies and techniques to stay at 
                            the forefront of the ever-evolving web landscape.
                        </p>
                    </div>
                    <div className="about_cards">
                        <div className="about_card">
                            <img src="" alt="" />
                            <div className='text'>
                                <h2>Web Development</h2>
                                <p>
                                    Creating responsive websites 
                                    and web applications with modern 
                                    frameworks.
                                </p>
                            </div>
                        </div>
                        <div className="about_card">
                            <img src="" alt="" />
                            <div className='text'>
                                <h2>
                                    UI/UX Design
                                </h2>
                                <p>
                                    Designing intuitive user interfaces 
                                    and seamless user experiences.
                                </p>
                            </div>
                        </div>
                        <div className="about_card">
                            <img src="" alt="" />
                            <div className='text'>
                                <h2>
                                    Project Management
                                </h2>
                                <p>
                                    Leading projects from conception to 
                                    completion with agile methodologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>            
        </section>
    )
}

export default AboutSection