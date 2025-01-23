import GoodsItem from "../GoodsItem/GoodsItem";
import Box from "@mui/material/Box";
import "./GoodsList.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, selectFilteredProducts } from "../../store/goodsSlice";
import CircularProgress from "@mui/material/CircularProgress";

export default function GoodsList() {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const productsStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
console.log(products.products)
  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productsStatus, dispatch]);
  if (productsStatus === "loading") {
    return <CircularProgress />;
  } else if (productsStatus === "succeeded") {
    return (
      <>
        <div className="filter-panel">
          <div className="filter-panel__text">
            <h3 className="filter-panel__text-title">Категории товаров</h3>
            <h3 className="filter-panel__text-right">Настройки</h3>
          </div>
          <div className="filter-panel__tags">
            <p className="filter-panel__tags__elem-blue">Мужская одежда</p>
            <p className="filter-panel__tags__elem-green">Ювелирка</p>
            <p className="filter-panel__tags__elem-orange">Электроника</p>
            <p className="filter-panel__tags__elem-pink">Женская одежда</p>
          </div>
        </div>
        <Box
          className="box-shop"
          style={{
            display: "flex",
            gap: 40,
            flexWrap: "wrap",
            marginTop: 50,
            width: "916px",
            border: "1px solid",
          }}
        >
          {products.products.slice(0,10).map((product) => (
            <GoodsItem key={product.id} {...product} />
          ))}
        </Box>
      </>
    );
  } else if (productsStatus === "failed") {
    return console.log(error);
  }
}
