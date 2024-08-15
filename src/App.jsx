import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from '@components/AppBar';
import NotFound from '@pages/NotFound';
import css from './App.module.css';

const Home = lazy(() => import('@pages/Home'));
const About = lazy(() => import('@pages/About'));
const Products = lazy(() => import('@pages/Products'));
const ProductDetails = lazy(() => import('@pages/ProductDetails'));
const Mission = lazy(() => import('@components/Mission'));
const Team = lazy(() => import('@components/Team'));
const Reviews = lazy(() => import('@components/Reviews'));

const App = () => {
  return (
    <div className={css.container}>
      <AppBar />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
