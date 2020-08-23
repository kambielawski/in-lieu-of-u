import React from 'react';

import './css/BlogPostPreview.css';

const BlogPostPreview = ({ title, date, image, url }) => {
  console.log(title, url, image);
  return (
    <div class="Container" onClick={() => document.location=`/blog/${url}`} style={styles.containerStyle}>
      {image ? <img src={require(`../assets/blog_images/${image}`)} style={styles.imageStyle} /> : null}
      <p style={styles.titleTextStyle}>{title}</p>
      <p style={styles.dateTextStyle}>{date}</p>
    </div>
  );
};

const styles = {
  containerStyle: {
    width: 'auto',
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
    objectFit: 'cover',
  }
}

export default BlogPostPreview;