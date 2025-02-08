import { useState } from "react";

const IMAGES = {
  image3: new URL("./img/search.png", import.meta.url).href,
  image4: new URL("./img/Корзина.png", import.meta.url).href,
  image5: new URL("./img/monster.png", import.meta.url).href,
};

export default function ShopForm() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <form
        className="search-form"
        style={{
          display: "flex",
          width: "491px",
          border: "1px solid #F0F4FB",
          alignItems: "center",
          borderRadius: "36px",
        }}
      >
        <div className="search-form__content">
          <input
            className="search-form__input"
            style={{
              width: "374px",
              marginLeft: "20px",
              marginTop: "16px",
              marginBottom: "15px",
            }}
            placeholder="Поиск..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          className="search-form__button"
          style={{
            width: "94px",
            height: "42px",
            marginRight: "4px",
            backgroundColor: "#F0F4FB",
            borderRadius: "41px",
          }}
        >
          <img
            src={IMAGES.image3}
            alt="pin"
            style={{ width: "20px", height: "20px" }}
          />
        </button>
      </form>
      <button className="header__card-button">
        {" "}
        <img
          src={IMAGES.image4}
          alt="cart"
          style={{ width: "50px", height: "50px", marginLeft: "16px" }}
        />
        <img
          src={IMAGES.image5}
          alt="pin"
          style={{
            width: "50px",
            height: "50px",
            marginLeft: "20px",
            marginRight: "49px",
          }}
        />
      </button>
    </>
  );
}
