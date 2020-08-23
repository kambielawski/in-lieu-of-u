import React from 'react';

import BlogPostPreview from './BlogPostPreview';

import blogposts from '../assets/blogposts';

const BlogPreviews = () => {
  return <>
    {
      blogposts.map((blogpost) => <BlogPostPreview
          title={blogpost.title}
          date={blogpost.date}
          image={blogpost.image}
          url={blogpost.url}
        />
      )
    }
  </>
};

export default BlogPreviews;