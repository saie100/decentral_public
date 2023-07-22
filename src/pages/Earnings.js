import {useState} from 'react'
import SideNavbar from '../components/shared/SideNavbar'
import {Link} from 'react-router-dom'
import Platforms from '../components/earnings/Platforms';

const Earnings = () => {
    const [navBar, setnavBar] = useState('-translate-x-full');
    const [show, setshow] = useState('DepositFunds');
    const [paymentMethod, setpaymentMethod] = useState('not-selected');
    const [showTransaction, setshowTransaction] = useState(false);
    const [showDropDown2, setshowDropDown2] = useState(false);

  return (
    <>
    <div className="mainCont grid grid-cols-1 lg2:grid-cols-[300px,1fr] lg2:pr-4 overflow-y-hidden ">
    <div className="px-5 w-full pt-4 flex gap-2 lg2:hidden items-center justify-between">
       <div className="h-fit"><Link to="/"><img src="/images/logo.svg" alt="logo" /></Link></div>
            <div className="flex items-center gap-3">
            <div onMouseEnter={()=> {setshowDropDown2(true)}} onMouseLeave={()=> {setshowDropDown2(false)}} className="relative">
            <button className="border border-[#F2F2F2] h-[54px] rounded-xl p-1">
               <div className="flex items-center justify-between gap-3 px-2">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]">oxe44d...</div>
                <div className='mr-1'><svg className={`${showDropDown2 === false ? "" : "rotate-180"}`} width="9" height="8" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86603 4.5C3.48113 5.16667 2.51888 5.16667 2.13397 4.5L0.401923 1.5C0.0170231 0.833332 0.498149 -3.85264e-07 1.26795 -4.52563e-07L4.73205 -7.55404e-07C5.50185 -8.22702e-07 5.98298 0.833332 5.59808 1.5L3.86603 4.5Z" fill={showDropDown2 === false ? "#1A1A1A" : "#0085FF"}/></svg></div>
               </div>

              <div className={`absolute top-full left-0 w-full flex flex-col gap-3 z-30 bg-white py-2.5 border border-[#F2F2F2] rounded-xl ${showDropDown2 === false ? "hidden" : "block"}`}>
              <label htmlFor="btc123123asd13" className="cursor-pointer flex items-center justify-between px-3 ">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]">oxe44d...</div>
                <input id="btc123123asd13" type="radio" name="wallet" className='cursor-pointer w-[15px] h-[15px]' />
               </label>


               <label htmlFor="btc9876543567" className="cursor-pointer flex items-center justify-between px-3 mb-1">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]">oxe44d...</div>
                <input id="btc9876543567" type="radio" name="wallet" className='cursor-pointer w-[15px] h-[15px]' />
               </label>
              </div>

               
            </button>

           </div>
            <button onClick={()=> {navBar === "-translate-x-full" ? setnavBar('translate-x-0') : setnavBar('-translate-x-full')}} className='z-[999999] bg-white w-[45px] flex items-center justify-center h-[54px] rounded-xl border border-[#F2F2F2]'> <img src="/images/menu.svg" className={`w-[25px] ${navBar === "-translate-x-full" ? "" : "hidden"}`} alt="icon" /> <img src="/images/close.svg" className={`w-[25px] ${navBar === "-translate-x-full" ? "hidden" : ""}`}  alt="icon" /></button>

            </div>
      </div>
      <div className={`${navBar} lg2:translate-x-0 transition fixed pr-[75px] lg2:pr-0 max-w-[300px] lg2:max-w-[100%] w-full top-0 left-0 z-[9999] lg2:relative lg2:top-auto lg2:left-auto`}><SideNavbar/></div>
      <div onClick={()=> setnavBar('-translate-x-full')} className={`${navBar === "-translate-x-full" ? "opacity-0 invisible" : "opacity-100 visible"} transition lg2:hidden fixed top-0 z-[999] left-0 w-screen h-screen bg-[#11047A33] bg-opacity-20 pr-4`}></div>
      <div className="pt-5 bg-white overflow-hidden">
      <div className="sidebar-scroll bg-transparent-main-color p-5 rounded-lg lg2:rounded-tl-lg lg2:rounded-tr-lg h-full lg2:max-h-[calc(100vh-40px)] min-h-[calc(100vh-40px)] lg2:min-h-auto overflow-y-auto">
      
      <div className={`bg-white rounded-xl px-4 py-4 sm2:py-2 flex items-center justify-between flex-col gap-2 sm2:gap-0 sm2:flex-row ${paymentMethod === "not-selected" ? "" : "min-h-[55px] max-h-[55px] sm2:min-h-[59px] sm2:max-h-[59px]"} ${showTransaction === true ? "min-h-[55px] max-h-[55px] sm2:min-h-[59px] sm2:max-h-[59px]" : "mb-5"}`}>
          <div className={`text-not-black font-bold text-[20px] leading-none`}>{showTransaction === false ? "Earnings" : "Transaction Status"}</div>
          {
            paymentMethod === "not-selected"
            ?
           showTransaction === false
           ?
           <div className="w-full grid grid-cols-2 sm2:flex items-center sm2:w-fit h-fit sm2:mt-0 rounded-xl overflow-hidden mt-1.5">
             <button onClick={()=> {setshow("DepositFunds")}} className={`${show === "DepositFunds" ? "sm2:px-6 py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-main-color text-white" : "sm2:px-6 py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-white text-[#90A3BF]"}`}>Deposit Funds</button>
             <button onClick={()=> {setshow("WithdrawalFunds")}} className={`${show === "WithdrawalFunds" ? "sm2:px-6 py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-main-color text-white" : "sm2:px-6 py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-white text-[#90A3BF]"}`}>Withdrawal Funds</button>
           </div>
          :
          null
          :
          null
          
          }
          
      </div>


      
         <Platforms
         show={show}
         paymentMethod={paymentMethod}
         setpaymentMethod={setpaymentMethod}
         showTransaction={showTransaction}
         setshowTransaction={setshowTransaction}
          />


      </div>
      </div>
    </div>
    </>
  )
}

export default Earnings