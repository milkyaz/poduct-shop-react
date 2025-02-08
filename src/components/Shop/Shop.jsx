import { useState, useEffect } from "react";
import GoodsList from "../GoodsList/GoodsList";
import Header from "../Header/Header";

export default function Shop({ goods }) {
  return (
    <main className="container content">
      <Header />
      <GoodsList goods={goods} />
    </main>
  );
}
