import { useState } from "react";
import AldoRecipe from "./AldoRecipe";
import IngredientList from "./IngredientList";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  function toggleRecipe() {
    setRecipeShown((prevRecipeShown) => !prevRecipeShown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }
  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. thyme or basil "
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 ? (
        <IngredientList ingredients={ingredients} toggleRecipe={toggleRecipe} />
      ) : null}
      <section>{recipeShown ? <AldoRecipe /> : null}</section>
    </main>
  );
}
