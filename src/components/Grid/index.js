import React from 'react';

const renderImages = images => images.map(img => (
  <div
    className="m-1 w-100"
    style={{
      overflow: 'hidden',
      height: 240,
      // backgroundImage: `url(${cl.url(`${img}.jpg`)})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    key={img}
  >
  </div>
));

const Grid = ({ images }) => (
  <div className="d-sm-flex my-4 my-sm-5">
    {renderImages(images)}
  </div>
);

export default Grid;
