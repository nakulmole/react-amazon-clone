import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/PostLaunch/Uber/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launchtall-hero_3000x1200_1._CB405488972_.jpg"
          alt="banner"
        />

        <div className="home__row">
          <Product
            id="001"
            title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)"
            price={54999.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="002"
            title="Samsung Galaxy M31s (Mirage Black, 6GB RAM, 128GB Storage)"
            mrp={22999.0}
            price={19499.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71BFG8Zu7zL._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="003"
            title="ASUS TUF Gaming FX505DT 15.6'' FHD 120Hz Laptop GTX 1650 4GB Graphics (Ryzen 5-3550H/8GB RAM/512GB PCIe SSD/Windows 10/Stealth Black/2.20 Kg), FX505DT-AL106T"
            mrp={71990.0}
            price={60990.0}
            image="https://images-na.ssl-images-amazon.com/images/I/815K4p82zlL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="004"
            title="Mi Notebook 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop(8GB/256GB SSD/Windows 10/Intel UHD Graphics/Silver/1.5Kg), XMA1901-FC+Webcam"
            price={43999.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71S4h0TL%2BQL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="005"
            title="Lenovo Ideapad S340 Intel Core i5 10th Generation 14 inch FHD Thin and Light Laptop (8GB/1TB HDD + 256 GB SSD/Windows 10/MS Office/Platinum Grey/1.55Kg), 81VV008TIN"
            mrp={81090.0}
            price={56990.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81vIjVjeLIL._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="006"
            title="Acer Nitro VG280K 28 inch UHD 3840 X 2160 Resolution Gaming Monitor (IPS Panel, FreeSync, 60Hz, 4MS, HDR 10, DP, HDMI, Black)"
            mrp={30100.0}
            price={24999.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71Ny6IrYQdL._SL1400_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
