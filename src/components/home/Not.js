import React from "react";
import instance from "../../assets/images/instance.png";
import manage from "../../assets/images/manage.png";
import send from "../../assets/images/send.png";
import donec from "../../assets/images/donec.png";
import habitant from "../../assets/images/habitant.png";
import ultratic from "../../assets/images/ultratic.png";

export default function Not() {
  return (
    <div className="bg-white py-6    ">
      <div className="w-11/12 smL:w-10/12 lgL:w-5/12   ml-auto mr-auto">
        <h1 className=" text-center text-black f-f-b text-2xlLa mt-10 ">
          Not your keys, not your crypto!
        </h1>
        <p className=" text-grey f-f-r text-tiny text-center mt-3 ">
          We know self-custody can be hard. That’s why we provide tools to make
          self-custody easier.{" "}
        </p>
      </div>
      <div className="w-11/12 smL:w-9/12  2xlL:w-8/12  ml-auto mr-auto">
        <div className="grid grid-cols-12 gap-6  mt-28    ">
          <div className=" col-span-12  smL:col-span-6 lgL:col-span-4">
            <img
              src={instance}
              height="60px"
              width="60px"
              className="ml-auto mr-auto"
            />
            <h1 className=" text-black f-f-b text-baseLa text-center mt-3 ">
              Instantaneously Buy and Sell Crypto
            </h1>
            <h2 className="text-tiny text-grey f-f-r text-center ">
              No more waiting 5-7 business to use your crypto like with
              centralized exchanges. With Decentral you can instantly buy, sell,
              and use your crypto.
            </h2>
          </div>
          <div className=" col-span-12  smL:col-span-6 lgL:col-span-4">
            <img
              src={manage}
              height="60px"
              width="60px"
              className="ml-auto mr-auto"
            />
            <h1 className=" text-black f-f-b text-baseLa text-center mt-3 ">
              Manage Your Crypto Portfolio
            </h1>
            <h2 className="text-tiny text-grey f-f-r text-center ">
              View and manage your crypto profolio.{" "}
            </h2>
          </div>
          <div className=" col-span-12  smL:col-span-6 lgL:col-span-4">
            <img
              src={send}
              height="60px"
              width="60px"
              className="ml-auto mr-auto"
            />
            <h1 className=" text-black f-f-b text-baseLa text-center mt-3 ">
              Send Crypto To Friends and Family
            </h1>
            <h2 className="text-tiny text-grey f-f-r text-center ">
              Easily send crypto to friends and family with a click of a button.
            </h2>
          </div>
          <div className=" col-span-12  smL:col-span-6 lgL:col-span-4 smL:mt-7 ">
            <img
              src={donec}
              height="60px"
              width="60px"
              className="ml-auto mr-auto"
            />
            <h1 className=" text-black f-f-b text-baseLa text-center mt-3 ">
              Donec praesent
            </h1>
            <h2 className="text-tiny text-grey f-f-r text-center ">
              Odio semper sit eget est platea. Gravida ultrices egestas neque
              odio massa pellentesque velit ac orci.{" "}
            </h2>
          </div>
          <div className=" col-span-12  smL:col-span-6 lgL:col-span-4 smL:mt-7 ">
            <img
              src={habitant}
              height="60px"
              width="60px"
              className="ml-auto mr-auto"
            />
            <h1 className=" text-black f-f-b text-baseLa text-center mt-3 ">
              Habitant risus
            </h1>
            <h2 className="text-tiny text-grey f-f-r text-center ">
              Adipiscing elit eu tempus velit egestas vulputate pellentesque.
              Faucibus est in odio facilisis.
            </h2>
          </div>
          <div className=" col-span-12  smL:col-span-6 lgL:col-span-4 smL:mt-7 ">
            <img
              src={ultratic}
              height="60px"
              width="60px"
              className="ml-auto mr-auto"
            />
            <h1 className=" text-black f-f-b text-baseLa text-center mt-3 ">
              Ultricies viverra
            </h1>
            <h2 className="text-tiny text-grey f-f-r text-center ">
              Neque blandit adipiscing aliquet adipiscing pretium, at quisque
              odio metus. Quis augue ultrices tortor.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
