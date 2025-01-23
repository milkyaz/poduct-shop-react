import GoodsItem from "../GoodsItem/GoodsItem";
import Box from "@mui/material/Box";
import "./GoodsList.css";

export default function GoodsList(props) {
  const { goods = [] } = props;

  {
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
          {goods.map((product) => (
            <GoodsItem key={product.id} {...product} />
          ))}
        </Box>
      </>
    );
  }
}
