import React from 'react'
import SideNavbar from '../components/shared/SideNavbar'
import BuySellSidebar from '../components/shared/BuySellSidebar'
import Chart from '../components/portfolio/Chart'
import PortfolioUser from '../components/portfolio/PortfolioUser'
import {Link} from 'react-router-dom'


const Portfolio = () => {

  const [navBar, setnavBar] = React.useState('-translate-x-full');
  const [showDropDown, setshowDropDown] = React.useState(false);
  const [showDropDown2, setshowDropDown2] = React.useState(false);
  const [showDropDown3, setshowDropDown3] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add('dashboard');
  }, [])
  

  return (
    <>
    <div className="mainCont grid grid-cols-1 lg2:grid-cols-[300px,1fr,350px] overflow-y-hidden ">
    <div className="px-5 w-full pt-4 flex gap-2 lg2:hidden items-center justify-between">
       <div className="h-fit"><Link to="/"><img src="/images/logo.svg" alt="logo" /></Link></div>
            <div className="flex items-center gap-3">
            <div onMouseEnter={()=> {setshowDropDown3(true)}} onMouseLeave={()=> {setshowDropDown3(false)}} className="relative">
            <button className="border border-[#F2F2F2] h-[54px] rounded-xl p-1">
               <div className="flex items-center justify-between gap-3 px-2">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]">oxe44d...</div>
                <div className='mr-1'><svg className={`${showDropDown3 === false ? "" : "rotate-180"}`} width="9" height="8" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86603 4.5C3.48113 5.16667 2.51888 5.16667 2.13397 4.5L0.401923 1.5C0.0170231 0.833332 0.498149 -3.85264e-07 1.26795 -4.52563e-07L4.73205 -7.55404e-07C5.50185 -8.22702e-07 5.98298 0.833332 5.59808 1.5L3.86603 4.5Z" fill={showDropDown3 === false ? "#1A1A1A" : "#0085FF"}/></svg></div>
               </div>

              <div className={`absolute top-full left-0 w-full flex flex-col gap-3 z-30 bg-white py-2.5 border border-[#F2F2F2] rounded-xl ${showDropDown3 === false ? "hidden" : "block"}`}>
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

      <div className="sidebar-scroll bg-transparent-main-color p-5 rounded-lg lg2:rounded-tl-lg lg2:rounded-tr-lg h-full lg2:max-h-screen overflow-y-auto">
        <div className="bg-white rounded-xl px-4 py-4 sm2:py-2 flex items-center justify-between flex-col gap-2 sm2:gap-0 sm2:flex-row">
          <div className='text-not-black font-bold text-[20px]'>Portfolio</div>

          <div className="flex items-center gap-3 w-full sm2:w-auto">
          <div onMouseEnter={()=> {setshowDropDown(true)}} onMouseLeave={()=> {setshowDropDown(false)}} className="relative">
          <button className="relative flex items-center justify-between gap-1.5 sm5:gap-3 sm3:gap-10 border w-full sm2:w-auto border-[#F2F2F2] rounded-2xl p-2 pr-5">
           <div className='relative'>
              <div className='flex items-center gap-2 flex-row-reverse'><div className='hidden sm4:flex lg2:hidden lg3:flex gap-1.5'><span className='text-[#11047A] font-bold'>All networks</span></div>
              <div className="flex sm7:-space-x-4">
                  <img className="hidden sm7:block w-10 h-10 dark:border-gray-800" src="/images/btc2.svg" alt="icon"/>
                  <img className="hidden sm5:block w-10 h-10 dark:border-gray-800" src="/images/ltc.svg" alt="icon"/>
                  <img className="hidden sm6:block w-10 h-10 dark:border-gray-800" src="/images/eth.svg" alt="icon"/>
                  <button className="flex justify-center items-center w-10 h-10 text-[15px] text-white bg-main-color font-bold rounded-[15.5px] border-4 border-white" href="#">+4</button>
              </div>
              </div>
            </div>
              <div><svg width="9" height="8" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86603 4.5C3.48113 5.16667 2.51888 5.16667 2.13397 4.5L0.401923 1.5C0.0170231 0.833332 0.498149 -3.85264e-07 1.26795 -4.52563e-07L4.73205 -7.55404e-07C5.50185 -8.22702e-07 5.98298 0.833332 5.59808 1.5L3.86603 4.5Z" fill="#1A1A1A"/></svg></div>
          </button>

          <div className={`bg-white z-[99] border w-full absolute top-full left-0 px-2 py-2 border-[#F2F2F2] rounded-2xl ${showDropDown === false ? "hidden" : "flex"}`}>
             <div className='w-full'>
            
             <div className="w-full">
                <div className="sidebar-scroll max-h-[200px] overflow-y-auto flex flex-col w-full gap-2">
                <label htmlFor="bitcoin1sadasd" className='flex items-center w-full justify-between gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin1sadasd" name="select-network" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="adsasd32r" className='flex items-center w-full justify-between gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="adsasd32r" name="select-network" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="asdasd23" className='flex items-center w-full justify-between gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="asdasd23" name="select-network" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="asdasd32df" className='flex items-center w-full justify-between gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="asdasd32df" name="select-network" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="bitcoin5dfgfgfd" className='flex items-center w-full justify-between gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin5dfgfgfd" name="select-network" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="asjkdnasjkdnajksdn" className='flex items-center w-full justify-between gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="asjkdnasjkdnajksdn" name="select-network" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="janfksjdfnjksdfniuew" className='flex items-center w-full justify-between gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="janfksjdfnjksdfniuew" name="select-network" className='cursor-pointer w-[15px] h-[15px]' /></label>

                </div>
             </div>
             
             </div>
           </div>
          </div>
          


          <div onMouseEnter={()=> {setshowDropDown2(true)}} onMouseLeave={()=> {setshowDropDown2(false)}} className="relative">
          <button className="relative flex items-center justify-between gap-6 border border-[#F2F2F2] rounded-2xl p-2 pr-5">
           <div>
              <div className='flex items-center gap-2 flex-row-reverse'><div className='flex gap-1.5'><span className='text-[#11047A] font-bold'>USD</span></div>
              <div className="flex">
                  <img className="min-w-[41px] sm2:w-10 sm2:h-10 dark:border-gray-800" src="/images/usd2.svg" alt="icon"/>
              </div>
              </div>
            </div>
              <div><svg width="9" height="8" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86603 4.5C3.48113 5.16667 2.51888 5.16667 2.13397 4.5L0.401923 1.5C0.0170231 0.833332 0.498149 -3.85264e-07 1.26795 -4.52563e-07L4.73205 -7.55404e-07C5.50185 -8.22702e-07 5.98298 0.833332 5.59808 1.5L3.86603 4.5Z" fill="#1A1A1A"/></svg></div>

          </button>
          <div className={`bg-white z-[99] border w-fit absolute top-full left-0 px-2 py-2 border-[#F2F2F2] rounded-2xl ${showDropDown2 === false ? "hidden" : "flex"}`}>
             <div>
            
             <div className="">
                <div className="sidebar-scroll max-h-[200px] overflow-y-auto flex flex-col w-fit items-center gap-2">
                <label htmlFor="btc1" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="btc1" name="select-fiat" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="vrer" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="vrer" name="select-fiat" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="asdasd23gfgfd" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="asdasd23gfgfd" name="select-fiat" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="asdasdasdasdasd32df" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="asdasdasdasdasd32df" name="select-fiat" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="asdasdasdqbitcoin5dfgfgfd" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="asdasdasdqbitcoin5dfgfgfd" name="select-fiat" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="asjkdnasjkdnajksdnasdasdas" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="asjkdnasjkdnajksdnasdasdas" name="select-fiat" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="asdasdjanfksjdfnjksdfniuew" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="asdasdjanfksjdfnjksdfniuew" name="select-fiat" className='cursor-pointer w-[15px] h-[15px]' /></label>

                </div>
             </div>

             </div>
           </div>
          </div>
          </div>
          </div>


          <div className="py-5 mt-2 sm8:mt-0 flex sm8:items-center justify-between flex-col gap-3 sm8:gap-0 sm8:flex-row">
            <div>
              <div className='text-sm text-not-black text-opacity-70'>Hey Jaro!</div>
              <div className='font-bold text-2xl mt-1 text-not-black'>Welcome back 👋🏻</div>
            </div>

            <div className='flex items-center justify-between gap-6 rounded-xl bg-white px-5 py-4'>
                 <div>
                 <div className='text-sm text-[#5F6374]'>Total Balance</div>
                 <div className='font-bold text-xl mt-1 text-not-black'>$682.5</div>
                 </div>

                 <div>
                  <img src="/images/chart.svg" alt="chart" />
                 </div>
            </div>
          </div>

          <div className="my-5 mt-0 bg-white rounded-xl p-5 pb-2 relative">
             <div className='flex items-center justify-between mb-8'>
                <div className='text-[18px] text-not-black font-bold mb-[20px] sm9:mb-0'>Portfolio Status</div>
             </div>

             <Chart/>
          </div>

            <PortfolioUser/>


      </div>

      </div>
      <BuySellSidebar/>
    </div>
    </>
  )
}

export default Portfolio