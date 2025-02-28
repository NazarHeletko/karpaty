"use client";

import Link from "next/link";
import styles from "./FilterRealty.module.css";
import { useState } from "react";
import oblastList from "@/data/locations/oblast.json";
import raionList from "@/data/locations/raion.json";
import cityList from "@/data/locations/city.json";
import Image from "next/image";

const bildingType = [
  { option: "тип", route: "" },
  { option: "будиночки", route: "/house" },
  { option: "котедж", route: "/cottage" },
  { option: "готель", route: "/hotel" },
  { option: "купол", route: "/glamping" },
  { option: "бази відпочинку", route: "/base" },
];

const FilterRealty = ({ building, oblast, raion, city }: any) => {
  const [oblastValue, setOblastValue] = useState(oblast);
  const [raionValue, setRaionValue] = useState(raion);
  const [cityValue, setCityValue] = useState(city);
  const [buildingValue, setBuildingValue] = useState(building);
  const [searchValue, setSearchValue] = useState("");

  const handBuildingChange = (event: any) => {
    setBuildingValue(event.target.value);
  };
  const handOblastChange = (event: any) => {
    setOblastValue(event.target.value);
  };
  const handRaionChange = (event: any) => {
    setRaionValue(event.target.value);
  };
  const handCityChange = (event: any) => {
    setCityValue(event.target.value);
  };

  const handSerchChange = (event: any) => {
    setSearchValue(event.target.value);
  };
  const handSerchClear = (event: any) => {
    setSearchValue("");
  };

  return (
    <div className={styles.filter}>
      <div className={styles.options}>
        <div className={styles["custom-select"]}>
          <select name="oblast" value={oblastValue} onChange={handOblastChange}>
            {oblastList.map((oblast) => (
              <option key={oblast.route} value={oblast.route}>
                {oblast.option}
              </option>
            ))}
          </select>
          <span className={styles["custom-arrow"]}></span>
        </div>
        <div className={styles["custom-select"]}>
          <select name="raion" value={raionValue} onChange={handRaionChange}>
            {oblastValue ? (
              raionList
                .filter((item) => item.oblast === oblastValue)
                .map((el) => (
                  <option key={el.route} value={el.route}>
                    {el.option}
                  </option>
                ))
            ) : (
              <option value="">район</option>
            )}
          </select>
          <span className={styles["custom-arrow"]}></span>
        </div>
        <div className={styles["custom-select"]}>
          <select name="city" value={cityValue} onChange={handCityChange}>
            {raionValue ? (
              [
                {
                  oblast: "",
                  raion: "",
                  city: "",
                  route: "",
                  option: "населений пункт",
                },
                ...cityList.filter((item) => item.raion === raionValue),
              ].map((el) => (
                <option key={el.route} value={el.route}>
                  {el.option}
                </option>
              ))
            ) : (
              <option value="">населений пункт</option>
            )}
          </select>
          <span className={styles["custom-arrow"]}></span>
        </div>
        <div className={styles["custom-select"]}>
          <select
            name="building"
            value={buildingValue}
            onChange={handBuildingChange}
          >
            {bildingType.map((item) => (
              <option key={item.route} value={item.route}>
                {item.option}
              </option>
            ))}
          </select>
          <span className={styles["custom-arrow"]}></span>
        </div>
        <Link
          className={styles["search-btn"]}
          href={`/realty${oblastValue}${raionValue}${cityValue}${buildingValue}`}
        >
          шукати
        </Link>
      </div>
      <div className={styles["serch-favorite"]}>
        <div className={styles["search-input"]}>
          <input
            onChange={handSerchChange}
            type="text"
            placeholder="знайти"
            value={searchValue}
          />
          <div className={styles["clear-search"]} onClick={handSerchClear}>
            <Image
              src="/icons/broom-icon.svg"
              width={18}
              height={18}
              alt="Очистити пошук"
            />
          </div>
        </div>

        <div className={styles["favorite-saved"]}>
          <Image
            src="/icons/favorite-icon.svg"
            width={16}
            height={16}
            alt="Улюблена нерухомість"
          />
          <span>збережені</span>
        </div>
        <div className={styles["city-serch-list"]}>
          {searchValue
            ? cityList
                .filter((item) =>
                  item.option
                    .toLowerCase()
                    .startsWith(searchValue.toLowerCase())
                )
                .map((el) => <Link key={el.route} href={""}>{el.option}</Link>)
            : null}
        </div>
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
