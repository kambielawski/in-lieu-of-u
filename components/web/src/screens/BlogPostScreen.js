import React from 'react';
import Container from 'react-bootstrap/Container';

import SiteContainer from '../components/SiteContainer';
import blogposts from '../assets/blogposts.js';

const BlogPostScreen = (props) => {
  return (
    <SiteContainer>
      <Container>
        {blogposts.map((blogpost) => {
          if (blogpost.url === props.match.params.url) {
            return <>
              <h3><strong>{blogpost.title}</strong></h3>
              <p>{blogpost.date}</p>
              {blogpost.html}
            </>;
          }
        })}
      </Container>
    </SiteContainer>
  );
};

export default BlogPostScreen;
