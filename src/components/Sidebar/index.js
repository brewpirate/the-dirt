import React from 'react';
import {InputAutocomplete} from "../InputAutocomplete";

import styles from './Sidebar.module.scss';



export const Sidebar = (props) => {
  return (
    <div className={`${styles['sidebar']} `}>
      <div className={styles['sidebar__content']}>
          <InputAutocomplete
            setSelectedCampgroundId={props.setSelectedCampgroundId}
            results={props.results}
            setResults={props.setResults}
            query={props.query}
            setQuery={props.setQuery}
          />
        </div>
      </div>
  );
};
