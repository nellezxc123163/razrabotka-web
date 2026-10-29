import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchRecipeById } from '../api/mockApi';
import Loader from '../components/Loader';
import './RecipePage.css';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchRecipeById(id).then((r) => {
      setRecipe(r || null);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader />;
  if (!recipe) return <p className="recipe-not-found">Рецепт не найден.</p>;

  const facts = [
    ['Тип блюда', recipe.course],
    ['Способ', recipe.method],
    ['Сезон', recipe.season],
    ['Повод', recipe.occasion],
    ['Регион', recipe.region],
    ['Автор', recipe.author],
    ['Источник', recipe.source],
  ];

  return (
    <div className="recipe-page">
      <Link to="/recipes" className="recipe-back">← Назад к рецептам</Link>
      <h1 className="recipe-name">{recipe.name}</h1>
      <div className="recipe-meta">
        {recipe.cuisine} • {recipe.timeMinutes} мин • {recipe.difficulty}
      </div>

      <div className="recipe-block">
        <h2>Ингредиенты</h2>
        <ul>
          {recipe.ingredients.map((ing) => (
            <li key={ing}>
              {ing}
              {recipe.substitutes[ing] && (
                <span className="recipe-sub"> (замена: {recipe.substitutes[ing]})</span>
              )}
            </li>
          ))}
        </ul>
        {recipe.allergens.length > 0 && (
          <p className="recipe-allergens">⚠️ Аллергены: {recipe.allergens.join(', ')}</p>
        )}
      </div>

      <div className="recipe-block">
        <h2>Приготовление</h2>
        <ol>
          {recipe.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
        <p className="recipe-line">🍴 Утварь: {recipe.utensils.join(', ')}</p>
        <p className="recipe-line">👩‍🍳 Техники: {recipe.techniques.join(', ')}</p>
      </div>

      <div className="recipe-block">
        <h2>Пищевая ценность (на порцию)</h2>
        <div className="recipe-nutrients">
          <span>{recipe.nutrients.kcal} ккал</span>
          <span>Белки {recipe.nutrients.protein} г</span>
          <span>Жиры {recipe.nutrients.fat} г</span>
          <span>Углеводы {recipe.nutrients.carbs} г</span>
        </div>
      </div>

      <div className="recipe-block">
        <h2>О блюде</h2>
        <dl className="recipe-facts">
          {facts.map(([k, v]) => (
            <div key={k} className="recipe-fact">
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <div className="recipe-tags">
          {recipe.tags.map((t) => (
            <span key={t} className="recipe-tag">#{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
