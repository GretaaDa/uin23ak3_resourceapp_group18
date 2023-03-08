import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.js';
import Resource from './components/Resource.js';
import resources from './data/resources.js';
import './sass/main.scss'
function App() {
  return (
    <Routes>
      <Route element={<Layout content={resources} />}>
        <Route index element={<Resource resources={resources} props={resources[0]} />} />
        {
          resources.map(item =>
            <Route key={item.category} path={item.category} element={<Resource resources={resources} props={item} />} />
          )
        }
      </Route>
    </Routes>
  );
}



export default App;
