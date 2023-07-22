import React from 'react'
import SideNavbar from '../components/shared/SideNavbar'
import Chart from '../components/portfolio/Chart'
import {Link} from 'react-router-dom'
import RecentActivity from '../components/shared/RecentActivity'
import BuySellMain from '../components/shared/BuySellMain'
import ConnectWallet from '../components/shared/ConnectWallet';
import AddNewAddress from '../components/shared/AddNewAddress';

const BuySell = () => {

  const [navBar, setnavBar] = React.useState('-translate-x-full');
  const [showDropDown, setshowDropDown] = React.useState(false);
  const [showDropDown2, setshowDropDown2] = React.useState(false);
  const [showDropDown3, setshowDropDown3] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [newaddress, setnewaddress] = React.useState(false);
  const [portfolioStatus, setportfolioStatus] = React.useState('up');
  const [showDeleteIcons, setshowDeleteIcons] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
    setIsOpen2(false);
    setnewaddress(false)

  }

  function openModal() {
    setIsOpen(true)
  }
  React.useEffect(() => {
    document.body.classList.add('dashboard');
  }, [])

  return (
    <>
    <div className="mainCont grid grid-cols-1 lg2:grid-cols-[300px,1fr,350px] overflow-y-hidden ">
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

      <div className="sidebar-scroll bg-transparent-main-color p-5 rounded-lg lg2:rounded-tl-lg lg2:rounded-tr-lg h-full lg2:max-h-screen overflow-y-auto">
        <div className="bg-white rounded-xl px-4 py-4 sm2:py-2 flex items-center justify-center sm2:justify-between flex-wrap gap-3">
          <div className='text-not-black font-bold text-[20px]'>Buy/Sell</div>

          <div className="flex items-center gap-3 w-full sm2:w-auto">
          <div onMouseEnter={()=> {setshowDropDown(true)}} onMouseLeave={()=> {setshowDropDown(false)}} className="relative w-full">
           <button className="bg-white w-full rounded-3xl">
            <div className="rounded-xl border border-[#F2F2F2] p-1">
               <div className="flex items-center justify-between gap-10">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]"><img src="/images/btc2.svg" className='w-[40px]' alt="icon" />oxe44d...07059e</div>
                <div className='mr-1'><svg className={`${showDropDown === false ? "" : "rotate-180"}`} width="9" height="8" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86603 4.5C3.48113 5.16667 2.51888 5.16667 2.13397 4.5L0.401923 1.5C0.0170231 0.833332 0.498149 -3.85264e-07 1.26795 -4.52563e-07L4.73205 -7.55404e-07C5.50185 -8.22702e-07 5.98298 0.833332 5.59808 1.5L3.86603 4.5Z" fill={showDropDown === false ? "#1A1A1A" : "#0085FF"}/></svg></div>
               </div>

              <div className={`custom-shadow  rounded-lg absolute top-full left-0 w-full bg-white z-[99] ${showDropDown === false ? "hidden" : "block"}`}>
              <label htmlFor='bitcoin9123' className="flex items-center justify-between px-3 mt-2 cursor-pointer">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]"><img src="/images/btc2.svg" className='w-[40px]' alt="icon" />oxe44d...07059e</div>
                {showDeleteIcons === false ? <input id="bitcoin9123" type="radio" name="wallet" className='cursor-pointer w-[15px] h-[15px]' /> : <svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.6794 2.27673C11.9226 2.27673 12.125 2.47861 12.125 2.73548V2.97298C12.125 3.2236 11.9226 3.43172 11.6794 3.43172H1.32116C1.07741 3.43172 0.875 3.2236 0.875 2.97298V2.73548C0.875 2.47861 1.07741 2.27673 1.32116 2.27673H3.14348C3.51366 2.27673 3.83581 2.01361 3.91909 1.64236L4.01452 1.21612C4.16284 0.635499 4.65093 0.249878 5.20954 0.249878H7.79046C8.34299 0.249878 8.83656 0.635499 8.9794 1.18549L9.08152 1.64174C9.16419 2.01361 9.48634 2.27673 9.85713 2.27673H11.6794ZM10.7535 10.9586C10.9438 9.1855 11.2769 4.97304 11.2769 4.93054C11.289 4.80179 11.2471 4.67992 11.1638 4.5818C11.0744 4.48992 10.9614 4.43555 10.8368 4.43555H2.16769C2.04248 4.43555 1.92334 4.48992 1.84067 4.5818C1.75679 4.67992 1.71545 4.80179 1.72153 4.93054C1.72265 4.93835 1.7346 5.08674 1.75459 5.33481C1.84336 6.43684 2.0906 9.5062 2.25036 10.9586C2.36342 12.0286 3.06548 12.7011 4.0824 12.7255C4.86713 12.7436 5.67557 12.7498 6.50224 12.7498C7.28089 12.7498 8.07169 12.7436 8.88074 12.7255C9.93292 12.7073 10.6344 12.0467 10.7535 10.9586Z" fill="#E71D36"/></svg>}
               </label>


               <label htmlFor='bitcoin91212s' className="flex items-center justify-between px-3 mt-1 mb-2 cursor-pointer">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]"><img src="/images/btc2.svg" className='w-[40px]' alt="icon" />oxe44d...07059e</div>
                {showDeleteIcons === false ? <input id="bitcoin91212s" type="radio" name="wallet" className='cursor-pointer w-[15px] h-[15px]' /> : <svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.6794 2.27673C11.9226 2.27673 12.125 2.47861 12.125 2.73548V2.97298C12.125 3.2236 11.9226 3.43172 11.6794 3.43172H1.32116C1.07741 3.43172 0.875 3.2236 0.875 2.97298V2.73548C0.875 2.47861 1.07741 2.27673 1.32116 2.27673H3.14348C3.51366 2.27673 3.83581 2.01361 3.91909 1.64236L4.01452 1.21612C4.16284 0.635499 4.65093 0.249878 5.20954 0.249878H7.79046C8.34299 0.249878 8.83656 0.635499 8.9794 1.18549L9.08152 1.64174C9.16419 2.01361 9.48634 2.27673 9.85713 2.27673H11.6794ZM10.7535 10.9586C10.9438 9.1855 11.2769 4.97304 11.2769 4.93054C11.289 4.80179 11.2471 4.67992 11.1638 4.5818C11.0744 4.48992 10.9614 4.43555 10.8368 4.43555H2.16769C2.04248 4.43555 1.92334 4.48992 1.84067 4.5818C1.75679 4.67992 1.71545 4.80179 1.72153 4.93054C1.72265 4.93835 1.7346 5.08674 1.75459 5.33481C1.84336 6.43684 2.0906 9.5062 2.25036 10.9586C2.36342 12.0286 3.06548 12.7011 4.0824 12.7255C4.86713 12.7436 5.67557 12.7498 6.50224 12.7498C7.28089 12.7498 8.07169 12.7436 8.88074 12.7255C9.93292 12.7073 10.6344 12.0467 10.7535 10.9586Z" fill="#E71D36"/></svg>}
               </label>

               <div className={`grid grid-cols-1 px-3 mb-3 gap-2 mt-3 ${showDropDown === false ? "hidden" : ""}`}>
             <button onClick={openModal} className='block bg-main-color text-white py-3 rounded-xl text-[14px]'>Connect Wallet</button>
             <button onClick={()=> {setnewaddress(true)}} className='block bg-transparent-main-color text-main-color py-3 rounded-xl text-[14px]'>Add new Address</button>
             <div className={showDropDown === false ? "hidden" : ""}>
             <div onClick={()=> {setshowDeleteIcons(true)}} className={`w-full ${showDeleteIcons === false ? "block" : "hidden"}`}><button className='w-full rounded-lg bg-[#E71D3626] text-[#E71D36] font-bold flex items-center justify-center py-3 text-[15px] gap-2 flex-row-reverse'>Delete Address <svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.6794 2.27673C11.9226 2.27673 12.125 2.47861 12.125 2.73548V2.97298C12.125 3.2236 11.9226 3.43172 11.6794 3.43172H1.32116C1.07741 3.43172 0.875 3.2236 0.875 2.97298V2.73548C0.875 2.47861 1.07741 2.27673 1.32116 2.27673H3.14348C3.51366 2.27673 3.83581 2.01361 3.91909 1.64236L4.01452 1.21612C4.16284 0.635499 4.65093 0.249878 5.20954 0.249878H7.79046C8.34299 0.249878 8.83656 0.635499 8.9794 1.18549L9.08152 1.64174C9.16419 2.01361 9.48634 2.27673 9.85713 2.27673H11.6794ZM10.7535 10.9586C10.9438 9.1855 11.2769 4.97304 11.2769 4.93054C11.289 4.80179 11.2471 4.67992 11.1638 4.5818C11.0744 4.48992 10.9614 4.43555 10.8368 4.43555H2.16769C2.04248 4.43555 1.92334 4.48992 1.84067 4.5818C1.75679 4.67992 1.71545 4.80179 1.72153 4.93054C1.72265 4.93835 1.7346 5.08674 1.75459 5.33481C1.84336 6.43684 2.0906 9.5062 2.25036 10.9586C2.36342 12.0286 3.06548 12.7011 4.0824 12.7255C4.86713 12.7436 5.67557 12.7498 6.50224 12.7498C7.28089 12.7498 8.07169 12.7436 8.88074 12.7255C9.93292 12.7073 10.6344 12.0467 10.7535 10.9586Z" fill="#E71D36"/></svg></button></div>
             <div onClick={()=> {setshowDeleteIcons(false)}} className={`w-full ${showDeleteIcons === true ? "block" : "hidden"}`}><button className='w-full rounded-lg bg-[#E71D36] text-white font-bold flex items-center justify-center py-3 text-[15px] '>Cancel</button></div>
             </div>
             
             </div>

              </div>

               
            </div>
            
           </button>

           </div>
          

          </div>
          </div>

          <div className="flex items-center justify-between flex-col sm11:flex-row gap-3 bg-white rounded-xl px-4 py-4 xl:py-0 xl:h-[80px]  mb-5 sm8:mb-0 mt-6">

            <div className="flex items-center gap-3">
              <img src="/images/btc.svg" className='w-[55px]' alt="icon" />
              <div>
                <div className="text-[14px] text-[#5F6374]">Exchange rate</div>
                <div className="text-[19px] font-bold text-not-black mt-1">16.436.60 USD</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-5 xl:gap-10 flex-wrap lg2:flex-nowrap xl:flex-wrap">
              <div className='flex gap-1'><span className={`text-[14px] font-bold ${portfolioStatus === "dump" ? "text-[#FF3A29]" : "text-main-color"}`}>-$6,963</span> <span className='text-[14px] text-[#A3AED0]'>since last month</span></div>
            
                <div className={`rounded-lg flex items-center justify-center w-[50px] h-[50px] ${portfolioStatus === "up" ? "bg-transparent-main-color" : "bg-[#FF5C00] bg-opacity-[0.15]"}`}>{portfolioStatus === "up" ? <img src="/images/arrow-up.svg" className='select-none w-[13px]' alt="arrow-up" /> : <img src="/images/arrow-down.svg" className='select-none w-[13px]' alt="arrow-down" />}</div>
            </div>

          </div>
         

            <BuySellMain/>
            

            <div className="mb-5 mt-2 sm8:mt-6 bg-white rounded-xl p-5 pb-2 relative">
             <div className='flex items-center justify-between mb-8'>
                <div className='text-[18px] text-not-black font-bold mb-[20px] sm9:mb-0'>Portfolio Status</div>
             </div>

             <Chart/>
          </div>


      </div>



      </div>
      <RecentActivity/>
    </div>

    <ConnectWallet isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />
    <AddNewAddress newaddress={newaddress} setnewaddress={setnewaddress}/>

    </>
  )
}

export default BuySell