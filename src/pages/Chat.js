import React from 'react'
import SideNavbar from '../components/shared/SideNavbar'
import {Link} from 'react-router-dom'
import SwipeToDelete from 'react-swipe-to-delete-component';
// Import styles of the react-swipe-to-delete-component
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';

const Chat = () => {

    let data = [
        {
            id: 1,
            name: "Ricko Ferdinand Malik",
            lastMessage: "Kita keliling kota bogor aja yuu, sambil makan di cafe",
            selected: false
        },

        {
            id: 1123,
            name: "Ricko Ferdinand Malik",
            lastMessage: "Kita keliling kota bogor aja yuu, sambil makan di cafe",
            selected: false
        },

        {
            id: 123412,
            name: "Ricko Ferdinand Malik",
            lastMessage: "Kita keliling kota bogor aja yuu, sambil makan di cafe",
            selected: true
        },

        {
            id: 112314,
            name: "Ricko Ferdinand Malik",
            lastMessage: "Kita keliling kota bogor aja yuu, sambil makan di cafe",
            selected: false
        },

        {
            id: 1983498532,
            name: "Ricko Ferdinand Malik",
            lastMessage: "Kita keliling kota bogor aja yuu, sambil makan di cafe",
            selected: false
        },

        {
            id: 1459945,
            name: "Ricko Ferdinand Malik",
            lastMessage: "Kita keliling kota bogor aja yuu, sambil makan di cafe",
            selected: false
        },


        {
            id: 123123921,
            name: "Ricko Ferdinand Malik",
            lastMessage: "Kita keliling kota bogor aja yuu, sambil makan di cafe",
            selected: false
        },


        {
            id: 3453451,
            name: "Ricko Ferdinand Malik",
            lastMessage: "Kita keliling kota bogor aja yuu, sambil makan di cafe",
            selected: false
        },


        {
            id: 567651,
            name: "Ricko Ferdinand Malik",
            lastMessage: "Kita keliling kota bogor aja yuu, sambil makan di cafe",
            selected: false
        },



        {
            id: 23411,
            name: "Ricko Ferdinand Malik",
            lastMessage: "Kita keliling kota bogor aja yuu, sambil makan di cafe",
            selected: false
        },



        {
            id: 101238123,
            name: "Ricko Ferdinand Malik",
            lastMessage: "Kita keliling kota bogor aja yuu, sambil makan di cafe",
            selected: false
        },



        {
            id: 100103123123,
            name: "Ricko Ferdinand Malik",
            lastMessage: "Kita keliling kota bogor aja yuu, sambil makan di cafe",
            selected: false
        },



        {
            id: 1886493490,
            name: "Ricko Ferdinand Malik",
            lastMessage: "Kita keliling kota bogor aja yuu, sambil makan di cafe",
            selected: false
        },



        {
            id: 1129402348908,
            name: "Ricko Ferdinand Malik",
            lastMessage: "Kita keliling kota bogor aja yuu, sambil makan di cafe",
            selected: false
        },


        {
            id: 190128409128490,
            name: "Ricko Ferdinand Malik",
            lastMessage: "Kita keliling kota bogor aja yuu, sambil makan di cafe",
            selected: false
        },

    ]

  const [navBar, setnavBar] = React.useState('-translate-x-full');
  const [showChat, setshowChat] = React.useState('hidden');
  const [friends, setfriends] = React.useState(false);
  const [friendsList, setfriendsList] = React.useState(false);
  const [showDropDown, setshowDropDown] = React.useState(false);


  React.useEffect(() => {
    document.body.classList.add('dashboard');
  }, [])

  

  return (
    <>
    <div className="mainCont grid grid-cols-1 lg2:grid-cols-[300px,1fr] lg2:pr-4 overflow-y-hidden ">
      <div className="px-5 w-full pt-4 flex gap-2 lg2:hidden items-center justify-between">
       <div className="h-fit"><Link to="/"><img src="/images/logo.svg" alt="logo" /></Link></div>
            <div className="flex items-center gap-3">
            <div onMouseEnter={()=> {setshowDropDown(true)}} onMouseLeave={()=> {setshowDropDown(false)}} className="relative">
            <button className="border border-[#F2F2F2] h-[54px] rounded-xl p-1">
               <div className="flex items-center justify-between gap-3 px-2">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]">oxe44d...</div>
                <div className='mr-1'><svg className={`${showDropDown === false ? "" : "rotate-180"}`} width="9" height="8" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86603 4.5C3.48113 5.16667 2.51888 5.16667 2.13397 4.5L0.401923 1.5C0.0170231 0.833332 0.498149 -3.85264e-07 1.26795 -4.52563e-07L4.73205 -7.55404e-07C5.50185 -8.22702e-07 5.98298 0.833332 5.59808 1.5L3.86603 4.5Z" fill={showDropDown === false ? "#1A1A1A" : "#0085FF"}/></svg></div>
               </div>

              <div className={`absolute top-full left-0 w-full flex flex-col gap-3 z-30 bg-white py-2.5 border border-[#F2F2F2] rounded-xl ${showDropDown === false ? "hidden" : "block"}`}>
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

      <div className="sidebar-scroll bg-transparent-main-color p-5 rounded-lg lg2:rounded-tl-lg lg2:rounded-tr-lg h-full lg2:max-h-screen min-h-[calc(100vh-80px)] lg2:min-h-auto overflow-y-auto">
        
      <div className="bg-white rounded-xl px-4 py-4 sm2:py-2 flex items-center justify-between flex-col gap-2 sm2:flex-row">
          <div className='text-not-black font-bold text-[20px]'>Chat</div>
          <div className="w-full sm2:w-[600px] flex items-center gap-2 bg-white border border-[#F5F5F7] focus-within:border-main-color focus-within:bg-transparent-main-color rounded-xl px-3"><input type="text" placeholder='Search name/chat' className='w-full bg-transparent py-3 text-[#11047A] text-[15px] border-none outline-none' /><svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="#11047A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 16.5L15 15" stroke="#11047A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      </div>

         {
            friends === false
            ?
            <div className="w-full flex flex-col min-h-[calc(100vh-200px)] lg2:min-h-[calc(100vh-150px)] mt-5 relative overflow-hidden bg-white rounded-xl">
             <div className="px-4 py-3 flex items-center justify-between">
                <button className='flex items-center gap-2 text-[18px] text-[#11047A] font-bold'>All Messages<svg width="16" height="11" className='translate-y-[3px]' viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.3411 0.759644L6.53103 6.69098L11.7209 0.759644" stroke="#0085FF" stroke-width="1.48283" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                <button><svg width="22" height="9" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.14086" cy="2.34095" r="1.72997" transform="rotate(-90 2.14086 2.34095)" fill="#888888"/><circle cx="9.06078" cy="2.34095" r="1.72997" transform="rotate(-90 9.06078 2.34095)" fill="#888888"/><circle cx="15.9807" cy="2.34095" r="1.72997" transform="rotate(-90 15.9807 2.34095)" fill="#888888"/></svg></button>
             </div>

             <div className="px-4 py-3 pb-6 w-full text-center flex-1 flex items-center justify-center">
                <div className='flex items-center justify-center flex-col'>
                <img src="/images/emptyState.svg" alt="empty-state" />
                  <div className="font-bold text-[#11047A] text-[19px]">Not Chat Yet!</div>
                  <div className="mt-2 text-[#11047A] text-[15px]">Please find to add the friends to do chat with them.</div>
                 <button onClick={()=> {setfriends(true)}} className='mt-7 px-5 py-3 sm:px-7 sm:py-4 text-[15px]  rounded-xl bg-main-color text-white'>Add Friends Now</button>
                </div>
             </div>

            
            </div>
            :
            <div className="w-full min-h-[calc(100vh-150px)] mt-5 grid grid-cols-1 md2:grid-cols-2 relative overflow-hidden">
            <div className='sidebar-scroll h-full bg-white rounded-xl md2:rounded-none md2:rounded-tl-xl md2:rounded-bl-lg max-h-[calc(100vh-150px)] overflow-y-auto'>
             <div className="px-4 py-3 flex items-center justify-between">
                <button className='flex items-center gap-2 text-[18px] text-[#11047A] font-bold'>All Messages<svg width="16" height="11" className='translate-y-[3px]' viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.3411 0.759644L6.53103 6.69098L11.7209 0.759644" stroke="#0085FF" stroke-width="1.48283" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                <button><svg width="22" height="9" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.14086" cy="2.34095" r="1.72997" transform="rotate(-90 2.14086 2.34095)" fill="#888888"/><circle cx="9.06078" cy="2.34095" r="1.72997" transform="rotate(-90 9.06078 2.34095)" fill="#888888"/><circle cx="15.9807" cy="2.34095" r="1.72997" transform="rotate(-90 15.9807 2.34095)" fill="#888888"/></svg></button>
             </div>

             <div className="mt-4 flex flex-col">
             {
          data.map(ele => (
            <SwipeToDelete key={ele.id}>
              <a className="list-group-item bg-white block">
              <button onClick={()=> {setshowChat('block')}} className={`w-full px-4 py-4 flex items-center gap-3 justify-between ${ele.selected ? "md2:bg-[#F9F9F9]" : "bg-white"}`}>
                    <div className="flex items-center gap-3">
                        <img src="/images/profile.png" className='w-[60px]' alt="profile" />
                        <div className='text-left flex flex-col gap-2'>
                            <div className='oneLineText text-[#11047A] text-[17px]'>{ele.name}</div>
                            <div className='oneLineText text-[#888888] text-[15px]'>{ele.lastMessage}</div>
                        </div>
                    </div>

                    <div className='flex items-end  flex-col gap-2'>
                    <div className='text-[#888888] text-[15px] whitespace-nowrap'>10:58 AM</div>
                    <button className='rounded-full flex items-center justify-center w-[25px] h-[25px] bg-main-color text-white text-[14px]'>1</button>
                    </div>
                </button>
              </a>
            </SwipeToDelete>
          ))
        }
             
             </div>
            </div>

            <div className={`sidebar-scroll h-full bg-[#F9F9F9] border md2:border-none rounded-xl md2:rounded-none md2:rounded-tr-xl md2:rounded-br-lg max-h-[calc(100vh-150px)] z-[99] overflow-y-auto absolute top-0 left-0 w-full md2:relative md2:top-auto md2:left-auto ${showChat} md2:block`}>
             <div className={`w-full flex sm:items-center sm:justify-between flex-col sm:flex-row flex-wrap gap-2 gap-y-4 px-4 py-4 border-b border-[#EEEEEE]`}>
             <div className="relative flex items-center gap-3 pl-10 md2:pl-0">
                <img onClick={()=> {setshowChat('hidden')}} src="/images/arrow-left.svg" className='cursor-pointer w-[22px] absolute top-1/2 -translate-y-1/2 left-0 block md2:hidden' alt="arrow left" />
                        <button className="relative">
                        <img src="/images/profile.png" className='w-[60px]' alt="profile" />
                        <div className="w-[15px] h-[15px] rounded-full bg-main-color absolute bottom-0 right-0 border-2 border-white"></div>
                        </button>
                        <div className='text-left flex flex-col gap-2'>
                            <button className='oneLineText text-[#11047A] text-[17px] font-bold'>Sheira Azzahra Putri</button>
                            <div className='oneLineText text-[#00D322] text-[15px]'>Online Now</div>
                        </div>
            </div>

              {
                friendsList === false
                ?
                <button onClick={()=> {setfriendsList(true)}} className='px-5 translate-x-[40px] sm:translate-x-0 rounded-md py-3 bg-main-color w-fit text-white text-sm'>Send Request</button>
                :
                <div className="flex items-center gap-8 translate-x-[40px] sm:translate-x-0">
              <button><svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 16.5L15 15" stroke="#888888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
              <button><svg width="5" height="18" viewBox="0 0 5 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.30224" cy="2.28381" r="1.72997" fill="#888888"/><circle cx="2.30224" cy="9.20373" r="1.72997" fill="#888888"/><circle cx="2.30224" cy="16.1236" r="1.72997" fill="#888888"/></svg></button>
              </div>
              }

             </div>



             <div className="sidebar-scroll relative px-5 pt-4 w-full max-h-[calc(100%-102px)] min-h-[calc(100%-102px)] overflow-y-auto">


                     <div className='min-h-[calc(100vh-330px)]'>
                     <div className="w-full flex justify-end">
                     <div className="p-2 relative rounded-lg rounded-tr-none bg-main-color w-fit">
                        <img src="/images/image.svg" className='w-full' alt="image" />
                        <div className="relative float-right px-4 py-4 rounded-lg rounded-tr-none bg-main-color text-white w-fit">
                  Hmm, gimana kalo besok kita jalan berdua ?
                  <div className="flex items-center justify-end text-[15px] gap-2 mt-3">10:56 AM <svg width="21" height="18" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.97803 8.01931L5.25531 11.5004L11.8636 4.08618" stroke="white" stroke-width="1.18627" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.93213 8.01931L9.20941 11.5004L15.8177 4.08618" stroke="white" stroke-width="1.18627" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                  </div>
                  <svg width="16" height="17" className='absolute top-0 -right-[11px]' viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6055 0.239502H0.611816V16.0564L12.5758 5.42174C15.0287 3.2414 16.2551 2.15123 15.8917 1.19537C15.5283 0.239502 13.8874 0.239502 10.6055 0.239502Z" fill="#0085FF"/></svg>
                     </div>
                     </div>


                     <div className="w-full flex justify-end mt-7">

                  <div className="relative px-4 py-4 rounded-lg rounded-tr-none bg-main-color text-white w-fit">
                  Hmm, gimana kalo besok kita jalan berdua ?
                  <div className="flex items-center justify-end text-[15px] gap-2 mt-3">10:56 AM <svg width="21" height="18" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.97803 8.01931L5.25531 11.5004L11.8636 4.08618" stroke="white" stroke-width="1.18627" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.93213 8.01931L9.20941 11.5004L15.8177 4.08618" stroke="white" stroke-width="1.18627" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                  <svg width="16" height="17" className='absolute top-0 -right-[11px]' viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6055 0.239502H0.611816V16.0564L12.5758 5.42174C15.0287 3.2414 16.2551 2.15123 15.8917 1.19537C15.5283 0.239502 13.8874 0.239502 10.6055 0.239502Z" fill="#0085FF"/></svg>
                  </div>
                  </div>


                  <div className="w-full flex justify-end mt-7">
                  <div className="relative px-4 py-4 rounded-lg rounded-tr-none bg-main-color text-white w-fit">
                  Hmm, gimana kalo besok kita jalan berdua ?
                  <div className="flex items-center justify-end text-[15px] gap-2 mt-3">10:56 AM <svg width="21" height="18" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.97803 8.01931L5.25531 11.5004L11.8636 4.08618" stroke="white" stroke-width="1.18627" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.93213 8.01931L9.20941 11.5004L15.8177 4.08618" stroke="white" stroke-width="1.18627" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                  <svg width="16" height="17" className='absolute top-0 -right-[11px]' viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6055 0.239502H0.611816V16.0564L12.5758 5.42174C15.0287 3.2414 16.2551 2.15123 15.8917 1.19537C15.5283 0.239502 13.8874 0.239502 10.6055 0.239502Z" fill="#0085FF"/></svg>
                  </div>
                  </div>

                  <div className="w-full flex justify-start mt-7">
                  <div className="relative text-[#666666] px-4 py-4 rounded-lg rounded-tl-none bg-[#F2F2F2] w-fit">
                  Hmm, gimana kalo besok kita jalan berdua ?
                  <div className="flex items-center justify-start text-[15px] text-[#888888] gap-2 mt-3">10:56 AM</div>
                  <svg width="18" height="17" className='absolute top-0 -left-[11px]' viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.45268 0.429688H17.9966V16.2466L1.52636 3.07042C0.431822 2.19479 1.05099 0.429688 2.45268 0.429688Z" fill="#F2F2F2"/></svg>
                  </div>
                  </div>


                  <div className="w-full flex justify-start mt-7">
                  <div className="relative text-[#666666] px-4 py-4 rounded-lg rounded-tl-none bg-[#F2F2F2] w-fit">
                  Hmm, gimana kalo besok kita jalan berdua ?
                  <div className="flex items-center justify-start text-[15px] text-[#888888] gap-2 mt-3">10:56 AM</div>
                  <svg width="18" height="17" className='absolute top-0 -left-[11px]' viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.45268 0.429688H17.9966V16.2466L1.52636 3.07042C0.431822 2.19479 1.05099 0.429688 2.45268 0.429688Z" fill="#F2F2F2"/></svg>
                  </div>
                  </div>


                  <div className="w-full flex justify-end mt-7 pb-5">
                  <div className="relative px-4 py-4 rounded-lg rounded-tr-none bg-main-color text-white w-fit">
                  Hmm, gimana kalo besok kita jalan berdua ?
                  <div className="flex items-center justify-end text-[15px] gap-2 mt-3">10:56 AM <svg width="21" height="18" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.97803 8.01931L5.25531 11.5004L11.8636 4.08618" stroke="white" stroke-width="1.18627" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.93213 8.01931L9.20941 11.5004L15.8177 4.08618" stroke="white" stroke-width="1.18627" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                  <svg width="16" height="17" className='absolute top-0 -right-[11px]' viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6055 0.239502H0.611816V16.0564L12.5758 5.42174C15.0287 3.2414 16.2551 2.15123 15.8917 1.19537C15.5283 0.239502 13.8874 0.239502 10.6055 0.239502Z" fill="#0085FF"/></svg>
                  </div>
                  </div>
                     </div>


                  <div className="sticky bottom-0 left-0 w-full flex items-center h-fit bg-white gap-2 rounded-xl px-3"><input type="text" placeholder='Type your message here' className='w-full bg-white py-4 text-[#5F6374] text-[15px] border-none outline-none' /> <button><img src="/images/attach.svg" className='w-[30px]' alt="attach icon" /></button> <button className='ml-2'><img src="/images/send.svg" className='w-[25px]' alt="send icon" /></button> <div className="w-[calc(100%-20px)] absolute -bottom-[1px] left-1/2 -translate-x-1/2 bg-white h-[1px]"></div></div>

             </div>





            </div>

         </div>
         }


      </div>

      </div>
    </div>
    </>
  )
}

export default Chat