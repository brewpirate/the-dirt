import React from 'react';
import searchResults from '../../data/searchResults';

import styles from './CampgroundOverview.module.scss';

const CampgroundOverview = ({ selectedCampgroundId }) => {
  // TODO load the actual campground from https://thedyrt.com/api/v5/campgrounds/${selectedCampgroundId}
  const campground = searchResults.find(
    (result) => selectedCampgroundId === result.id
  );
  // console.log(campground);

  // TODO: Zenner Notes - Improve experience for undefined. Conditional rendering?
  return (
    <div className={styles['overview']}>
      <div className={styles['overview__content']}>
        <h2>{`Display Content About ${campground?.name}`}</h2>
      </div>
    </div>
  );
};

export default CampgroundOverview;
