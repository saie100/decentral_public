import {useState} from 'react';
import DepositFundsTrans from './DepositFundsTrans'
import WithdrawalFundsTrans from './WithdrawalFundsTrans'

const Venmo = (props) => {
    // {props.amount}
  
    const [withdrawlEmailFrom, setwithdrawlEmailFrom] = useState("")
    const [withdrawlEmailFromErr, setwithdrawlEmailFromErr] = useState("")

    const [withdrawlEmailTo, setwithdrawlEmailTo] = useState("")
    const [withdrawlEmailToErr, setwithdrawlEmailToErr] = useState("")

    let validation = () =>{
      if(withdrawlEmailFrom === ""){
        setwithdrawlEmailFromErr("error")
      }

      if(withdrawlEmailTo === ""){
        setwithdrawlEmailToErr("error")
      }

    else{
      setwithdrawlEmailFromErr("")
      setwithdrawlEmailToErr("")
      props.setshowTransaction(true)
       
    }
    }
    

  return (
    <>
    {
      props.showTransaction === false ?
      <div>
    {props.show === "DepositFunds" ? 

<div className="flex items-center justify-center h-full w-full md:mb-6">
    <div className="bg-white w-full rounded-lg px-5 py-8 ">
<div>
  <img src="/images/venmo.svg" className="w-[100px] mx-auto mb-5" alt="venmo" />
  <div className="text-[#11047A] text-opacity-60 text-center">Pay through Venmo with easy payment method.</div>
  <button onClick={()=> {props.setshowTransaction(true)}} className="flex items-center justify-center gap-2 text-white font-[500] w-full py-2.5 rounded-lg bg-[#3C95D2] mt-5">Pay through <img src="/images/venmo2.svg" alt="venmo logo" /></button>
</div>
</div>
</div>
: 

<div className="bg-white w-full rounded-lg px-5 py-8 md:mb-6">
  <img src="/images/venmo.svg" className="w-[100px] mx-auto mb-5" alt="venmo" />
  <div className="text-[#11047A] text-center"><span className="text-[#11047A] text-opacity-60">Please enter your</span> <span className="font-[600]">deposit from</span> <span className="text-[#11047A] text-opacity-60">&</span> <span className="font-[600]">deposit to</span> <span className="text-[#11047A] text-opacity-60">Emails to place an order</span></div>

  <div className="mt-10">
  <div>
  <div className="font-bold text-[15px] text-[#11047A] mb-2"><span className="text-[#11047A] text-opacity-70">Email Address</span> Withdrawal from.</div>
      <div className={`flex items-center justify-between gap-2 w-full px-4 rounded-lg border border-[#F5F5F7] outline-main-color outline-[2.5px] focus-within:outline focus-within:bg-transparent-main-color focus-within:border-none overflow-hidden ${withdrawlEmailFromErr === "error" ? "border border-red-400" : ""}`}>
        <input type="email" value={withdrawlEmailFrom} onChange={(e)=>{setwithdrawlEmailFrom(e.target.value)}} placeholder='Enter  Address...' className='w-full border-none outline-none bg-transparent py-[12px]' />
        <div className='text-black'><svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.4"><path d="M7.63898 9.96703C9.97508 9.96703 11.8483 8.08307 11.8483 5.73351C11.8483 3.38306 9.97508 1.5 7.63898 1.5C5.30287 1.5 3.42969 3.38306 3.42969 5.73351C3.42969 8.08307 5.30287 9.96703 7.63898 9.96703" stroke="#11047A" stroke-width="1.5"/><path d="M7.63926 13.04C4.18927 13.04 1.27832 13.6038 1.27832 15.7795C1.27832 17.9562 4.20808 18.5001 7.63926 18.5001C11.0892 18.5001 14.0002 17.9364 14.0002 15.7606C14.0002 13.584 11.0704 13.04 7.63926 13.04" stroke="#11047A" stroke-width="1.5"/></g></svg></div>
      </div>
      <div className={`text-red-400 text-sm mt-2 ${withdrawlEmailFromErr === "error" ? "flex" : "hidden"}`}>Please Enter Email Adress</div>
  </div>


  <div className='mt-[65px]'>
  <div className="font-bold text-[15px] text-[#11047A] mb-2"><span className="text-[#11047A] text-opacity-70">Email Address</span> Withdrawal to.</div>
      <div className={`flex items-center justify-between gap-2 w-full px-4 rounded-lg border border-[#F5F5F7] outline-main-color outline-[2.5px] focus-within:outline focus-within:bg-transparent-main-color focus-within:border-none ${withdrawlEmailToErr === "error" ? "border border-red-400" : ""}`}>
        <input type="email" value={withdrawlEmailTo} onChange={(e)=>{setwithdrawlEmailTo(e.target.value)}} placeholder='Enter  Address...' className='w-full border-none outline-none bg-transparent py-[12px]' />
        <div className='relative text-black'>
            <div className={`absolute left-1/2 -translate-x-1/2 ${withdrawlEmailFromErr === "error" ? "-top-[110px]" : "-top-[100px]"}`}><svg width="6" height="74" viewBox="0 0 6 74" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333ZM3 68.3333C1.52724 68.3333 0.33333 69.5272 0.33333 71C0.33333 72.4728 1.52724 73.6667 3 73.6667C4.47276 73.6667 5.66666 72.4728 5.66666 71C5.66666 69.5272 4.47276 68.3333 3 68.3333ZM2.5 4.88889C2.5 5.16503 2.72386 5.38889 3 5.38889C3.27614 5.38889 3.5 5.16503 3.5 4.88889L2.5 4.88889ZM3.5 8.66667C3.5 8.39052 3.27614 8.16667 3 8.16667C2.72386 8.16667 2.5 8.39052 2.5 8.66667L3.5 8.66667ZM2.5 12.4444C2.5 12.7206 2.72386 12.9444 3 12.9444C3.27614 12.9444 3.5 12.7206 3.5 12.4444L2.5 12.4444ZM3.5 16.2222C3.5 15.9461 3.27614 15.7222 3 15.7222C2.72386 15.7222 2.5 15.9461 2.5 16.2222L3.5 16.2222ZM2.5 20C2.5 20.2761 2.72386 20.5 3 20.5C3.27614 20.5 3.5 20.2761 3.5 20L2.5 20ZM3.5 23.7778C3.5 23.5016 3.27614 23.2778 3 23.2778C2.72386 23.2778 2.5 23.5016 2.5 23.7778L3.5 23.7778ZM2.5 27.5556C2.5 27.8317 2.72386 28.0556 3 28.0556C3.27614 28.0556 3.5 27.8317 3.5 27.5556L2.5 27.5556ZM3.5 31.3333C3.5 31.0572 3.27614 30.8333 3 30.8333C2.72386 30.8333 2.5 31.0572 2.5 31.3333L3.5 31.3333ZM2.5 35.1111C2.5 35.3873 2.72386 35.6111 3 35.6111C3.27614 35.6111 3.5 35.3873 3.5 35.1111L2.5 35.1111ZM3.5 38.8889C3.5 38.6128 3.27614 38.3889 3 38.3889C2.72386 38.3889 2.5 38.6128 2.5 38.8889L3.5 38.8889ZM2.5 42.6667C2.5 42.9428 2.72386 43.1667 3 43.1667C3.27614 43.1667 3.5 42.9428 3.5 42.6667L2.5 42.6667ZM3.5 46.4445C3.5 46.1683 3.27614 45.9445 3 45.9445C2.72386 45.9445 2.5 46.1683 2.5 46.4445L3.5 46.4445ZM2.5 50.2222C2.5 50.4984 2.72386 50.7222 3 50.7222C3.27614 50.7222 3.5 50.4984 3.5 50.2222L2.5 50.2222ZM3.5 54C3.5 53.7239 3.27614 53.5 3 53.5C2.72386 53.5 2.5 53.7239 2.5 54L3.5 54ZM2.5 57.7778C2.5 58.0539 2.72386 58.2778 3 58.2778C3.27614 58.2778 3.5 58.0539 3.5 57.7778L2.5 57.7778ZM3.5 61.5556C3.5 61.2794 3.27614 61.0556 3 61.0556C2.72386 61.0556 2.5 61.2794 2.5 61.5556L3.5 61.5556ZM2.5 65.3333C2.5 65.6095 2.72385 65.8333 3 65.8333C3.27614 65.8333 3.5 65.6095 3.5 65.3333L2.5 65.3333ZM3.5 69.1111C3.5 68.835 3.27614 68.6111 3 68.6111C2.72385 68.6111 2.5 68.835 2.5 69.1111L3.5 69.1111ZM2.5 3L2.5 4.88889L3.5 4.88889L3.5 3L2.5 3ZM2.5 8.66667L2.5 12.4444L3.5 12.4444L3.5 8.66667L2.5 8.66667ZM2.5 16.2222L2.5 20L3.5 20L3.5 16.2222L2.5 16.2222ZM2.5 23.7778L2.5 27.5556L3.5 27.5556L3.5 23.7778L2.5 23.7778ZM2.5 31.3333L2.5 35.1111L3.5 35.1111L3.5 31.3333L2.5 31.3333ZM2.5 38.8889L2.5 42.6667L3.5 42.6667L3.5 38.8889L2.5 38.8889ZM2.5 46.4445L2.5 50.2222L3.5 50.2222L3.5 46.4445L2.5 46.4445ZM2.5 54L2.5 57.7778L3.5 57.7778L3.5 54L2.5 54ZM2.5 61.5556L2.5 65.3333L3.5 65.3333L3.5 61.5556L2.5 61.5556ZM2.5 69.1111L2.5 71L3.5 71L3.5 69.1111L2.5 69.1111Z" fill="#0085FF"/></svg></div>
            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.7"><path d="M7.63898 9.96703C9.97508 9.96703 11.8483 8.08307 11.8483 5.73351C11.8483 3.38306 9.97508 1.5 7.63898 1.5C5.30287 1.5 3.42969 3.38306 3.42969 5.73351C3.42969 8.08307 5.30287 9.96703 7.63898 9.96703" stroke="#0085FF" stroke-width="1.5"/><path d="M7.63926 13.04C4.18927 13.04 1.27832 13.6038 1.27832 15.7795C1.27832 17.9562 4.20808 18.5001 7.63926 18.5001C11.0892 18.5001 14.0002 17.9364 14.0002 15.7606C14.0002 13.584 11.0704 13.04 7.63926 13.04" stroke="#0085FF" stroke-width="1.5"/></g></svg></div>
      </div>
      <div className={`text-red-400 text-sm mt-2 ${withdrawlEmailToErr === "error" ? "flex" : "hidden"}`}>Please Enter Email Adress</div>
  </div>


  <button onClick={validation} className="w-full bg-main-color px-3 py-3 text-white rounded-lg mt-6">Withdrawal</button>


   
  </div>
</div>

}
    </div>
:
props.show === "DepositFunds" ?
<DepositFundsTrans paymentMethod={props.paymentMethod}/>
:
<WithdrawalFundsTrans paymentMethod={props.paymentMethod}/>
    }
    </>
  )
}

export default Venmo