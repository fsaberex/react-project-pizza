function SaveRecipe(onSaveRecipeToCookbook) {


    const handleSaveRecipe = () => {
        onSaveRecipeToCookbook(selectedIngredients, quantities);
        console.log(selectedIngredients);
      };

    return (
        <button onClick={handleSaveRecipe}>Save</button>
    );
}