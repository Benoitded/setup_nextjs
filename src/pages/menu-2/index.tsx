import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import styles from "./Index.module.scss";

export default function Home() {
  return (
    <div
      className={styles.App}
      style={{ height: "100%", display: "flex", alignItems: "center" }}
    >
      <h1>Second page</h1>
    </div>
  );
}
