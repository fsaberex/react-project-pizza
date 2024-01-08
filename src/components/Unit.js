import { useContext } from 'react';
import appContext from '../store/appContext';


function Unit() {

  const { handleSelectChange } = useContext(appContext);

  return (
    <div>
        <span>Unit of Measure </span>
        <select name="unit" onChange={handleSelectChange}>
          <option value="grams">grams</option>
          <option value="pieces">pieces</option>
          <option value="cups">cups</option>
          <option value="Teaspoons">Teaspoons</option>
          {/* Add more unit options */}
        </select>
      </div>
  );
}

export default Unit;
