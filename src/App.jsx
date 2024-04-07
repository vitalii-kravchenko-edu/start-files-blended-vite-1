import { Header, Loader } from 'components';
import { Suspense, lazy } from 'react';

import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const Country = lazy(() => import('./pages/Country'));

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader></Loader>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/country/:countryId" element={<Country />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
