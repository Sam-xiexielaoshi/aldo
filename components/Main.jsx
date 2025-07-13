import { useState } from "react";
import AldoRecipe from "./AldoRecipe";
import IngredientList from "./IngredientList";
import { getRecipeFromMistral } from "./ai.js";
import { useRef } from "react";
import { useEffect } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const recipeStation = useRef(null);

  useEffect(() => {
    if (recipe !== "" && recipeStation.current !== null) {
      // recipeStation.current.scrollIntoView();
      const yCoord =
        recipeStation.current.getBoundingClientRect().top +
        window.scroll({
          top: yCoord,
          behavior: "smooth",
        });
    }
  }, [recipe]);

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
        <IngredientList
          ref={recipeStation}
          ingredients={ingredients}
          toggleRecipe={toggleRecipe}
        />
      ) : null}
      <section>{recipe ? <AldoRecipe recipe={recipe} /> : null}</section>
    </main>
  );
}
