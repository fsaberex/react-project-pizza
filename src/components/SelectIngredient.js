import IngredientCard from './IngredientCard';
import { useContext, useEffect } from 'react';
// import appContext from '../store/appContext';
import NewAppContext from '../store/newAppContext';

function SelectIngredient() {

  // const { handleIngredientSelect } = useContext(appContext);
  // const { ingredientsList } = useContext(appContext);

  const {store} = useContext(NewAppContext);
  const {results} = store.searchedFor;
  
  console.log(results);

  useEffect(() => {
    console.log('stor updating', store);

  },[store])

  return (
    <div>
      {results.map((ingredient) => (
        <IngredientCard
          key={ingredient.id}
          ingredient={ingredient}
          // onClick={() => handleIngredientSelect(ingredient, index)} //qty, um, ingID
          //modal with three pieces
          //in edit mode and not
        />
      ))}
    </div>
  );
}

export default SelectIngredient