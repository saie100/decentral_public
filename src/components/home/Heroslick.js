import React from "react";
import Slider from "react-slick";
import Btoken from "../../assets/images/Btoken.png";
import bpt from "../../assets/images/bpt.png";
import ban from "../../assets/images/ban.png";
import dai from "../../assets/images/dai.png";
import eth from "../../assets/images/eth.png";
import link from "../../assets/images/link.png";
import dop from "../../assets/images/dop.png";
import bnb from "../../assets/images/bnb.png";

export default function Heroslick() {
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-grey-light py-4 ">
        <Slider {...settings}>
          <div>
            <ul className="inline-flex">
              <li>
                <img src={Btoken} height="20px" width="20px" />
              </li>
              <li>
                <h1 className=" f-f-r text-grey text-xsLa smL:text-smLa ml-2">
                  btc $0.999962
                </h1>
              </li>
            </ul>
          </div>
          <div>
            <ul className="inline-flex">
              <li>
                <img src={bpt} height="20px" width="20px" />
              </li>
              <li>
                <h1 className=" f-f-r text-grey text-xsLa smL:text-smLa ml-2">
                  bpt $0.999962
                </h1>
              </li>
            </ul>
          </div>
          <div>
            <ul className="inline-flex">
              <li>
                <img src={ban} height="20px" width="20px" />
              </li>
              <li>
                <h1 className=" f-f-r text-grey text-xsLa smL:text-smLa ml-2">
                  bancor $0.999962
                </h1>
              </li>
            </ul>
          </div>
          <div>
            <ul className="inline-flex">
              <li>
                <img src={dai} height="20px" width="20px" />
              </li>
              <li>
                <h1 className=" f-f-r text-grey text-xsLa smL:text-smLa ml-2">
                  dai $0.999962
                </h1>
              </li>
            </ul>
          </div>
          <div>
            <ul className="inline-flex">
              <li>
                <img src={eth} height="20px" width="20px" />
              </li>
              <li>
                <h1 className=" f-f-r text-grey text-xsLa smL:text-smLa ml-2">
                  eth $0.999962
                </h1>
              </li>
            </ul>
          </div>
          <div>
            <ul className="inline-flex">
              <li>
                <img src={link} height="20px" width="20px" />
              </li>
              <li>
                <h1 className=" f-f-r text-grey text-xsLa smL:text-smLa ml-2">
                  link $0.999962
                </h1>
              </li>
            </ul>
          </div>
          <div>
            <ul className="inline-flex">
              <li>
                <img src={dop} height="20px" width="20px" />
              </li>
              <li>
                <h1 className=" f-f-r text-grey text-xsLa smL:text-smLa ml-2">
                  dop $0.999962
                </h1>
              </li>
            </ul>
          </div>
          <div>
            <ul className="inline-flex">
              <li>
                <img src={bnb} height="20px" width="20px" />
              </li>
              <li>
                <h1 className=" f-f-r text-grey text-xsLa smL:text-smLa ml-2">
                  bnb $0.999962
                </h1>
              </li>
            </ul>
          </div>
          <div>
            <ul className="inline-flex">
              <li>
                <img src={ban} height="20px" width="20px" />
              </li>
              <li>
                <h1 className=" f-f-r text-grey text-xsLa smL:text-smLa ml-2">
                  bancor $0.999962
                </h1>
              </li>
            </ul>
          </div>
        </Slider>
      </div>
    </>
  );
}
