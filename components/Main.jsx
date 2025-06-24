import { useState } from "react";
import AldoRecipe from "./AldoRecipe";
import IngredientList from "./IngredientList";
import { getRecipeFromMistral } from "./ai.js";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  async function toggleRecipe() {
    const genertedRecipe = await getRecipeFromMistral(ingredients);
    setRecipe(genertedRecipe);
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
      <section>{recipe ? <AldoRecipe recipe={recipe}/> : null}</section>
    </main>
  );
}
