import {useState, useEffect} from 'react';
import axios from 'axios';
import IngredientCard from './IngredientCard';

function Ingredient(){

    const [Ingredients, setIngredient] = useState([]);

    let ingredientName = 'pizza';

    useEffect(() => {

        // let ingredient = 'query=' + ingredientName + '&number=10&sort=calories&sortDirection=desc&'
        //let apikey = '76539e4840cf430da3c11786bf18ecbe'

        const getIngredient = async () => {
            let res = await axios.get('https://api.spoonacular.com/food/ingredients/search?query=' + ingredientName + '&number=10&sort=calories&sortDirection=desc&apiKey=76539e4840cf430da3c11786bf18ecbe');

            //console.log(res);
            let IngredientData = res.data.results;
            setIngredient(IngredientData);
            
        }
        

        getIngredient();

    },[])

    //console.log(Ingredients[0].image);

    // const IngredientData = Ingredients.map((Ingredient) => {
    //     //console.log(Ingredients[i].image);
    //     //IngredientsImage = 
    //     return (
    //         <div>
    //             {Ingredient}
    //             {/* <img src={Ingredient[i].image} /> */}
    //         </div>
    //     )
        
    // });

    const IngredientData = Ingredients.map((Ingredient) => <IngredientCard key={Ingredient.id} ingredient={Ingredient} />);

    return (
        <div>
            {IngredientData}
        </div>
        
    );
    
}


export default Ingredient;