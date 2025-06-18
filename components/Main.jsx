import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredient] = useState([]);
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  function handesubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredient((prev) => [...prev, newIngredient]);
  }
  return (
    <main>
      <form onSubmit={handesubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. thyme or basil "
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}
