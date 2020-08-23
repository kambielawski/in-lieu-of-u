import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import podcasts from '../assets/podcasts';

import "./css/BlogPostPreview.css";

const PodcastPreviews = () => {
  let firstThreePodcasts = podcasts.slice(0, 3);
  return <Row>
    {
      firstThreePodcasts.map((podcast) => {
        return <Col xs={4}>
          <div class="Container" style={styles.containerStyle} onClick={() => document.location = `${podcast.url}`}>
            <img src={require(`../assets/podcast_images/${podcast.image}`)} style={styles.imageStyle} />
            <p style={styles.titleTextStyle}>{podcast.title}</p>
          </div>
        </Col>
      })
    }
  </Row>
};

const styles = {
  containerStyle: {
    height: '100%',
    backgroundColor: '#363636',
    margin: '3px',
    display: 'block',
    overflow: 'auto',
    borderRadius: '5px',
    marginBottom: '5px',
  },
  titleTextStyle: {
    color: 'white',
    fontSize: '24px',
    textAlign: 'left',
    marginLeft: '10px',
    marginTop: '2px',
  },
  dateTextStyle: {
    color: 'white',
    fontSize: '16px',
    textAlign: 'right',
    marginRight: '12px',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    maxHeight: '200px',
    objectFit: 'contain',
  }
};

export default PodcastPreviews;