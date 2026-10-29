import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const links = [
  { to: '/', label: '🏠 Главная' },
  { to: '/chat', label: '💬 Чат с ИИ' },
  { to: '/recipes', label: '📖 Рецепты' },
  { to: '/schema', label: '🕸️ Схема БЗ' },
];

const Sidebar = () => (
  <aside className="sidebar">
    <nav className="sidebar-nav">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.to === '/'}
          className={({ isActive }) =>
            'sidebar-link' + (isActive ? ' sidebar-link-active' : '')
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
