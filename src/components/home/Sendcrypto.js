import React from "react";
import sendcrypto from "../../assets/images/sendcrypto.png";
import dealsgraphic from "../../assets/images/Figure.png";
import arrowright from "../../assets/images/arrow-right.png";
import arrowrightblue from "../../assets/images/arrow-right-blue.png";
import Arrow from "../../assets/images/Arrow.svg";

export default function Sendcrypto() {
  return (
    <div className="bg-white py-6   ">
      <div className="w-11/12 lgL:w-10/12 2xlL:w-8/12 ml-auto mr-auto">
        <div className="grid grid-cols-12 gap-4     ">
          <div className=" col-span-12 lgL:col-span-6  lgL:hidden ">
            <img
              src={sendcrypto}
              height="432px"
              width="510px"
              className=" ml-auto mr-auto"
            />
          </div>
          <div className=" col-span-12 lgL:col-span-6 text-center lgL:text-left  ">
            <div className="relative">
              <h1 className="text-black text-xlLa smL:text-4xlLa f-f-b   ">
                Send crypto to friends and family with just a{" "}
                <span className="text-primary cursor-pointer click-img ">
                  click!{" "}
                </span>
              </h1>
            </div>
            <button
              type="button"
              className="text-white bg-primary  focus:ring-4 focus:outline-none  rounded-3xl text-xsLa mdL:text-smLa px-6 py-3 text-center f-f-sm  mt-3 mdL:mr-0 "
            >
              <ul className="inline-flex">
                <li>Get started</li>
                <li>
                  {" "}
                  <img
                    src={arrowright}
                    className="ml-3 mt-1"
                    width="16px"
                    height="16px"
                    alt="Flowbite Logo"
                  />
                </li>
              </ul>
            </button>
          </div>
          <div className=" col-span-12 lgL:col-span-6 hidden lgL:block  ">
            <img
              src={sendcrypto}
              height="432px"
              width="510px"
              className=" ml-auto mr-auto"
            />
          </div>
          <div className=" col-span-12 lgL:col-span-6   ">
            <img
              src={dealsgraphic}
              height="432px"
              width="510px"
              className=" ml-auto mr-auto"
            />
          </div>
          <div className=" col-span-12 lgL:col-span-6  text-center lgL:text-left ">
            <h1 className="text-black text-lgLa smL:text-2xlLa f-f-b  ">
              Connect and chat with friends and family
            </h1>
            <h2 className="text-tiny text-grey f-f-r ">
              Add your friends. Send messages, request and send crypto to your
              friends
            </h2>
            <button
              type="button"
              className="text-primary border border-primary  focus:ring-4 focus:outline-none  rounded-3xl text-xsLa mdL:text-smLa px-6 py-3 text-center f-f-sm  mt-3 mdL:mr-0 "
            >
              <ul className="inline-flex">
                <li>Connect</li>
                <li>
                  {" "}
                  <img
                    src={arrowrightblue}
                    className="ml-3 mt-1"
                    width="16px"
                    height="16px"
                    alt="Flowbite Logo"
                  />
                </li>
              </ul>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
