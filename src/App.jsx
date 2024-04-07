import { Header, Loader } from 'components';
import { Suspense, lazy } from 'react';

import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader></Loader>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route to={'/'} element={<Home />}></Route> */}
        </Routes>
      </Suspense>
    </div>
  );
};
