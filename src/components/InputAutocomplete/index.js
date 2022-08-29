import styles from "../InputAutocomplete/InputAutocomplete.module.scss";
import React, {useCallback, useEffect, useState} from "react";
import {log} from "../../utils/logToAnalytics";

export const InputAutocomplete = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [resultIndex, setResultIndex] = useState(0);

  useEffect(() => {
    if (result) {
      const newIndex = props.results.map(r => r.id).indexOf(result.id)
      setResultIndex(newIndex);
      props.setSelectedCampgroundId(result.id);
    }
  }, [ result, props.setSelectedCampgroundId]);

  useEffect(() => {
    if (props.query) {
      const getAutocompleteCampgrounds = async () => {
        setLoading(true);
        try {
          const res = await fetch(`${process.env.REACT_APP_THE_DYRT_API_URL}/api/v5/autocomplete/campgrounds?q=${props.query}`)
          props.setResults(await res.json())
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };

      getAutocompleteCampgrounds();
    }
  }, [props.query, props.setResults]);

  const logToAnalytics = useCallback(() => {
    log('search-dropdown-enter', props.results);
  }, [props.results]);

  // If released key is our target key then set to false
  const keyPressEvent = (key) => {

    console.log('Active Index', key, resultIndex)
    let newIndex = resultIndex;

    if (key === 'ArrowUp') {
      newIndex = newIndex > 0 ? --newIndex : 0;
    };
    if (key === "ArrowDown") {
      newIndex = resultIndex <= props.results.length ? ++ newIndex : props.results.length
      console.log('USER PRESSED DOWN', resultIndex, newIndex)
    };

    setResult(props.results[newIndex]);
  };


  return (
    <div className={`${styles['search']}  `}>
      <div className={styles['search__input-container']}
           onClick={() => {
             setShowMenu(!showMenu);
           }}
      >
        <input
          className={`${styles['search__input']}`}
          placeholder="Where would you like to camp?"
          onChange={(e) => {
            props.setQuery(e.target.value);
          }}

        />
      </div>
      <div
        className={`${styles['search__dropdown']} ${
          showMenu && props.query ? styles['search__dropdown--active'] : undefined
        }`}
        onMouseEnter={logToAnalytics}
        onKeyDown={(e) => {
          keyPressEvent(e.key)
        }}
      >
        {
          loading && <p>Loading ...</p>
        }
        {
          props.results.length ? (
            props.results.map((r, index) => (
              <div
                key={index}
                className={`${styles['search__dropdown__item']} ${result?.name === r?.name ? styles['search__dropdown__item--active'] : undefined }`}
                tabIndex="0"
                onClick={() => {
                  setResult(r);
                }}
              >
                <p>{r.name}</p>
              </div>
            ))
        ) : (
            !loading && <p>No Results</p>
        )}
      </div>
    </div>
  );
};
