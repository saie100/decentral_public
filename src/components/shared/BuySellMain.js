import React, {Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import BuyPopup from './BuyPopup';
import SellPopup from './SellPopup';
import SendPopup from './SendPopup';
import RequestPopup from './RequestPopup';

const BuySellMain = () => {
  const [show, setshow] = React.useState('Buy');
  const [paymentMethod, setpaymentMethod] = React.useState('none');
  const [plan, setPlan] = React.useState('bank of america')

  const [isOpen1, setIsOpen1] = React.useState(false);
  const [showDropDownCoin, setshowDropDownCoin] = React.useState(false);
  const [coin, setCoin] = React.useState('BTC');
  const [eye, seteye] = React.useState(true);
  const [friendsToSelect, setfriendsToSelect] = React.useState(false);
  const [buyModal, setbuyModal] = React.useState(false);
  const [sellModal, setsellModal] = React.useState(false);
  const [sendModal, setsendModal] = React.useState(false);
  const [requestModal, setrequestModal] = React.useState(false);


  function closeModal() {
    setIsOpen1(false);
    setbuyModal(false);
    setpaymentMethod("none")
  }

  function openModal1() {
    setIsOpen1(true)
  }

  function BuyModalFunction() {
    setbuyModal(true)
  }

  function SellModalFunction() {
    setsellModal(true)
  }

  function SendModalFunction() {
    setsendModal(true)
  }

  function RequestModalFunction() {
    setrequestModal(true)
  }
  

  return (
    <>
    <div className="p-2 my-5 bg-white rounded-xl relative mt-2 sm8:mt-6">
            
            <div className="w-full grid grid-cols-4 items-center h-fit bg-[#F7F7F7] rounded-xl overflow-hidden">
               <button onClick={()=> {setshow("Buy")}} className={`${show === "Buy" ? "py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-main-color text-white" : "py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-[#F7F7F7] text-not-black"}`}>Buy</button>
               <button onClick={()=> {setshow("Sell")}} className={`${show === "Sell" ? "py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-main-color text-white" : "py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-[#F7F7F7] text-not-black"}`}>Sell</button>
               <button onClick={()=> {setshow("Send")}} className={`${show === "Send" ? "py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-main-color text-white" : "py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-[#F7F7F7] text-not-black"}`}>Send</button>
               <button onClick={()=> {setshow("Request")}} className={`${show === "Request" ? "py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-main-color text-white" : "py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-[#F7F7F7] text-not-black"}`}>Request</button>
            </div>
  
            <div className="p-3 mt-4">
  
            {
              show === "Buy"
              ?
              <div className="">
               <div className="flex items-center justify-between border-[#F9F9F9]">
                  <div className="flex items-center gap-3 text-main-color flex-row-reverse font-[PlusJakartaSans-Regular]"><div className='flex sm:hidden'>Your Wallet</div> <div className='hidden sm:flex'>oxe44d...07059e</div> <svg width="25" height="27" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9964 5.37513H15.7618C13.7911 5.37859 12.1947 6.93514 12.1911 8.85657C12.1884 10.7823 13.7867 12.3458 15.7618 12.3484H20V12.6543C20 16.0136 17.9636 18 14.5173 18H5.48356C2.03644 18 0 16.0136 0 12.6543V5.33786C0 1.97862 2.03644 0 5.48356 0H14.5138C17.96 0 19.9964 1.97862 19.9964 5.33786V5.37513ZM4.73956 5.36733H10.3796H10.3831H10.3902C10.8124 5.36559 11.1538 5.03019 11.152 4.61765C11.1502 4.20598 10.8053 3.87318 10.3831 3.87491H4.73956C4.32 3.87664 3.97956 4.20858 3.97778 4.61852C3.976 5.03019 4.31733 5.36559 4.73956 5.36733Z" fill="#0085FF"/><path opacity="0.4" d="M14.0374 9.29669C14.2465 10.2479 15.0805 10.9171 16.0326 10.8997H19.2825C19.6787 10.8997 20 10.5716 20 10.1661V7.63452C19.9991 7.22985 19.6787 6.90089 19.2825 6.90002H15.9561C14.8731 6.90351 13.9983 7.80247 14 8.9103C14 9.03997 14.0128 9.16964 14.0374 9.29669Z" fill="#0085FF"/><circle cx="16" cy="8.90002" r="1" fill="#0085FF"/></svg></div>
                                   <div className="flex items-center gap-3 text-main-color font-[PlusJakartaSans-Regular]">{eye === true ? "140,124.58 BIDR" : <span className='translate-y-[3px]'>*********</span>} <svg onClick={()=> {seteye(!eye)}} className={`cursor-pointer ${eye === true ? "" : "hidden"}`} width="25" height="21" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M15.7366 2.04606C17.4439 3.36388 18.8976 5.29455 19.9415 7.70909C20.0195 7.89236 20.0195 8.10667 19.9415 8.28121C17.8537 13.1103 14.1366 16 10 16H9.99024C5.86341 16 2.14634 13.1103 0.0585366 8.28121C-0.0195122 8.10667 -0.0195122 7.89236 0.0585366 7.70909C2.14634 2.87903 5.86341 0 9.99024 0H10C12.0683 0 14.0293 0.717576 15.7366 2.04606ZM6.09756 8C6.09756 10.1333 7.8439 11.8691 10 11.8691C12.1463 11.8691 13.8927 10.1333 13.8927 8C13.8927 5.85697 12.1463 4.12121 10 4.12121C7.8439 4.12121 6.09756 5.85697 6.09756 8Z" fill="#0085FF"/><path d="M12.4309 7.99687C12.4309 9.32536 11.3382 10.4114 10.0016 10.4114C8.65531 10.4114 7.56262 9.32536 7.56262 7.99687C7.56262 7.83203 7.58213 7.67784 7.6114 7.52269H7.66018C8.74311 7.52269 9.62116 6.66936 9.66018 5.60172C9.7675 5.5833 9.88457 5.57263 10.0016 5.57263C11.3382 5.57263 12.4309 6.65869 12.4309 7.99687Z" fill="#0085FF"/></svg> <svg onClick={()=> {seteye(!eye)}} width="25" height="21" className={`cursor-pointer ${eye === false ? "" : "hidden"}`} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1426 5.85739C10.802 5.67568 10.4135 5.57263 10.0018 5.57263C9.8847 5.57263 9.76762 5.5833 9.66031 5.60172C9.62128 6.66936 8.74323 7.52269 7.66031 7.52269H7.61152C7.58226 7.67784 7.56274 7.83203 7.56274 7.99687C7.56274 8.4113 7.66908 8.80213 7.85627 9.14376L11.1426 5.85739Z" fill="#0085FF"/><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M17.7199 3.99401L13.8888 7.82508C13.8914 7.88306 13.8927 7.94138 13.8927 8C13.8927 10.1333 12.1463 11.8691 10 11.8691C9.94899 11.8691 9.89821 11.8681 9.84767 11.8662L6.45365 15.2602C7.57507 15.7451 8.76459 16 9.99024 16H10C14.1366 16 17.8537 13.1103 19.9415 8.28121C20.0195 8.10667 20.0195 7.89236 19.9415 7.70909C19.3307 6.29651 18.5798 5.04955 17.7199 3.99401ZM3.60154 13.3985L6.79427 10.2058C6.35502 9.57962 6.09756 8.81912 6.09756 8C6.09756 5.85697 7.8439 4.12121 10 4.12121C10.8156 4.12121 11.5735 4.37187 12.1997 4.80029L15.2862 1.71387C13.6879 0.598363 11.8887 0 10 0H9.99024C5.86341 0 2.14634 2.87903 0.0585366 7.70909C-0.0195122 7.89236 -0.0195122 8.10667 0.0585366 8.28121C0.965436 10.3789 2.17976 12.1106 3.60154 13.3985Z" fill="#0085FF"/><line x1="17" y1="1.41421" x2="3.41421" y2="15" stroke="#0085FF" strokeWidth="2" strokeLinecap="round"/></svg></div>


               </div>
  
               <div className="mt-5">
               <div className="focus-within:border-main-color relative flex items-center justify-between border border-[#F2F2F2] rounded-lg ">
                    <div className='mr-[10px] flex items-center w-full justify-between pr-2'>
                        <div onMouseEnter={()=> {setshowDropDownCoin(true)}} onMouseLeave={()=> {setshowDropDownCoin(false)}} className='p-2 pr-0 w-fit flex items-center gap-2 flex-row-reverse'><div className='flex gap-1.5'><span className='text-[#11047A] font-bold'>{coin === "BTC" ? "Bitcoin" : coin === "ETH" ? "Ethereum" : coin === "SOL" ? "Solana" : ""}</span>  </div><div className="flex items-center gap-2 border-r border-[#F2F2F2] pr-2 cursor-pointer"><img src="/images/btc.svg" alt="icon" /> <svg className={`${showDropDownCoin === false ? "" : "rotate-180"}`} width="9" height="8" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86603 4.5C3.48113 5.16667 2.51888 5.16667 2.13397 4.5L0.401923 1.5C0.0170231 0.833332 0.498149 -3.85264e-07 1.26795 -4.52563e-07L4.73205 -7.55404e-07C5.50185 -8.22702e-07 5.98298 0.833332 5.59808 1.5L3.86603 4.5Z" fill={showDropDownCoin === false ? "#1A1A1A" : "#0085FF"}/></svg></div></div>
                        <input type="text" className='text-[#11047A] text-right font-extralight text-opacity-50 w-[calc(100%-130px)] outline-0 border-0 ring-0' placeholder={coin} />
                    </div>
                    <div onMouseEnter={()=> {setshowDropDownCoin(true)}} onMouseLeave={()=> {setshowDropDownCoin(false)}} className={`bg-white z-[99] border w-fit absolute top-full left-0 px-2 py-2 border-[#F2F2F2] rounded-2xl ${showDropDownCoin === false ? "hidden" : "flex"}`}>
             <div>
            
             <div className="">
                <div className="sidebar-scroll max-h-[200px] overflow-y-auto flex flex-col w-fit items-center gap-2">
                <label htmlFor="bitcoin1" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin1" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin2" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin2" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin3" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin3" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin4" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin4" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin5" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin5" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin6" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin6" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin7" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin7" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>

                </div>
             </div>
             </div>
           </div>
                </div>

                <div className="focus-within:border-main-color mt-3 flex items-center justify-between border border-[#F2F2F2] rounded-lg p-2 pr-3">
                    <div>
                        <div className='flex items-center gap-2 flex-row-reverse'><div className='flex gap-1.5'><span className='text-[#11047A] font-bold'>USD</span></div><img src="/images/usd.svg" alt="icon" /></div>
                    </div>
                    <input type="text" className='text-[#11047A] text-right w-[calc(100%-140px)] outline-0 border-0 ring-0' placeholder="USD" />
                </div>

                <button onClick={BuyModalFunction} className='w-full flex items-center justify-center py-3 bg-main-color text-white rounded-lg mt-5'>Buy Now</button>
                <div className='text-center mt-4 text-[#11047A] text-opacity-30 text-sm'>The final amount could change depending on the market conditions</div>
             </div>  
               </div>
               :
               show === "Sell"
               ?
               <div className="">
               <div className="flex items-center justify-between border-[#F9F9F9]">
                  <div className="flex items-center gap-3 text-main-color flex-row-reverse font-[PlusJakartaSans-Regular]"><div className='flex sm:hidden'>Your Wallet</div> <div className='hidden sm:flex'>oxe44d...07059e</div>  <svg width="25" height="27" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9964 5.37513H15.7618C13.7911 5.37859 12.1947 6.93514 12.1911 8.85657C12.1884 10.7823 13.7867 12.3458 15.7618 12.3484H20V12.6543C20 16.0136 17.9636 18 14.5173 18H5.48356C2.03644 18 0 16.0136 0 12.6543V5.33786C0 1.97862 2.03644 0 5.48356 0H14.5138C17.96 0 19.9964 1.97862 19.9964 5.33786V5.37513ZM4.73956 5.36733H10.3796H10.3831H10.3902C10.8124 5.36559 11.1538 5.03019 11.152 4.61765C11.1502 4.20598 10.8053 3.87318 10.3831 3.87491H4.73956C4.32 3.87664 3.97956 4.20858 3.97778 4.61852C3.976 5.03019 4.31733 5.36559 4.73956 5.36733Z" fill="#0085FF"/><path opacity="0.4" d="M14.0374 9.29669C14.2465 10.2479 15.0805 10.9171 16.0326 10.8997H19.2825C19.6787 10.8997 20 10.5716 20 10.1661V7.63452C19.9991 7.22985 19.6787 6.90089 19.2825 6.90002H15.9561C14.8731 6.90351 13.9983 7.80247 14 8.9103C14 9.03997 14.0128 9.16964 14.0374 9.29669Z" fill="#0085FF"/><circle cx="16" cy="8.90002" r="1" fill="#0085FF"/></svg></div>
                                   <div className="flex items-center gap-3 text-main-color font-[PlusJakartaSans-Regular]">{eye === true ? "140,124.58 BIDR" : <span className='translate-y-[3px]'>*********</span>} <svg onClick={()=> {seteye(!eye)}} className={`cursor-pointer ${eye === true ? "" : "hidden"}`} width="25" height="21" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M15.7366 2.04606C17.4439 3.36388 18.8976 5.29455 19.9415 7.70909C20.0195 7.89236 20.0195 8.10667 19.9415 8.28121C17.8537 13.1103 14.1366 16 10 16H9.99024C5.86341 16 2.14634 13.1103 0.0585366 8.28121C-0.0195122 8.10667 -0.0195122 7.89236 0.0585366 7.70909C2.14634 2.87903 5.86341 0 9.99024 0H10C12.0683 0 14.0293 0.717576 15.7366 2.04606ZM6.09756 8C6.09756 10.1333 7.8439 11.8691 10 11.8691C12.1463 11.8691 13.8927 10.1333 13.8927 8C13.8927 5.85697 12.1463 4.12121 10 4.12121C7.8439 4.12121 6.09756 5.85697 6.09756 8Z" fill="#0085FF"/><path d="M12.4309 7.99687C12.4309 9.32536 11.3382 10.4114 10.0016 10.4114C8.65531 10.4114 7.56262 9.32536 7.56262 7.99687C7.56262 7.83203 7.58213 7.67784 7.6114 7.52269H7.66018C8.74311 7.52269 9.62116 6.66936 9.66018 5.60172C9.7675 5.5833 9.88457 5.57263 10.0016 5.57263C11.3382 5.57263 12.4309 6.65869 12.4309 7.99687Z" fill="#0085FF"/></svg> <svg onClick={()=> {seteye(!eye)}} width="25" height="21" className={`cursor-pointer ${eye === false ? "" : "hidden"}`} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1426 5.85739C10.802 5.67568 10.4135 5.57263 10.0018 5.57263C9.8847 5.57263 9.76762 5.5833 9.66031 5.60172C9.62128 6.66936 8.74323 7.52269 7.66031 7.52269H7.61152C7.58226 7.67784 7.56274 7.83203 7.56274 7.99687C7.56274 8.4113 7.66908 8.80213 7.85627 9.14376L11.1426 5.85739Z" fill="#0085FF"/><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M17.7199 3.99401L13.8888 7.82508C13.8914 7.88306 13.8927 7.94138 13.8927 8C13.8927 10.1333 12.1463 11.8691 10 11.8691C9.94899 11.8691 9.89821 11.8681 9.84767 11.8662L6.45365 15.2602C7.57507 15.7451 8.76459 16 9.99024 16H10C14.1366 16 17.8537 13.1103 19.9415 8.28121C20.0195 8.10667 20.0195 7.89236 19.9415 7.70909C19.3307 6.29651 18.5798 5.04955 17.7199 3.99401ZM3.60154 13.3985L6.79427 10.2058C6.35502 9.57962 6.09756 8.81912 6.09756 8C6.09756 5.85697 7.8439 4.12121 10 4.12121C10.8156 4.12121 11.5735 4.37187 12.1997 4.80029L15.2862 1.71387C13.6879 0.598363 11.8887 0 10 0H9.99024C5.86341 0 2.14634 2.87903 0.0585366 7.70909C-0.0195122 7.89236 -0.0195122 8.10667 0.0585366 8.28121C0.965436 10.3789 2.17976 12.1106 3.60154 13.3985Z" fill="#0085FF"/><line x1="17" y1="1.41421" x2="3.41421" y2="15" stroke="#0085FF" strokeWidth="2" strokeLinecap="round"/></svg></div>


               </div>
  
               <div className="mt-5">
               <div className="focus-within:border-main-color relative flex items-center justify-between border border-[#F2F2F2] rounded-lg ">
                    <div className='mr-[10px] flex items-center w-full justify-between pr-2'>
                        <div onMouseEnter={()=> {setshowDropDownCoin(true)}} onMouseLeave={()=> {setshowDropDownCoin(false)}} className='p-2 pr-0 w-fit flex items-center gap-2 flex-row-reverse'><div className='flex gap-1.5'><span className='text-[#11047A] font-bold'>{coin === "BTC" ? "Bitcoin" : coin === "ETH" ? "Ethereum" : coin === "SOL" ? "Solana" : ""}</span>  </div><div className="flex items-center gap-2 border-r border-[#F2F2F2] pr-2 cursor-pointer"><img src="/images/btc.svg" alt="icon" /> <svg className={`${showDropDownCoin === false ? "" : "rotate-180"}`} width="9" height="8" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86603 4.5C3.48113 5.16667 2.51888 5.16667 2.13397 4.5L0.401923 1.5C0.0170231 0.833332 0.498149 -3.85264e-07 1.26795 -4.52563e-07L4.73205 -7.55404e-07C5.50185 -8.22702e-07 5.98298 0.833332 5.59808 1.5L3.86603 4.5Z" fill={showDropDownCoin === false ? "#1A1A1A" : "#0085FF"}/></svg></div></div>
                        <input type="text" className='text-[#11047A] text-right font-extralight text-opacity-50 w-[calc(100%-130px)] outline-0 border-0 ring-0' placeholder={coin} />
                    </div>
                    <div onMouseEnter={()=> {setshowDropDownCoin(true)}} onMouseLeave={()=> {setshowDropDownCoin(false)}} className={`bg-white z-[99] border w-fit absolute top-full left-0 px-2 py-2 border-[#F2F2F2] rounded-2xl ${showDropDownCoin === false ? "hidden" : "flex"}`}>
             <div>
            
             <div className="">
                <div className="sidebar-scroll max-h-[200px] overflow-y-auto flex flex-col w-fit items-center gap-2">
                <label htmlFor="bitcoin1" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin1" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin2" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin2" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin3" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin3" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin4" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin4" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin5" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin5" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin6" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin6" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin7" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin7" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>

                </div>
             </div>
             </div>
           </div>
                </div>

                <div className="focus-within:border-main-color mt-3 flex items-center justify-between border border-[#F2F2F2] rounded-lg p-2 pr-3">
                    <div>
                        <div className='flex items-center gap-2 flex-row-reverse'><div className='flex gap-1.5'><span className='text-[#11047A] font-bold'>USD</span></div><img src="/images/usd.svg" alt="icon" /></div>
                    </div>
                    <input type="text" className='text-[#11047A] text-right w-[calc(100%-140px)] outline-0 border-0 ring-0' placeholder="USD" />
                </div>

                <button onClick={SellModalFunction} className='w-full flex items-center justify-center py-3 bg-main-color text-white rounded-lg mt-5'>Sell Now</button>
                <div className='text-center mt-4 text-[#11047A] text-opacity-30 text-sm'>The final amount could change depending on the market conditions</div>
             </div> 
               </div>
               :
               show === "Send"
               ?
               <div className="">
               <div className="flex items-center justify-between border-[#F9F9F9]">
                  <div className="flex items-center gap-3 text-main-color flex-row-reverse font-[PlusJakartaSans-Regular]"><div className='flex sm:hidden'>Your Wallet</div> <div className='hidden sm:flex'>oxe44d...07059e</div>  <svg width="25" height="27" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9964 5.37513H15.7618C13.7911 5.37859 12.1947 6.93514 12.1911 8.85657C12.1884 10.7823 13.7867 12.3458 15.7618 12.3484H20V12.6543C20 16.0136 17.9636 18 14.5173 18H5.48356C2.03644 18 0 16.0136 0 12.6543V5.33786C0 1.97862 2.03644 0 5.48356 0H14.5138C17.96 0 19.9964 1.97862 19.9964 5.33786V5.37513ZM4.73956 5.36733H10.3796H10.3831H10.3902C10.8124 5.36559 11.1538 5.03019 11.152 4.61765C11.1502 4.20598 10.8053 3.87318 10.3831 3.87491H4.73956C4.32 3.87664 3.97956 4.20858 3.97778 4.61852C3.976 5.03019 4.31733 5.36559 4.73956 5.36733Z" fill="#0085FF"/><path opacity="0.4" d="M14.0374 9.29669C14.2465 10.2479 15.0805 10.9171 16.0326 10.8997H19.2825C19.6787 10.8997 20 10.5716 20 10.1661V7.63452C19.9991 7.22985 19.6787 6.90089 19.2825 6.90002H15.9561C14.8731 6.90351 13.9983 7.80247 14 8.9103C14 9.03997 14.0128 9.16964 14.0374 9.29669Z" fill="#0085FF"/><circle cx="16" cy="8.90002" r="1" fill="#0085FF"/></svg></div>
                                   <div className="flex items-center gap-3 text-main-color font-[PlusJakartaSans-Regular]">{eye === true ? "140,124.58 BIDR" : <span className='translate-y-[3px]'>*********</span>} <svg onClick={()=> {seteye(!eye)}} className={`cursor-pointer ${eye === true ? "" : "hidden"}`} width="25" height="21" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M15.7366 2.04606C17.4439 3.36388 18.8976 5.29455 19.9415 7.70909C20.0195 7.89236 20.0195 8.10667 19.9415 8.28121C17.8537 13.1103 14.1366 16 10 16H9.99024C5.86341 16 2.14634 13.1103 0.0585366 8.28121C-0.0195122 8.10667 -0.0195122 7.89236 0.0585366 7.70909C2.14634 2.87903 5.86341 0 9.99024 0H10C12.0683 0 14.0293 0.717576 15.7366 2.04606ZM6.09756 8C6.09756 10.1333 7.8439 11.8691 10 11.8691C12.1463 11.8691 13.8927 10.1333 13.8927 8C13.8927 5.85697 12.1463 4.12121 10 4.12121C7.8439 4.12121 6.09756 5.85697 6.09756 8Z" fill="#0085FF"/><path d="M12.4309 7.99687C12.4309 9.32536 11.3382 10.4114 10.0016 10.4114C8.65531 10.4114 7.56262 9.32536 7.56262 7.99687C7.56262 7.83203 7.58213 7.67784 7.6114 7.52269H7.66018C8.74311 7.52269 9.62116 6.66936 9.66018 5.60172C9.7675 5.5833 9.88457 5.57263 10.0016 5.57263C11.3382 5.57263 12.4309 6.65869 12.4309 7.99687Z" fill="#0085FF"/></svg> <svg onClick={()=> {seteye(!eye)}} width="25" height="21" className={`cursor-pointer ${eye === false ? "" : "hidden"}`} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1426 5.85739C10.802 5.67568 10.4135 5.57263 10.0018 5.57263C9.8847 5.57263 9.76762 5.5833 9.66031 5.60172C9.62128 6.66936 8.74323 7.52269 7.66031 7.52269H7.61152C7.58226 7.67784 7.56274 7.83203 7.56274 7.99687C7.56274 8.4113 7.66908 8.80213 7.85627 9.14376L11.1426 5.85739Z" fill="#0085FF"/><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M17.7199 3.99401L13.8888 7.82508C13.8914 7.88306 13.8927 7.94138 13.8927 8C13.8927 10.1333 12.1463 11.8691 10 11.8691C9.94899 11.8691 9.89821 11.8681 9.84767 11.8662L6.45365 15.2602C7.57507 15.7451 8.76459 16 9.99024 16H10C14.1366 16 17.8537 13.1103 19.9415 8.28121C20.0195 8.10667 20.0195 7.89236 19.9415 7.70909C19.3307 6.29651 18.5798 5.04955 17.7199 3.99401ZM3.60154 13.3985L6.79427 10.2058C6.35502 9.57962 6.09756 8.81912 6.09756 8C6.09756 5.85697 7.8439 4.12121 10 4.12121C10.8156 4.12121 11.5735 4.37187 12.1997 4.80029L15.2862 1.71387C13.6879 0.598363 11.8887 0 10 0H9.99024C5.86341 0 2.14634 2.87903 0.0585366 7.70909C-0.0195122 7.89236 -0.0195122 8.10667 0.0585366 8.28121C0.965436 10.3789 2.17976 12.1106 3.60154 13.3985Z" fill="#0085FF"/><line x1="17" y1="1.41421" x2="3.41421" y2="15" stroke="#0085FF" strokeWidth="2" strokeLinecap="round"/></svg></div>


               </div>
  
               <div className="mt-5">
  
               <div className="focus-within:border-main-color relative flex items-center justify-between border border-[#F2F2F2] rounded-lg ">
                    <div className='mr-[10px] flex items-center w-full justify-between pr-2'>
                        <div onMouseEnter={()=> {setshowDropDownCoin(true)}} onMouseLeave={()=> {setshowDropDownCoin(false)}} className='p-2 pr-0 w-fit flex items-center gap-2 flex-row-reverse'><div className='flex gap-1.5'><span className='text-[#11047A] font-bold'>{coin === "BTC" ? "Bitcoin" : coin === "ETH" ? "Ethereum" : coin === "SOL" ? "Solana" : ""}</span>  </div><div className="flex items-center gap-2 border-r border-[#F2F2F2] pr-2 cursor-pointer"><img src="/images/btc.svg" alt="icon" /> <svg className={`${showDropDownCoin === false ? "" : "rotate-180"}`} width="9" height="8" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86603 4.5C3.48113 5.16667 2.51888 5.16667 2.13397 4.5L0.401923 1.5C0.0170231 0.833332 0.498149 -3.85264e-07 1.26795 -4.52563e-07L4.73205 -7.55404e-07C5.50185 -8.22702e-07 5.98298 0.833332 5.59808 1.5L3.86603 4.5Z" fill={showDropDownCoin === false ? "#1A1A1A" : "#0085FF"}/></svg></div></div>
                        <input type="text" className='text-[#11047A] text-right font-extralight text-opacity-50 w-[calc(100%-130px)] outline-0 border-0 ring-0' placeholder={coin} />
                    </div>
                    <div onMouseEnter={()=> {setshowDropDownCoin(true)}} onMouseLeave={()=> {setshowDropDownCoin(false)}} className={`bg-white z-[99] border w-fit absolute top-full left-0 px-2 py-2 border-[#F2F2F2] rounded-2xl ${showDropDownCoin === false ? "hidden" : "flex"}`}>
             <div>
            
             <div className="">
                <div className="sidebar-scroll max-h-[200px] overflow-y-auto flex flex-col w-fit items-center gap-2">
                <label htmlFor="bitcoin1" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin1" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin2" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin2" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin3" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin3" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin4" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin4" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin5" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin5" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin6" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin6" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin7" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin7" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>

                </div>
             </div>
             </div>
           </div>
                </div>
  
  
  
                  <div className="mt-3 flex items-center justify-between border border-[#F2F2F2] rounded-lg h-[48px] px-3">
                      <div className=''>
                      <span className='text-[15px] sm7:text-[16px] text-[#11047A] font-bold'>Select Friend(s)</span>
                      </div>
                      
                      <div className='flex items-center gap-3 sm7:gap-5'>
                         <div className='flex items-center gap-2'>
                          <div className='relative'>
                            <img src="/images/profile.png" className='w-[36px]' alt="profile" />
                            <button className='absolute -top-[3px] -left-[5px]'><svg width="19" height="19" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect y="8.30176" width="11.7403" height="11.7403" rx="5.87014" transform="rotate(-45 0 8.30176)" fill="#FFCECE"/> <path d="M10.8764 10.8662C10.5557 11.1869 10.0357 11.1869 9.71496 10.8662L8.30171 9.45292L6.88845 10.8662C6.56773 11.1869 6.04774 11.1869 5.72701 10.8662C5.40629 10.5455 5.40629 10.0255 5.72701 9.70473L7.14027 8.29148L5.73729 6.8885C5.41657 6.56778 5.41657 6.04779 5.73729 5.72706C6.05801 5.40634 6.57801 5.40634 6.89873 5.72706L8.30171 7.13004L9.70468 5.72707C10.0254 5.40634 10.5454 5.40634 10.8661 5.72706C11.1868 6.04779 11.1868 6.56778 10.8661 6.8885L9.46315 8.29148L10.8764 9.70474C11.1971 10.0255 11.1971 10.5455 10.8764 10.8662Z" fill="#FF5454"/> </svg></button>
                          </div>
                          <div className='text-[#11047A] font-bold hidden md:block'>Sheira Azzahra Putri</div>
                         </div>
                         <button onClick={openModal1} className='h-[35px] px-3 bg-main-color flex items-center justify-center rounded-md'><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.513 13C5.70169 13 5.044 12.3423 5.044 11.531V7.956H1.469C0.657693 7.956 0 7.29831 0 6.487V6.487C0 5.67569 0.657694 5.018 1.469 5.018H5.044V1.469C5.044 0.657693 5.70169 0 6.513 0V0C7.32431 0 7.982 0.657694 7.982 1.469V5.018H11.531C12.3423 5.018 13 5.67569 13 6.487V6.487C13 7.29831 12.3423 7.956 11.531 7.956H7.982V11.531C7.982 12.3423 7.32431 13 6.513 13V13Z" fill="white"/></svg></button>
                      </div>
  
                  </div>
  
                  
  
                  <button onClick={SendModalFunction} className='w-full flex items-center justify-center py-3 bg-main-color text-white rounded-lg mt-5'>Send Crypto</button>
                  <div className='text-center mt-4 text-[#11047A] text-opacity-30 text-sm'>The final amount could change depending on the market conditions</div>
               </div> 
               </div>
               :
               show === "Request"
               ?
               <div className="">
               <div className="flex items-center justify-between border-[#F9F9F9]">
                  <div className="flex items-center gap-3 text-main-color flex-row-reverse font-[PlusJakartaSans-Regular]"><div className='flex sm:hidden'>Your Wallet</div> <div className='hidden sm:flex'>oxe44d...07059e</div>  <svg width="25" height="27" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9964 5.37513H15.7618C13.7911 5.37859 12.1947 6.93514 12.1911 8.85657C12.1884 10.7823 13.7867 12.3458 15.7618 12.3484H20V12.6543C20 16.0136 17.9636 18 14.5173 18H5.48356C2.03644 18 0 16.0136 0 12.6543V5.33786C0 1.97862 2.03644 0 5.48356 0H14.5138C17.96 0 19.9964 1.97862 19.9964 5.33786V5.37513ZM4.73956 5.36733H10.3796H10.3831H10.3902C10.8124 5.36559 11.1538 5.03019 11.152 4.61765C11.1502 4.20598 10.8053 3.87318 10.3831 3.87491H4.73956C4.32 3.87664 3.97956 4.20858 3.97778 4.61852C3.976 5.03019 4.31733 5.36559 4.73956 5.36733Z" fill="#0085FF"/><path opacity="0.4" d="M14.0374 9.29669C14.2465 10.2479 15.0805 10.9171 16.0326 10.8997H19.2825C19.6787 10.8997 20 10.5716 20 10.1661V7.63452C19.9991 7.22985 19.6787 6.90089 19.2825 6.90002H15.9561C14.8731 6.90351 13.9983 7.80247 14 8.9103C14 9.03997 14.0128 9.16964 14.0374 9.29669Z" fill="#0085FF"/><circle cx="16" cy="8.90002" r="1" fill="#0085FF"/></svg></div>
                  <div className="flex items-center gap-3 text-main-color font-[PlusJakartaSans-Regular]">{eye === true ? "140,124.58 BIDR" : <span className='translate-y-[3px]'>*********</span>} <svg onClick={()=> {seteye(!eye)}} className={`cursor-pointer ${eye === true ? "" : "hidden"}`} width="25" height="21" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M15.7366 2.04606C17.4439 3.36388 18.8976 5.29455 19.9415 7.70909C20.0195 7.89236 20.0195 8.10667 19.9415 8.28121C17.8537 13.1103 14.1366 16 10 16H9.99024C5.86341 16 2.14634 13.1103 0.0585366 8.28121C-0.0195122 8.10667 -0.0195122 7.89236 0.0585366 7.70909C2.14634 2.87903 5.86341 0 9.99024 0H10C12.0683 0 14.0293 0.717576 15.7366 2.04606ZM6.09756 8C6.09756 10.1333 7.8439 11.8691 10 11.8691C12.1463 11.8691 13.8927 10.1333 13.8927 8C13.8927 5.85697 12.1463 4.12121 10 4.12121C7.8439 4.12121 6.09756 5.85697 6.09756 8Z" fill="#0085FF"/><path d="M12.4309 7.99687C12.4309 9.32536 11.3382 10.4114 10.0016 10.4114C8.65531 10.4114 7.56262 9.32536 7.56262 7.99687C7.56262 7.83203 7.58213 7.67784 7.6114 7.52269H7.66018C8.74311 7.52269 9.62116 6.66936 9.66018 5.60172C9.7675 5.5833 9.88457 5.57263 10.0016 5.57263C11.3382 5.57263 12.4309 6.65869 12.4309 7.99687Z" fill="#0085FF"/></svg> <svg onClick={()=> {seteye(!eye)}} width="25" height="21" className={`cursor-pointer ${eye === false ? "" : "hidden"}`} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1426 5.85739C10.802 5.67568 10.4135 5.57263 10.0018 5.57263C9.8847 5.57263 9.76762 5.5833 9.66031 5.60172C9.62128 6.66936 8.74323 7.52269 7.66031 7.52269H7.61152C7.58226 7.67784 7.56274 7.83203 7.56274 7.99687C7.56274 8.4113 7.66908 8.80213 7.85627 9.14376L11.1426 5.85739Z" fill="#0085FF"/><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M17.7199 3.99401L13.8888 7.82508C13.8914 7.88306 13.8927 7.94138 13.8927 8C13.8927 10.1333 12.1463 11.8691 10 11.8691C9.94899 11.8691 9.89821 11.8681 9.84767 11.8662L6.45365 15.2602C7.57507 15.7451 8.76459 16 9.99024 16H10C14.1366 16 17.8537 13.1103 19.9415 8.28121C20.0195 8.10667 20.0195 7.89236 19.9415 7.70909C19.3307 6.29651 18.5798 5.04955 17.7199 3.99401ZM3.60154 13.3985L6.79427 10.2058C6.35502 9.57962 6.09756 8.81912 6.09756 8C6.09756 5.85697 7.8439 4.12121 10 4.12121C10.8156 4.12121 11.5735 4.37187 12.1997 4.80029L15.2862 1.71387C13.6879 0.598363 11.8887 0 10 0H9.99024C5.86341 0 2.14634 2.87903 0.0585366 7.70909C-0.0195122 7.89236 -0.0195122 8.10667 0.0585366 8.28121C0.965436 10.3789 2.17976 12.1106 3.60154 13.3985Z" fill="#0085FF"/><line x1="17" y1="1.41421" x2="3.41421" y2="15" stroke="#0085FF" strokeWidth="2" strokeLinecap="round"/></svg></div>

               </div>
  
               <div className="mt-5">
  
               <div className="flex items-center justify-between border border-[#F2F2F2] rounded-lg h-[48px] px-3">
                      <div className=''>
                      <span className='text-[15px] sm7:text-[16px] text-[#11047A] font-bold'>Select Friend(s)</span>
                      </div>
                      
                      <div className='flex items-center gap-5'>
                         <div className='flex items-center gap-2'>
                          <div className='relative'>
                            <img src="/images/profile.png" className='w-[36px]' alt="profile" />
                            <button className='absolute -top-[3px] -left-[5px]'><svg width="19" height="19" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect y="8.30176" width="11.7403" height="11.7403" rx="5.87014" transform="rotate(-45 0 8.30176)" fill="#FFCECE"/> <path d="M10.8764 10.8662C10.5557 11.1869 10.0357 11.1869 9.71496 10.8662L8.30171 9.45292L6.88845 10.8662C6.56773 11.1869 6.04774 11.1869 5.72701 10.8662C5.40629 10.5455 5.40629 10.0255 5.72701 9.70473L7.14027 8.29148L5.73729 6.8885C5.41657 6.56778 5.41657 6.04779 5.73729 5.72706C6.05801 5.40634 6.57801 5.40634 6.89873 5.72706L8.30171 7.13004L9.70468 5.72707C10.0254 5.40634 10.5454 5.40634 10.8661 5.72706C11.1868 6.04779 11.1868 6.56778 10.8661 6.8885L9.46315 8.29148L10.8764 9.70474C11.1971 10.0255 11.1971 10.5455 10.8764 10.8662Z" fill="#FF5454"/> </svg></button>
                          </div>
                          <div className='text-[#11047A] font-bold hidden md:block'>Sheira Azzahra Putri</div>
                         </div>
                         <button onClick={openModal1} className='h-[35px] px-3 bg-main-color flex items-center justify-center rounded-md'><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.513 13C5.70169 13 5.044 12.3423 5.044 11.531V7.956H1.469C0.657693 7.956 0 7.29831 0 6.487V6.487C0 5.67569 0.657694 5.018 1.469 5.018H5.044V1.469C5.044 0.657693 5.70169 0 6.513 0V0C7.32431 0 7.982 0.657694 7.982 1.469V5.018H11.531C12.3423 5.018 13 5.67569 13 6.487V6.487C13 7.29831 12.3423 7.956 11.531 7.956H7.982V11.531C7.982 12.3423 7.32431 13 6.513 13V13Z" fill="white"/></svg></button>
                      </div>
                  </div>
  
  
                  <div className="mt-3 focus-within:border-main-color relative flex items-center justify-between border border-[#F2F2F2] rounded-lg ">
                    <div className='mr-[10px] flex items-center w-full justify-between pr-2'>
                        <div onMouseEnter={()=> {setshowDropDownCoin(true)}} onMouseLeave={()=> {setshowDropDownCoin(false)}} className='p-2 pr-0 w-fit flex items-center gap-2 flex-row-reverse'><div className='flex gap-1.5'><span className='text-[#11047A] font-bold'>{coin === "BTC" ? "Bitcoin" : coin === "ETH" ? "Ethereum" : coin === "SOL" ? "Solana" : ""}</span>  </div><div className="flex items-center gap-2 border-r border-[#F2F2F2] pr-2 cursor-pointer"><img src="/images/btc.svg" alt="icon" /> <svg className={`${showDropDownCoin === false ? "" : "rotate-180"}`} width="9" height="8" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86603 4.5C3.48113 5.16667 2.51888 5.16667 2.13397 4.5L0.401923 1.5C0.0170231 0.833332 0.498149 -3.85264e-07 1.26795 -4.52563e-07L4.73205 -7.55404e-07C5.50185 -8.22702e-07 5.98298 0.833332 5.59808 1.5L3.86603 4.5Z" fill={showDropDownCoin === false ? "#1A1A1A" : "#0085FF"}/></svg></div></div>
                        <input type="text" className='text-[#11047A] text-right font-extralight text-opacity-50 w-[calc(100%-130px)] outline-0 border-0 ring-0' placeholder={coin} />
                    </div>
                    <div onMouseEnter={()=> {setshowDropDownCoin(true)}} onMouseLeave={()=> {setshowDropDownCoin(false)}} className={`bg-white z-[99] border w-fit absolute top-full left-0 px-2 py-2 border-[#F2F2F2] rounded-2xl ${showDropDownCoin === false ? "hidden" : "flex"}`}>
             <div>
            
             <div className="">
                <div className="sidebar-scroll max-h-[200px] overflow-y-auto flex flex-col w-fit items-center gap-2">
                <label htmlFor="bitcoin1" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin1" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin2" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin2" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin3" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin3" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin4" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin4" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin5" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin5" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin6" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin6" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin7" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin7" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /></label>

                </div>
             </div>
             </div>
           </div>
                </div>

                
  
                  <button onClick={RequestModalFunction} className='w-full flex items-center justify-center py-3 bg-main-color text-white rounded-lg mt-5'>Request Crypto</button>
                  <div className='text-center mt-4 text-[#11047A] text-opacity-30 text-sm'>The final amount could change depending on the market conditions</div>
               </div> 
               </div>
               :
               ""
  
            }
            </div>
            </div>


            {/* Select Friend */}

            <Transition appear show={isOpen1} as={Fragment}>
        <Dialog as='div' className='relative z-[999999]' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter=''
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave=''
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-[#11047A33]' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='relative bg-white w-full max-w-[400px] transform overflow-hidden rounded-2xl bg-sooth p-5 text-left align-middle shadow-xl transition-all'>
                 
                 <div>
                  <div className='flex items-center justify-between mb-3'>
                  <div className='text-[19px] text-not-black font-bold '>Select Friend</div>
                  <button onClick={closeModal} className="sm:absolute sm:top-7 sm:right-7"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.433246 0.433238C1.01091 -0.144413 1.94761 -0.144413 2.52527 0.433238L6.5 4.4079L10.4747 0.433238C11.0524 -0.144413 11.9891 -0.144413 12.5668 0.433238C13.1444 1.01089 13.1444 1.94758 12.5668 2.52523L8.59202 6.50011L12.5668 10.4748C13.1444 11.0524 13.1444 11.9891 12.5668 12.5668C11.9891 13.1444 11.0524 13.1444 10.4747 12.5668L6.5 8.5921L2.52527 12.5668C1.94761 13.1444 1.01091 13.1444 0.433246 12.5668C-0.144415 11.9891 -0.144415 11.0524 0.433246 10.4748L4.40798 6.50011L0.433246 2.52544C-0.144415 1.94779 -0.144415 1.0111 0.433246 0.433449V0.433238Z" fill="#FF3A3A"/></svg></button>
                  </div>
                 </div>

                 <div className="">
           <button className="custom-shadow bg-white w-full p-3 rounded-3xl">
           <div className="w-full flex items-center gap-2 bg-white border border-[#F5F5F7] rounded-xl px-3"><input type="text" placeholder='Search Friends...' className='w-full bg-white py-3 text-[#5F6374] text-[15px] border-none outline-none' /><svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="#11047A" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/><path d="M16.5 16.5L15 15" stroke="#11047A" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/></svg></div>
           </button>
           </div>

             {
              friendsToSelect === false
              ?
              <div className='flex items-center justify-center flex-col px-4 text-center'>
              <img src="/images/emptyState.svg" alt="empty-state" />
                <div className="font-bold text-[#11047A] text-[19px]">Oops, You have no Friends Yet</div>
                <div className="mt-2 text-[#11047A] text-[15px]">Please add Friends to Send or request Crypto.</div>
               <button onClick={()=> {setfriendsToSelect(true)}} className='mt-7 px-5 py-3 sm:px-7 sm:py-4 text-[15px]  rounded-xl bg-main-color text-white'>Add Friends Now</button>
              </div>
              :
              <div>
                <div className="sidebar-scroll max-h-[300px] overflow-y-auto my-3">
                <div className="flex items-center gap-3 px-6 py-3 rounded-lg cursor-pointer transition hover:bg-transparent-main-color">
                    <img src="/images/profile.png" className='w-[50px]' alt="avatar" />
                    <div>
                        <div className='oneLineText font-bold '>Sheira Azzahra Putri</div>
                        <div className='oneLineText mt-1 text-[#000000] text-opacity-[0.6]'>oxe44d...07059e</div>
                    </div>
                </div>

                <div className="flex items-center gap-3 px-6 py-3 rounded-lg cursor-pointer transition hover:bg-transparent-main-color">
                    <img src="/images/profile.png" className='w-[50px]' alt="avatar" />
                    <div>
                        <div className='oneLineText font-bold '>Sheira Azzahra Putri</div>
                        <div className='oneLineText mt-1 text-[#000000] text-opacity-[0.6]'>oxe44d...07059e</div>
                    </div>
                </div>


                <div className="flex items-center gap-3 px-6 py-3 rounded-lg cursor-pointer transition hover:bg-transparent-main-color">
                    <img src="/images/profile.png" className='w-[50px]' alt="avatar" />
                    <div>
                        <div className='oneLineText font-bold '>Sheira Azzahra Putri</div>
                        <div className='oneLineText mt-1 text-[#000000] text-opacity-[0.6]'>oxe44d...07059e</div>
                    </div>
                </div>


                <div className="flex items-center gap-3 px-6 py-3 rounded-lg cursor-pointer transition hover:bg-transparent-main-color">
                    <img src="/images/profile.png" className='w-[50px]' alt="avatar" />
                    <div>
                        <div className='oneLineText font-bold '>Sheira Azzahra Putri</div>
                        <div className='oneLineText mt-1 text-[#000000] text-opacity-[0.6]'>oxe44d...07059e</div>
                    </div>
                </div>


                <div className="flex items-center gap-3 px-6 py-3 rounded-lg cursor-pointer transition hover:bg-transparent-main-color">
                    <img src="/images/profile.png" className='w-[50px]' alt="avatar" />
                    <div>
                        <div className='oneLineText font-bold '>Sheira Azzahra Putri</div>
                        <div className='oneLineText mt-1 text-[#000000] text-opacity-[0.6]'>oxe44d...07059e</div>
                    </div>
                </div>


                <div className="flex items-center gap-3 px-6 py-3 rounded-lg cursor-pointer transition hover:bg-transparent-main-color">
                    <img src="/images/profile.png" className='w-[50px]' alt="avatar" />
                    <div>
                        <div className='oneLineText font-bold '>Sheira Azzahra Putri</div>
                        <div className='oneLineText mt-1 text-[#000000] text-opacity-[0.6]'>oxe44d...07059e</div>
                    </div>
                </div>


                <div className="flex items-center gap-3 px-6 py-3 rounded-lg cursor-pointer transition hover:bg-transparent-main-color">
                    <img src="/images/profile.png" className='w-[50px]' alt="avatar" />
                    <div>
                        <div className='oneLineText font-bold '>Sheira Azzahra Putri</div>
                        <div className='oneLineText mt-1 text-[#000000] text-opacity-[0.6]'>oxe44d...07059e</div>
                    </div>
                </div>


             </div>

             <button className="block mx-auto px-6 py-3 w-fit  bg-main-color text-white rounded-lg">Confirm</button>
              </div>
             }
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>



      <BuyPopup buyModal={buyModal} setbuyModal={setbuyModal}/>
      <SellPopup sellModal={sellModal} setsellModal={setsellModal}/>
      <SendPopup sendModal={sendModal} setsendModal={setsendModal}/>
      <RequestPopup requestModal={requestModal} setrequestModal={setrequestModal}/>
       

    </>
  )
}

export default BuySellMain