import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import RecipesPage from './pages/RecipesPage';
import RecipePage from './pages/RecipePage';
import SchemaPage from './pages/SchemaPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="recipes" element={<RecipesPage />} />
        <Route path="recipes/:id" element={<RecipePage />} />
        <Route path="schema" element={<SchemaPage />} />
      </Route>
    </Routes>
  );
}

export default App;
