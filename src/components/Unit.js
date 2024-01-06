import React from 'react';


function Unit({ onUnitChange }) {

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        onUnitChange(selectedValue);
    };

  return (
    <div>
        <span>Unit of Measure </span>
        <select name="unit" onChange={handleSelectChange}>
          <option value="grams">grams</option>
          <option value="pieces">pieces</option>
          {/* Add other unit options as needed */}
        </select>
      </div>
  );
}

export default Unit;
