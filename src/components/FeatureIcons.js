import React from 'react';

const FeatureIcons = ({ imgPath, imgAlt, subtitle, imgText }) => {
  return (
    <div className="columns-div__part">
      <img
        className="columns-div__icon"
        auto
        widthx50
        src={imgPath}
        alt={imgAlt}
      />
      <h3 className="columns-div__subtitle">{subtitle}</h3>
      <p className="columns-div__text">{imgText}</p>
    </div>
  );
};

export default FeatureIcons;
