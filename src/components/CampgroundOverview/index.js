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
        {!selectedCampgroundId ? (
          <p></p>
        ) : (
          <h2>{`Display Content About ${campground?.name}`}</h2>
        )}
      </div>
    </div>
  );
};

export default CampgroundOverview;
