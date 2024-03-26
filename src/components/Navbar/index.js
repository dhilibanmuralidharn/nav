import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickChangeTheme = () => {
        toggleTheme()
      }

      const navcontainerClass = isDarkTheme ? 'dark-theme' : 'nav-contianer'
      const navListClass = isDarkTheme ? 'List-theme' : ''
      return (
        <nav className={navcontainerClass}>
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
              className="logo"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="logo"
            />
          )}
          <ul className="nav-list">
            <Link to="/">
              <li className={navListClass}>Home</li>
            </Link>
            <Link to="/about">
              <li className={navListClass}>About</li>
            </Link>
          </ul>
          <button type="button" className="theme-button" data-testid="theme">
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
              alt="theme"
              className="logo"
              onClick={onClickChangeTheme}
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
