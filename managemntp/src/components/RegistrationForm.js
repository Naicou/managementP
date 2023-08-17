import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    user_id: null,
    email: '',
    password: '',
  });

  const handleRegistration = async () => {
    try {
      const response = await fetch('http://localhost/php/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <br />
        <button type="button" onClick={handleRegistration}>Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
