import { useEffect, useState } from 'react';
import { fetchRecipes } from '../api/mockApi';
import RecipeCard from '../components/RecipeCard';
import Loader from '../components/Loader';
import './RecipesPage.css';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchRecipes().then((data) => {
      setRecipes(data);
      setLoading(false);
    });
  }, []);

  const query = filter.toLowerCase();
  const filtered = recipes.filter(
    (r) =>
      r.name.toLowerCase().includes(query) ||
      r.cuisine.toLowerCase().includes(query)
  );

  if (loading) return <Loader />;

  return (
    <div className="recipes">
      <h1 className="recipes-title">📖 Рецепты</h1>
      <input
        type="text"
        className="recipes-search"
        placeholder="Поиск по названию или кухне..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {filtered.length === 0 ? (
        <p className="recipes-empty">Ничего не найдено.</p>
      ) : (
        <div className="recipes-grid">
          {filtered.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipesPage;
