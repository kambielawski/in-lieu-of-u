import React from 'react';

import BlogPreviews from '../components/BlogPreviews';
import SiteContainer from '../components/SiteContainer';
import PodcastPreviews from '../components/PodcastPreviews';

const HomeScreen = () => {
  return (
    <SiteContainer>
      <h2>Blog Posts</h2>
      <BlogPreviews />
      <h2 style={{ marginTop: '20px' }}>Podcasts</h2>
      <PodcastPreviews />
    </SiteContainer>
  );
};

export default HomeScreen;
