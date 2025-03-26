import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdditionalDetailsForm({ prevStep, values, handleChange }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(values);

  const handleInputChange = (field, value) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    handleChange(newData);
  };

  const handleSubmit = async () => {
    try {
      console.log('Form values before submission:', {
        sex: formData.sex,
        sexType: typeof formData.sex,
        fullFormData: formData
      });
      const response = await fetch('http://localhost:5001/api/patients/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      console.log('Form submitted successfully:', data);
      
      // Redirect to patient profile
      navigate('/log-in');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(error.message || 'Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Additional Details</h2>
      <div className="form-group">
        <textarea 
          placeholder="Allergies" 
          value={formData.allergies} 
          onChange={(e) => handleInputChange('allergies', e.target.value)} 
        />
      </div>
      <div className="form-group">
        <textarea 
          placeholder="Additional Notes" 
          value={formData.additionalDetails} 
          onChange={(e) => handleInputChange('additionalDetails', e.target.value)} 
        />
      </div>

      <div className="nav-buttons">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
