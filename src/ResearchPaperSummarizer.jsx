import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import './FrontScreen.css'; // Import CSS file for styling
import fileImage from './file.png';
import linkImage from './link.png';
import textImage from './text.png';

function FrontScreen() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
  };

  const handleClick = (format) => {
    // You can perform actions based on the chosen format here
    console.log('Chosen format:', format);
  };

  return (
    <div>
      <h2 className="heading">Request a new summary</h2>
      <h3 className="sub-heading">Choose Format</h3>

      <div className="container">
        {/* Rectangle 1 */}
        <Link to="/file-summary" className="rectangle" onClick={() => handleClick('file')}>
          <img src={fileImage} alt="File" className="image" />
          <span className="text">File</span>
        </Link>

        {/* Rectangle 2 */}
        <div className="rectangle" onClick={() => handleClick('link')}>
          <img src={linkImage} alt="Link" className="image" />
          <span className="text">Link</span>
        </div>

        {/* Rectangle 3 */}
        <div className="rectangle" onClick={() => handleClick('text')}>
          <img src={textImage} alt="Text" className="image" />
          <span className="text">Text</span>
        </div>
      </div>

      {/* Dark mode button */}
      <button className={`dark-mode-button ${darkMode ? 'active' : ''}`} onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default FrontScreen;
