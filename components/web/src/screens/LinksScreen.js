import React from 'react';

import SiteContainer from '../components/SiteContainer';

const LinksScreen = () => {
  return (
    <SiteContainer>
      <h1>Links</h1>

      <h4>Computing</h4>
      <p><a href="http://stellar.mit.edu/S/course/6/sp16/6.045/materials.html">Scott Aaronson MIT Computing Theory Course</a></p>
      <p><a href="https://www.abelard.org/turpap2/tp2-ie.asp">Turing's Paper</a></p>

      <h4>Econ</h4>
      <p><a href="https://mru.org/">Marginal Revolution University</a></p>

      <h4>Predictive Processing</h4>
      <p><a href="https://predictive-mind.net/papers">predictive-mind.net</a></p>
      <p><a href="https://en.wikipedia.org/wiki/Free_energy_principle">Free-energy Principle</a></p>
    </SiteContainer>
  );
};

export default LinksScreen;
