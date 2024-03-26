import Navbar from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeContainerClass = isDarkTheme ? 'home-dark' : 'home-container'
      const textClass = isDarkTheme ? 'text-color' : ''
      return (
        <div>
          <Navbar />
          <div className={homeContainerClass}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="theme"
                className="about-logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="about-logo"
              />
            )}
            <h1 className={textClass}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
