import React, { useCallback, useEffect, useState } from 'react';
import { log } from '../../utils/logToAnalytics';

import styles from './Sidebar.module.scss';

export const Sidebar = ({
  setSelectedCampgroundId, //  TODO: eslint warning React Hook useEffect has a missing dependency:
  results, //  TODO: eslint warning React Hook useEffect has a missing dependency:
  setResults, //  TODO: eslint warning React Hook useEffect has a missing dependency:
  query,
  setQuery,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    if (result) {
      console.log('result has updated', result)
      setSelectedCampgroundId(result.id);
    }
  }, [result]);

  useEffect(() => {
    if (query) {
      const getAutocompleteCampgrounds = async () => {
        setLoading(true);
        try {
          const res = await fetch(`${process.env.REACT_APP_THE_DYRT_API_URL}/api/v5/autocomplete/campgrounds?q=${query}`)
          setResults(await res.json())
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };

      getAutocompleteCampgrounds();
    }
  }, [query]);

  const logToAnalytics = useCallback(() => {
    log('search-dropdown-enter', results);
  }, []);

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__content']}>
        <div className={styles['search']}>
          <div className={styles['search__input-container']}>
            <input
              className={styles['search__input']}
              placeholder="Where would you like to camp?"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          </div>

          <div
            className={`${styles['search__dropdown']} ${
              showMenu && query ? styles['search__dropdown--active'] : undefined
            }`}
            onMouseEnter={logToAnalytics}
          >
            {
              /* TODO: Zenner Notes - Improve user experience when there are no results */
            }
            {loading ? (
              <p>Loading ...</p>
            ) : (
              results.map((result, index) => (
                <div
                  key={index}
                  className={styles['search__dropdown__item']}
                  onClick={() => {
                    setResult(result);
                    setShowMenu(!showMenu);
                  }}
                >
                  <p>{result.name}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
