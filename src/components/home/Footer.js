import React from "react";

export default function Footer() {
  return (
    <div className="bg-grey-light py-16   ">
      <div className="w-11/12 lgL:w-10/12  2xlL:w-8/12  ml-auto mr-auto">
        <div className="border border-white-light my-4  "></div>

        <div className="grid grid-cols-12 gap-8  mt-8  text-center lgL:text-left  ">
          <div className=" col-span-12  lgL:col-span-5 ">
            <h1 className="text-black f-f-b text-tiny  ">About Rareblocks</h1>
            <h2 className=" text-grey f-f-r text-smLa mt-3 ">
              Adipiscing cursus metus in est aliquam diam sed nulla in. Sit quam
              in egestas morbi. Vel diam praesent netus sem amet urna non. Porta
              blandit sagittis purus a. Nisl pretium aliquam platea duis nunc
              rhoncus. Vitae morbi facilisis nisl vitae.
            </h2>
            <ul className=" inline-flex  mt-6">
              <li>
                <i
                  className="fa fa-twitter fa-lg cursor-pointer    "
                  aria-hidden="true"
                ></i>
              </li>
              <li>
                <i
                  className="fa fa-facebook fa-lg cursor-pointer ml-5  "
                  aria-hidden="true"
                ></i>
              </li>
              <li>
                <i
                  className="fa fa-instagram fa-lg cursor-pointer ml-5  "
                  aria-hidden="true"
                ></i>
              </li>
              <li>
                <i
                  className="fa fa-github fa-lg cursor-pointer ml-5  "
                  aria-hidden="true"
                ></i>
              </li>
            </ul>
          </div>
          <div className=" col-span-12 lgL:col-span-7 ">
            <div className="grid grid-cols-12 smL:gap-12     ">
              <div className=" col-span-6  smL:col-span-4  lgL:col-span-4 ">
                <h2 className=" text-black f-f-b text-tiny ">Company</h2>
                <ul>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-smLa ">
                      {" "}
                      About{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-smLa  ">
                      {" "}
                      Features{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-smLa  ">
                      {" "}
                      Works{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-smLa  ">
                      {" "}
                      Career{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className=" col-span-6  smL:col-span-4  lgL:col-span-4 ">
                <h2 className=" text-black f-f-b text-tiny ">Help</h2>
                <ul>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-smLa ">
                      {" "}
                      Customer Support{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-smLa  ">
                      {" "}
                      Delivery Details{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-smLa  ">
                      {" "}
                      Terms & Conditions{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-smLa  ">
                      {" "}
                      Privacy Policy{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <div className=" col-start-3 col-end-11  smL:col-span-4  lgL:col-span-4  mt-8 smL:mt-0 ">
                <h2 className=" text-black f-f-b text-tiny ">Company</h2>
                <ul>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-smLa ">
                      {" "}
                      Free eBooks{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-smLa  ">
                      {" "}
                      Development Tutorial{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-smLa  ">
                      {" "}
                      How to - Blog{" "}
                    </a>{" "}
                  </li>
                  <li className="mt-3">
                    {" "}
                    <a href="#" className=" f-f-r text-grey text-smLa  ">
                      {" "}
                      Youtube Playlist{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
