import { Routes, Route, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Home from '@pages/Home';
import About from '@pages/About';
import Products from '@pages/Products';
import ProductDetails from '@pages/ProductDetails';
import NotFound from '@pages/NotFound';
import css from './App.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const App = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <p className={css.logo}>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </p>

        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={buildLinkClass}>
            About
          </NavLink>
          <NavLink to="/products" className={buildLinkClass}>
            Products
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
