import React, { useState } from 'react';

const RecipeNameInput = ({ onSave }) => {
  const [recipeName, setRecipeName] = useState('');

  const handleSave = () => {
    if (recipeName.trim() !== '') {
      onSave(recipeName);
      setRecipeName(''); // Clear the input after saving
    }
  };

  return (
    <div>
      <label htmlFor="recipeName">Recipe Name:</label>
      <input
        type="text"
        id="recipeName"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        placeholder="Enter recipe name"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default RecipeNameInput;