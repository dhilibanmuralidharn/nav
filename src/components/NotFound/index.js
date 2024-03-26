import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundClass = isDarkTheme ? 'NotFound-dark' : 'NotFound-container'
      const textsClass = isDarkTheme ? 'text-color' : ''
      return (
        <div>
          <Navbar />
          <div className={notFoundClass}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="NotFound-logo"
            />
            <h1 className={textsClass}>Lost Your Way?</h1>
            <p className={textsClass}>
              We cannot seem to find the page your k=looking for
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
