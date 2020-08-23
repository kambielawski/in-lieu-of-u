import React from 'react';

import Card from 'react-bootstrap/Card';

const Sidebar = () => {
  return (
    <>
      <Card style={{ height: '100%', marginTop: '20px' }}>
        <Card.Body>
          <Card.Title>Resources</Card.Title>
          <Card.Text style={{ marginLeft: '5px' }}>
            <div><a href="/links">Links</a></div>
          </Card.Text>
          <Card.Subtitle>Blogroll</Card.Subtitle>
          <Card.Text style={{ marginLeft: '5px' }}>
            <div><a href="https://www.discovermagazine.com/blog/neuroskeptic">Neuroskeptic{'\n'}</a></div>
            <div><a href="https://neurocritic.blogspot.com/">Neurocritic{'\n'}</a></div>
            <div><a href="https://mindhacks.com/">Mindhacks</a></div>
            <div><a href="http://www.overcomingbias.com/">Overcoming Bias (Robin Hanson){'\n'}</a></div>
            <div><a href="http://www.scottaaronson.com/blog">Shtetl Optimized (Scott Aaronson){'\n'}</a></div>
            <div><a href="http://www.slatestarcodex.com/">Slate Star Codex{'\n'}</a></div>
            <div><a href="http://interconnected.org/home/">Interconnected (Matt Webb){'\n'}</a></div>
            <div><a href="https://www.countbayesie.com/">Count Bayesie</a></div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Sidebar;