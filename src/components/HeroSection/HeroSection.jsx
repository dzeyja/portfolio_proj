import './HeroSection.css'
import downArrow from '../../assets/down-arrow.png'

const HeroSection = () => {
    return (
        <section>
            <div className="container">
                <div className="hero_section">
                    <div>
                        <h1 className='hero_title'>
                            Hi, I`m <span>Daulet</span>
                        </h1>
                        <p className='hero_text'>
                            I create stellar web experiences with
                            modern technologies. Specializing in 
                            full-stuck web development, I build 
                            interfaces that are both beautiful and 
                            functional.
                        </p>
                        <button className='btn'>
                            View My Work
                        </button>
                    </div>
                    <div className='down-arrow'>
                        <p>Scroll</p>
                        <img 
                            className='arrow' 
                            src={downArrow} 
                            alt='arrow'
                        />
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default HeroSection
