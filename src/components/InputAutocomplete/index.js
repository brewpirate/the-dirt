import styles from "../InputAutocomplete/InputAutocomplete.module.scss";
import React, { useCallback, useEffect, useState } from "react";
import { log } from "../../utils/logToAnalytics";

export const InputAutocomplete = ({
    setSelectedCampgroundId,
    results,
    setResults,
    query,
    setQuery,
  }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [resultIndex, setResultIndex] = useState(0);

  useEffect(() => {
    if (result) {
      const newIndex = results.map((r) => r.id).indexOf(result.id);
      setResultIndex(newIndex);
      setSelectedCampgroundId(result.id);
    }
  }, [result, results, setSelectedCampgroundId]);

  useEffect(() => {
    if (query) {
      const getAutocompleteCampgrounds = async () => {
        setLoading(true);
        try {
          const res = await fetch(
            `${process.env.REACT_APP_THE_DYRT_API_URL}/api/v5/autocomplete/campgrounds?q=${query}`
          );
          setResults(await res.json());
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };

      getAutocompleteCampgrounds();
    }
  }, [query, setResults]);

  const logToAnalytics = useCallback(() => {
    log("search-dropdown-enter", results);
  }, [results]);

  // Allow for a user to navigate using Up and Down arrows
  const keyPressEvent = (key) => {
    let newIndex = resultIndex;

    if (key === "ArrowUp") {
      newIndex = newIndex > 0 ? --newIndex : 0;
    }
    if (key === "ArrowDown") {
      newIndex = resultIndex <= results.length ? ++newIndex : results.length;
    }

    setResult(results[newIndex]);
  };

  return (
    <div className={`${styles["search"]}  `}>
      <div
        className={styles["search__input-container"]}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <input
          className={`${styles["search__input"]}`}
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
        className={`${styles["search__dropdown"]} ${
          showMenu && query
            ? styles["search__dropdown--active"]
            : undefined
        }`}
        onMouseEnter={logToAnalytics}
        onKeyDown={(e) => {
          keyPressEvent(e.key);
        }}
      >
        { loading && <p>Loading ...</p> }
        { results.length
          ? results.map((r, index) => (
              <div
                key={index}
                className={`${styles["search__dropdown__item"]} ${
                  result?.name === r?.name
                    ? styles["search__dropdown__item--active"]
                    : undefined
                }`}
                tabIndex="0"
                onClick={() => {
                  setResult(r);
                }}
              >
                <p>{r.name}</p>
              </div>
            ))
          : !loading && <p>No Results</p>}
      </div>
    </div>
  );
};
