import { useState, useEffect } from "react";

import GoodsList from "../GoodsList/GoodsList";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "../Header/Header";

export default function Shop() {
  return (
    <main className="container content">
      <Header />
      <GoodsList />
    </main>
  );
}
