import React from "react";
import Slider from "react-slick";
import Harmony from "../../assets/images/Harmony.png";
import BUSD from "../../assets/images/BUSD.png";
import BNB2 from "../../assets/images/BNB2.png";
import KNC from "../../assets/images/KNC.png";
import Polygon from "../../assets/images/Polygon.png";
import Gnosis from "../../assets/images/Gnosis.png";
import Uniswap from "../../assets/images/Uniswap.png";
import USDC from "../../assets/images/USDC.png";

export default function Suppported() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1215,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-grey-light py-6 ">
      <div className="w-11/12 lgL:w-10/12 2xlL:w-8/12  ml-auto mr-auto">
        <h1 className=" text-black text-center text-lgLa smL:text-xlLa f-f-b ">
          Suppported Currency
        </h1>

        <Slider {...settings} className="my-6">
          <div>
            <img src={Harmony} height="64px" width="64px" />
          </div>
          <div>
            <img src={BUSD} height="64px" width="64px" />
          </div>
          <div>
            <img src={BNB2} height="64px" width="64px" />
          </div>
          <div>
            <img src={KNC} height="64px" width="64px" />
          </div>
          <div>
            <img src={Polygon} height="64px" width="64px" />
          </div>
          <div>
            <img src={Gnosis} height="64px" width="64px" />
          </div>
          <div>
            <img src={Uniswap} height="64px" width="64px" />
          </div>
          <div>
            <img src={USDC} height="64px" width="64px" />
          </div>
          <div>
            <img src={BNB2} height="64px" width="64px" />
          </div>
          <div>
            <img src={KNC} height="64px" width="64px" />
          </div>
          <div>
            <img src={Polygon} height="64px" width="64px" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
