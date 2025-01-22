import { useState, useEffect } from "react";
import axios from "axios";
import GoodsList from "../GoodsList/GoodsList";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "../Header/Header";

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    axios("https://fakestoreapi.com/products/")
      .then((data) => data && setGoods(data))
      .catch((error) => {
        console.error("Error", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="container content">
      <Header />
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress size="10rem" />
        </Box>
      ) : (
        <GoodsList goods={goods.data} />
      )}
    </main>
  );
}
