import React, { useState } from 'react';

const Contactcard = () => {
  // Initialize state for form fields
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Country:'',
  });

  // Event handler for input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);
    // You can perform further actions, like sending the data to an API
  };

  return (
    <div>
      <h1>Reach Out To Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="FirstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.FirstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="LastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="LastName"
            value={formData.LastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="Email"
            id="Email"
            name=""
            value={formData.Email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contactcard;
