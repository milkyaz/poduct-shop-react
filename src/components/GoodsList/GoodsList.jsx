import Box from "@mui/material/Box";
import GoodsItem from "../GoodsItem/GoodsItem";
import { useState } from "react";
import "./GoodsList.css";

export default function GoodsList({ goods }) {
  console.log(goods);
  const [selectedCategory, setselectedCategory] = useState("All");
  const [val, setVal] = useState('');

  function handleAdd(e) {
    setselectedCategory(e.target.value);
  }

  const ItemToFilter = goods.filter((value) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return value.category === selectedCategory;
    }
  });

  return (
    <>
      <div className="filter-panel__tags">
        <select name="filter" onChange={handleAdd}>
          <option value="All">All</option>
          <option value="audio">Audio</option>
          <option value="gaming">Gaming</option>
          <option value="mobile">Mobile</option>
        </select>
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
        {" "}
        {goods.length > 0 && (
          <ul>
            {ItemToFilter.slice(0,5).map((item) => (
              <GoodsItem
                key={item.id}
                name={item.name}
                category={item.category}
                {...item}
              />
            ))}
          </ul>
        )}
      </Box>
    </>
  );
}
// {
//   goods.map((item) => <GoodsItem key={item.id} {...item} />);
// }
