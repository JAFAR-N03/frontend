import React, { useState } from 'react';
import './FileSummaryScreen.css'; // Import CSS file for styling
import arrowImage from './arrow.png'; // Import arrow icon from src folder

function FileSummarise() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    // You can perform additional actions with the selected file here
    console.log('Selected file:', file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="file-summary-container">
      <div className="header">
        <img src={arrowImage} alt="Arrow" className="arrow-icon" />
        <h2>Request a new summary</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label htmlFor="fileInput">Choose file:</label>
          <input 
            required 
            id="fileInput"
            type="file" 
            onChange={handleFileChange} // Add onChange event handler
          />
        </div>
        <div className="form-section">
          <label htmlFor="summaryMode">Summary Mode:</label>
          <select id="summaryMode">
            <option value="sections">Summarize by Section</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-section">
          <label htmlFor="language">Language:</label>
          <select id="language" defaultValue="english">
            <option value="english">English</option>
          </select>
        </div>
        <button type="submit">Request New Summary</button>
      </form>
      <div>
        <p>After clicking submit, your summary will be processed and be ready in a few minutes.</p>
      </div>
    </div>
  );
}

export default FileSummarise;
