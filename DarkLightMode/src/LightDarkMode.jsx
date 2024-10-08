import React, {useState} from 'react'

const LightDarkMode = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!darkMode)
    }

    const lightStyle = {
        backgroundColor: '#ffffff',
        color: '#000000',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      };

      const darkStyle = {
        backgroundColor: '#000000',
        color: '#ffffff',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      };
  return (
    <div style={darkMode ? lightStyle : darkStyle}>
      <h1>{darkMode ? "darkMode" : "lightMode"}</h1>
      <button onClick={toggleMode}>
           switch to {darkMode ? 'LightMode' : 'darkMode'}
          
      </button>
    </div>
  )
}

export default LightDarkMode
