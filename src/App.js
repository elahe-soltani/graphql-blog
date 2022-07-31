import React from 'react';
import { Routes , Route } from 'react-router-dom';
import HomePage from './Component/home/HomePage';
import Layout from './Component/layout';
import BlogPage from './Component/blog/BlogPage';
import AuthorPage from './Component/author/AuthorPage';
import ScrollToTop from './Component/shared/ScrollToTop';

const App = () => {

  return (
    <div>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blogs/:slug' element={<BlogPage />} />
          <Route path='/authors/:slug' element={<AuthorPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;