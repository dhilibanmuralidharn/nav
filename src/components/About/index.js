import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutContainerClass = isDarkTheme ? 'about-dark' : 'about-container'
      const textClass = isDarkTheme ? 'text-color' : ''
      return (
        <div>
          <Navbar />
          <div className={aboutContainerClass}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="theme"
                className="about-logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="about-logo"
              />
            )}
            <h1 className={textClass}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
