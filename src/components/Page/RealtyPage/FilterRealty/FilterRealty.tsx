"use client";

import Link from "next/link";
import styles from "./FilterRealty.module.css";


const FilterRealty = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.options}>
        <div className={styles["custom-select"]}>
          <select name="oblast">
            <option value="">область</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
          <span className={styles["custom-arrow"]}></span>
        </div>
        <div className={styles["custom-select"]}>
          <select name="raion">
            <option value="">район</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
          <span className={styles["custom-arrow"]}></span>
        </div>
        <div className={styles["custom-select"]}>
          <select name="city">
            <option value="">населений пункт</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
          <span className={styles["custom-arrow"]}></span>
        </div>
        <div className={styles["custom-select"]}>
        <select name="building">
          <option value="">тип</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <span className={styles["custom-arrow"]}></span>
        </div>
        <Link className={styles["search-btn"]} href="/">шукати</Link>
      </div>
      <div className={styles.relax}>
        <Link href="/">спа</Link>
        <Link href="/">сауни</Link>
        <Link href="/">басейни</Link>
        <Link href="/">чани</Link>
      </div>
    </div>
  );
};

export default FilterRealty;
