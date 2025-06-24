import ReactMarkdown from "react-markdown";

export default function AldoRecipe(props) {
  return (
    <article className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Aldo's Recommendation:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </article>
  );
}
