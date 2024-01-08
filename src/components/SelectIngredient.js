import IngredientCard from './IngredientCard';
import { useContext } from 'react';
import appContext from '../store/appContext';

function SelectIngredient() {

  const { handleIngredientSelect } = useContext(appContext);
  const { ingredientsList } = useContext(appContext);
  

  return (
    <div>
      {ingredientsList.map((ingredient, index) => (
        <IngredientCard
          key={ingredient.id}
          ingredient={ingredient}
          onClick={() => handleIngredientSelect(ingredient, index)}
        />
      ))}
    </div>
  );
}

export default SelectIngredient