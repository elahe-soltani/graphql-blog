import React from 'react';
import { Routes , Route } from 'react-router-dom';
import HomePage from './Component/home/HomePage';
import Layout from './Component/layout';
import BlogPage from './Component/blog/BlogPage';
import AuthorPage from './Component/author/AuthorPage';
import ScrollToTop from './Component/shared/ScrollToTop';
import BlogsAll from './Component/blog/BlogsAll';
import AuthorsAll from './Component/author/AuthorsAll';

const App = () => {

  return (
    <div>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blogs/:slug' element={<BlogPage />} />
          <Route path='/authors/:slug' element={<AuthorPage />} />
          <Route path='/authorsAll' element={<AuthorsAll />} />
          <Route path='/blogsAll' element={<BlogsAll />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;