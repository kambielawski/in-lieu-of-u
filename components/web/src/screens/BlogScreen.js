import React from 'react';

import BlogPreviews from '../components/BlogPreviews';
import SiteContainer from '../components/SiteContainer';

const BlogScreen = () => {
  return (
    <SiteContainer>
      <h2>Blog</h2>
      <BlogPreviews />
    </SiteContainer>
  );
};

export default BlogScreen;
