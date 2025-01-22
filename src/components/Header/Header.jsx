import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const IMAGES = {
  image1: new URL("./img/React.png", import.meta.url).href,
  image2: new URL("./img/Pin.png", import.meta.url).href,
  image3: new URL("./img/search.png", import.meta.url).href,
  image4: new URL("./img/Корзина.png", import.meta.url).href,
  image5: new URL("./img/monster.png", import.meta.url).href,
};

function useGeoLocation() {
  const [locationData, setLocationData] = useState(null);
  useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    const res = await axios.get("http://ip-api.com/json");
    console.log(res);
    if (res.status === 200) setLocationData(res.data);
  }

  return {
    city: locationData?.city,
    country: locationData?.country,
    countryCode: locationData?.countryCode,
    lat: locationData?.lat,
    lon: locationData?.lon,
    region: locationData?.regionName,
    regionCode: locationData?.region,
    timezone: locationData?.timezone,
    zip: locationData?.zip,
  };
}

export default function Header() {
  const { city, lat, lon } = useGeoLocation();
  return (
    <header
      className="header"
      style={{ display: "flex", alignItems: "center", width: "983px" }}
    >
      <img
        src={IMAGES.image1}
        alt="react"
        className="header__logo"
        style={{ width: "103px", height: "43px" }}
      />
      <div
        className="location"
        style={{
          display: "flex",
          alignItems: "center",
          width: "164px",
          marginLeft: "20px",
          marginRight: "20px",
          gap: "5px",
        }}
      >
        <img
          src={IMAGES.image2}
          alt="pin"
          style={{ width: "20px", height: "20px" }}
        />
        <p>{city}</p>
      </div>

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
            placeholder="Поиск бренда, товара, категории..."
            style={{
              width: "374px",
              marginLeft: "20px",
              marginTop: "16px",
              marginBottom: "15px",
            }}
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
    </header>
  );
}
