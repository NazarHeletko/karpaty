"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MainMenu from "../MainMenu/MainMenu";

export default function Header() {
  const [menuState, setMenuState] = useState(false);
  const [mobileMenuState, setMobileMenuState] = useState(false);
  const menuOpenHandler = (isOpen: boolean) => {
    setMenuState(isOpen);
  };
  const menuMobileOpenHandler = (isOpen: boolean) => {
    setMobileMenuState(isOpen);
  };
  return (
    <div className={styles.header}>
      <div className={styles["header-content"]}>
        <Link href="/">
          <div className={styles.logo}>
            <Image
              priority
              src="/icons/mountain-logo.svg"
              height={32}
              width={32}
              alt="Follow us on Twitter"
            />
            <div>
              <h3>
                мої <br /> карпати
              </h3>
            </div>
          </div>
        </Link>

        <nav>
          <ul>
            <li onClick={() => menuOpenHandler(true)}>де відпочити</li>
            <li>
              <Link href="/realty">нерухомість</Link>
            </li>
            <li>
              <Link href="/blog">блог</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div
        style={{ width: "100%", position: "fixed" }}
        className={`${menuState ? styles["menu-wrapper"] : ""}`}
        onClick={() => setMenuState(false)}
      >
        <div
          className={`${styles["menu"]} ${
            menuState ? styles["open-menu"] : ""
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles["menu-container"]}>
            <div
              className={styles["close-btn"]}
              onClick={() => menuOpenHandler(false)}
            >
              <Image src="/icons/close-button-icon.svg" fill alt="Закрити" />
            </div>
            <MainMenu />
          </div>
        </div>
      </div>

      <div className={styles["mobile-menu"]}>
        {mobileMenuState && (
          <div
            onClick={() => setMobileMenuState(false)}
            className={styles["mobile-menu-items-wrapper"]}
          ></div>
        )}
        <div
          className={`${styles["nav-icon1"]} ${
            mobileMenuState ? styles.open : ""
          }`}
          onClick={() => menuMobileOpenHandler(!mobileMenuState)}
        >
          <span></span>
          <span></span>
          <span></span>

          {mobileMenuState && (
            <div
              onClick={(e) => e.stopPropagation()}
              className={styles["mobile-menu-items"]}
            >
              <ul>
                <li>
                  <Link href="/">Блог</Link>
                </li>
                <li>
                  <Link href="/">Контакти</Link>
                </li>
                <li>
                  <Link href="/realty">Нерухомість</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
