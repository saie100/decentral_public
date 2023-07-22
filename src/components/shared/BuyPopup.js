import React, {useState, Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'

const BuyPopup = (props) => {

        const [buyConfirm, setbuyConfirm] = useState(false)
        const [showDeleteIcons, setshowDeleteIcons] = React.useState(false);
        const [showDropDown, setshowDropDown] = React.useState(false);
        const [address, setaddress] = React.useState("");
        const [profileI1, setprofileI1] = React.useState("");

        function closeModal() {
            props.setbuyModal(false);
            setbuyConfirm(false)
            setaddress("");
            setprofileI1("")
          }


          function validation() {
            if(address === ""){
              setprofileI1("error");
            }
        
            else{
              setprofileI1("");
              setbuyConfirm(true)
            }
          }

  return (
    <>
    <Transition appear show={props.buyModal} as={Fragment}>
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
                <Dialog.Panel className='relative bg-white w-full max-w-[500px] transform overflow-hidden rounded-2xl bg-sooth p-5 text-left align-middle shadow-xl transition-all'>
                 
                 <div className='mb-6'>
                  <div className='flex items-center justify-between mb-3'>
                  <button onClick={()=>{buyConfirm === true ? setbuyConfirm(false) : closeModal()}}><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 9C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7V9ZM0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM19 7L1 7V9L19 9V7Z" fill="black"/></svg></button>
                  <div className='text-[16px] sm7:text-[19px] text-not-black font-bold'>{buyConfirm === false ? "Enter Buyer’s Address" : "Buy"}</div>
                  <button onClick={closeModal}><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.433246 0.433238C1.01091 -0.144413 1.94761 -0.144413 2.52527 0.433238L6.5 4.4079L10.4747 0.433238C11.0524 -0.144413 11.9891 -0.144413 12.5668 0.433238C13.1444 1.01089 13.1444 1.94758 12.5668 2.52523L8.59202 6.50011L12.5668 10.4748C13.1444 11.0524 13.1444 11.9891 12.5668 12.5668C11.9891 13.1444 11.0524 13.1444 10.4747 12.5668L6.5 8.5921L2.52527 12.5668C1.94761 13.1444 1.01091 13.1444 0.433246 12.5668C-0.144415 11.9891 -0.144415 11.0524 0.433246 10.4748L4.40798 6.50011L0.433246 2.52544C-0.144415 1.94779 -0.144415 1.0111 0.433246 0.433449V0.433238Z" fill="#FF3A3A"/></svg></button>
                  </div>
                 </div>
               

             {
              buyConfirm === false
              ?
              <div>
             
             <div onMouseEnter={()=> {setshowDropDown(true)}} onMouseLeave={()=> {setshowDropDown(false)}} className="relative w-full">
           <button className="bg-white w-full rounded-3xl">
            <div className="rounded-xl border border-[#F2F2F2] p-1">
               <div className="flex items-center justify-between gap-10">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]"><img src="/images/btc2.svg" className='w-[40px]' alt="icon" />oxe44d...07059e</div>
                <div className='mr-1'><svg className={`${showDropDown === false ? "" : "rotate-180"}`} width="9" height="8" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86603 4.5C3.48113 5.16667 2.51888 5.16667 2.13397 4.5L0.401923 1.5C0.0170231 0.833332 0.498149 -3.85264e-07 1.26795 -4.52563e-07L4.73205 -7.55404e-07C5.50185 -8.22702e-07 5.98298 0.833332 5.59808 1.5L3.86603 4.5Z" fill={showDropDown === false ? "#1A1A1A" : "#0085FF"}/></svg></div>
               </div>

              <div className={`custom-shadow  rounded-lg absolute top-full left-0 w-full bg-white z-[99] ${showDropDown === false ? "hidden" : "block"}`}>
              <label htmlFor='bitcoin9123324234asd' className="flex items-center justify-between px-3 mt-2 cursor-pointer">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]"><img src="/images/btc2.svg" className='w-[40px]' alt="icon" />oxe44d...07059e</div>
                {showDeleteIcons === false ? <input id="bitcoin9123324234asd" type="radio" name="wallet" className='cursor-pointer w-[15px] h-[15px]' /> : <svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6794 2.27673C11.9226 2.27673 12.125 2.47861 12.125 2.73548V2.97298C12.125 3.2236 11.9226 3.43172 11.6794 3.43172H1.32116C1.07741 3.43172 0.875 3.2236 0.875 2.97298V2.73548C0.875 2.47861 1.07741 2.27673 1.32116 2.27673H3.14348C3.51366 2.27673 3.83581 2.01361 3.91909 1.64236L4.01452 1.21612C4.16284 0.635499 4.65093 0.249878 5.20954 0.249878H7.79046C8.34299 0.249878 8.83656 0.635499 8.9794 1.18549L9.08152 1.64174C9.16419 2.01361 9.48634 2.27673 9.85713 2.27673H11.6794ZM10.7535 10.9586C10.9438 9.1855 11.2769 4.97304 11.2769 4.93054C11.289 4.80179 11.2471 4.67992 11.1638 4.5818C11.0744 4.48992 10.9614 4.43555 10.8368 4.43555H2.16769C2.04248 4.43555 1.92334 4.48992 1.84067 4.5818C1.75679 4.67992 1.71545 4.80179 1.72153 4.93054C1.72265 4.93835 1.7346 5.08674 1.75459 5.33481C1.84336 6.43684 2.0906 9.5062 2.25036 10.9586C2.36342 12.0286 3.06548 12.7011 4.0824 12.7255C4.86713 12.7436 5.67557 12.7498 6.50224 12.7498C7.28089 12.7498 8.07169 12.7436 8.88074 12.7255C9.93292 12.7073 10.6344 12.0467 10.7535 10.9586Z" fill="#E71D36"/></svg>}
               </label>


               <label htmlFor='asdasdasdasd32234' className="flex items-center justify-between px-3 mt-1 mb-2 cursor-pointer">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]"><img src="/images/btc2.svg" className='w-[40px]' alt="icon" />oxe44d...07059e</div>
                {showDeleteIcons === false ? <input id="asdasdasdasd32234" type="radio" name="wallet" className='cursor-pointer w-[15px] h-[15px]' /> : <svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6794 2.27673C11.9226 2.27673 12.125 2.47861 12.125 2.73548V2.97298C12.125 3.2236 11.9226 3.43172 11.6794 3.43172H1.32116C1.07741 3.43172 0.875 3.2236 0.875 2.97298V2.73548C0.875 2.47861 1.07741 2.27673 1.32116 2.27673H3.14348C3.51366 2.27673 3.83581 2.01361 3.91909 1.64236L4.01452 1.21612C4.16284 0.635499 4.65093 0.249878 5.20954 0.249878H7.79046C8.34299 0.249878 8.83656 0.635499 8.9794 1.18549L9.08152 1.64174C9.16419 2.01361 9.48634 2.27673 9.85713 2.27673H11.6794ZM10.7535 10.9586C10.9438 9.1855 11.2769 4.97304 11.2769 4.93054C11.289 4.80179 11.2471 4.67992 11.1638 4.5818C11.0744 4.48992 10.9614 4.43555 10.8368 4.43555H2.16769C2.04248 4.43555 1.92334 4.48992 1.84067 4.5818C1.75679 4.67992 1.71545 4.80179 1.72153 4.93054C1.72265 4.93835 1.7346 5.08674 1.75459 5.33481C1.84336 6.43684 2.0906 9.5062 2.25036 10.9586C2.36342 12.0286 3.06548 12.7011 4.0824 12.7255C4.86713 12.7436 5.67557 12.7498 6.50224 12.7498C7.28089 12.7498 8.07169 12.7436 8.88074 12.7255C9.93292 12.7073 10.6344 12.0467 10.7535 10.9586Z" fill="#E71D36"/></svg>}
               </label>

               

              </div>

               
            </div>
            
           </button>

           </div>



           <div className="text-black mt-5">
           <div className=" font-bold text-[15px] mb-1">Buyer Address</div>
            <input type="text" onChange={(e)=> {setaddress(e.target.value)}} value={address} className={`w-full px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color ${profileI1 === "error" ? "border-red-400" : ""}`} placeholder='Enter Address...' />
            <div className={`text-red-400 text-sm mt-2 ${profileI1 === "error" ? "flex" : "hidden"}`}>Buyer Address Required</div>
           </div>

           <button onClick={validation} className='flex w-fit mx-auto  px-7 sm:px-10 mt-10 py-3 sm:py-4 rounded-xl bg-main-color text-white'>Continue</button>

              </div>
              :
              <div>
               
                   <div className="text-white w-full rounded-lg bg-main-color flex items-center justify-between px-3 py-3 flex-wrap gap-1">
                    <div className='text-[15px]'>Quantity in BTC</div>
                    <div className="flex items-center gap-1.5 flex-row-reverse font-bold">0.00581705<svg width="18" height="22" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7789 3.75588C12.8121 4.4541 14.2992 5.49947 14.0074 7.44505C13.7955 8.86975 13.0028 9.55881 11.9496 9.80004C13.3945 10.5495 13.8871 11.9716 13.4294 13.6912C12.5607 16.1659 10.4955 16.3742 7.74866 15.857L7.0817 18.5172L5.4716 18.1169L6.1294 15.4924C5.71201 15.3891 5.28537 15.2786 4.84588 15.1607L4.18536 17.798L2.57706 17.3978L3.24311 14.732L0 13.9169L0.800006 12.0801C0.800006 12.0801 1.98714 12.3935 1.97064 12.3707C2.42663 12.4831 2.62935 12.187 2.70918 11.9906L4.51657 4.77026C4.53669 4.42936 4.41834 3.99992 3.76607 3.83726C3.7908 3.81986 2.59636 3.54754 2.59636 3.54754L3.02481 1.83409L6.27248 2.63553L6.93309 0L8.54229 0.400261L7.89546 2.9837C8.32852 3.08148 8.7634 3.18109 9.18632 3.28619L9.82853 0.719193L11.4386 1.11946L10.7789 3.75588ZM6.92638 8.15232C8.02314 8.44312 10.4098 9.07591 10.8258 7.41677C11.2502 5.71931 8.9315 5.20668 7.79623 4.95567C7.66764 4.92721 7.55401 4.90211 7.46149 4.8791L6.65969 8.083C6.73609 8.10185 6.8258 8.12568 6.92638 8.15232ZM5.68373 13.3108C6.99734 13.6569 9.8704 14.4136 10.3276 12.5855C10.7955 10.7162 8.00991 10.0936 6.65072 9.7898C6.49903 9.75591 6.36473 9.72591 6.25508 9.69864L5.37065 13.2298C5.46045 13.252 5.56602 13.2798 5.68373 13.3108Z" fill="white"/></svg></div>
                   </div>

                   <div className="flex items-center gap-2 justify-between mt-5 flex-wrap">
                   <div className='text-[#11047A] text-[15px] font-[400] text-opacity-60'>Address From</div>
                   <div className='text-[#11047A] font-[600]'>0x12343212321234</div>
                   </div>


                   <div className="flex items-center gap-2 justify-between mt-5 flex-wrap">
                   <div className='text-[#11047A] text-[15px] font-[400] text-opacity-60'>Address To</div>
                   <div className='text-[#11047A] font-[600]'>User’s Address</div>
                   </div>


                   <div className="flex items-center gap-2 justify-between mt-5 flex-wrap">
                   <div className='text-[#11047A] text-[15px] font-[400] text-opacity-60'>1 BTC Price</div>
                   <div className='text-[#11047A] font-[600]'>$16,852.10</div>
                   </div>


                   <div className="flex items-center gap-2 justify-between mt-5 flex-wrap">
                   <div className='text-[#11047A] text-[15px] font-[400] text-opacity-60'>Amount</div>
                   <div className='text-[#11047A] font-[600]'>$98.03</div>
                   </div>


                   <div className="flex items-center gap-2 justify-between mt-5 flex-wrap">
                   <div className='text-[#11047A] text-[15px] font-[400] text-opacity-60'>Fee’s</div>
                   <div className='text-[#11047A] font-[600]'>$1.97</div>
                   </div>


                   <div className="text-[#11047A] w-full rounded-lg bg-transparent-main-color flex items-center justify-between px-3 py-3 mt-5 gap-1.5">
                    <div className='text-[15px]'>Total Amount</div>
                    <div className="flex items-center gap-1.5 flex-row-reverse font-bold text-[17px]">$100.00</div>
                   </div>

                    <div className="text-center text-[#11047A] text-opacity-60 mt-6">The final amount could change depending on the market conditions</div>

           <button className='flex w-fit mx-auto  px-7 sm:px-10 mt-5 py-3 sm:py-4 rounded-xl bg-main-color text-white'>Continue</button>

              </div>
             }
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

    </>
  )
}

export default BuyPopup