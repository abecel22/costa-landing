import React from 'react';
import FeatureIcons from './FeatureIcons';
import rating from '../images/003-rating.svg';
import payment from '../images/001-payment.svg';
import present from '../images/002-present.svg';

function IconColumns() {
  return (
    <div className="columns-div">
      <FeatureIcons
        imgPath={rating}
        imgAlt="A fashion icon"
        subtitle="Fashion"
        imgText="A selection of fashionable clothing brands"
      />
      <FeatureIcons
        imgPath={payment}
        imgAlt="A smartphone icon"
        subtitle="Online Order"
        imgText="Easy set up with PayPal "
      />
      <FeatureIcons
        imgPath={present}
        imgAlt="Shipping"
        subtitle="Shipping"
        imgText="Same day shipping on all orders placed before 3pm(CT), Mon-Fri "
      />
    </div>
  );
}

export default IconColumns;
