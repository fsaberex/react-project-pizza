import NewAppContext from '../store/newAppContext';
import React, { useState, useContext } from 'react';


function EditIngredientForm() {
    const [ formData, setFormData ] = useState({})
    const {dispatch} = useContext(NewAppContext);

    const handleEditIngredient = (e) => {
        //console.log(e);
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleEditSelectedIngredient = (event) => {
        event.preventDefault();

        //console.log(formData);

        dispatch({type: 'editIngredient', payload: {quantity: formData.quantity, unitOfMeasure: formData.unitOfMeasure}})
    }

    return (
        <div>
          <form onSubmit={handleEditSelectedIngredient}>
            <input name="quantity" type="number" value={formData.selectedQuantity} onChange={handleEditIngredient}/>
            <select name="unitOfMeasure" value={formData.selectedUnitOfMeasure} onChange={handleEditIngredient}>
                <option value="grams">grams</option>
                <option value="pieces">pieces</option>
                <option value="cups">cups</option>
                <option value="Teaspoons">Teaspoons</option>
                {/* Add more unit options */}
            </select>
            <button type="submit">Add to Recipe</button>
          </form>
        </div>
      );
}

  export default EditIngredientForm;