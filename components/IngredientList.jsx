export default function IngredientList(props) {
  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section>
      
      <h2>Ingredients on shelf:</h2>
      <ul className="ingredient-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {props.ingredients.length >= 3 ? (
        <div className="get-recipe-container">
          <div ref={props.ref}>
            <h3>Want a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.toggleRecipe}>Get a recipe</button>
        </div>
      ) : null}
    </section>
  );
}
