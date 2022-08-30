import React from "react";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <h1 className={styles["title"]}>The Dirt</h1>
    </div>
  );
};

export default Header;
