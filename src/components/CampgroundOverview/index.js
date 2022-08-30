import React, { useEffect, useState } from "react";

import styles from "./CampgroundOverview.module.scss";

const CampgroundOverview = ({ selectedCampgroundId }) => {
  const [campground, setCampground] = useState();

  useEffect(() => {
    if (selectedCampgroundId) {
      const getCampground = async () => {
        try {
          const res = await fetch(
            `${process.env.REACT_APP_THE_DYRT_API_URL}/api/v5/campgrounds/${selectedCampgroundId}`
          );
          const data = await res.json();
          setCampground(data);
        } catch (error) {
          console.log(error);
        }
      };

      getCampground();
    }
  }, [selectedCampgroundId]);

  return (
    <div className={styles["overview"]}>
      <div className={styles["overview__content"]}>
        { !selectedCampgroundId  && <p></p> }
        { selectedCampgroundId &&
          <div>
            { campground?.photoUrl && <img className={styles["overview__content__image"]} src={`${campground?.photoUrl}`} alt={campground?.name} /> }
            <h1>{`${campground?.name}`}</h1>
            <div className={styles["overview__content__crumb"]}>{`${campground?.type} > ${campground?.region_name} > ${campground?.name}`}</div>
            <div className={styles["overview__content__reviews"]}>
             Reviews: {campground?.reviews_count}
            </div>
          </div>
        }
        </div>
    </div>
  );
};

export default CampgroundOverview;
