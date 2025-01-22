import GoodsItem from "../GoodsItem/GoodsItem";
import Box from "@mui/material/Box";

export default function GoodsList(props) {
  const { goods = [] } = props;

  {
    return (
      <Box
        className="box__item"
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
    );
  }
}
