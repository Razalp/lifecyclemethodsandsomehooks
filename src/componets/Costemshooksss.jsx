// Costemshooksss.js
import React, { useState } from 'react';

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

const Costemshooksss = () => {

  const usernameInput = useFormInput('');
  const passwordInput = useFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitted:', usernameInput.value, passwordInput.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" {...usernameInput} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...passwordInput} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Costemshooksss;
