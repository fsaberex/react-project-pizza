function RemoveIngredient(onRemoveIngredient) {


    const handleRemoveIngredient = (ingredient) => {
        onRemoveIngredient(ingredient);
      };

    return (
        <button onClick={() => handleRemoveIngredient(ingredient)}>
            Remove
        </button>
    );
}