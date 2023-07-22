import {useState} from 'react'
import DepositFundsTrans from './DepositFundsTrans'
import WithdrawalFundsTrans from './WithdrawalFundsTrans'

const CreditCard = (props) => {
    // {props.amount}
    const [email, setemail] = useState('')
    const [emailErr, setemailErr] = useState('')

    const [card, setcard] = useState('')
    const [cardErr, setcardErr] = useState('')

    const [expiry, setexpiry] = useState('')
    const [expiryErr, setexpiryErr] = useState('')

    const [cvv, setcvv] = useState('')
    const [cvvErr, setcvvErr] = useState('')

    const [holder, setholder] = useState('')
    const [holderErr, setholderErr] = useState('')

    const [country, setcountry] = useState('')
    const [countryErr, setcountryErr] = useState('')

    const [zip, setzip] = useState('')
    const [zipErr, setzipErr] = useState('')

    let validation = () =>{
        if(email === ""){
            setemailErr("error")
        }

        if(card === ""){
            setcardErr("error")
        }

        if(expiry === ""){
            setexpiryErr("error")
        }

        if(cvv === ""){
            setcvvErr("error")
        }

        if(holder === ""){
            setholderErr("error")
        }

        if(country === ""){
            setcountryErr("error")
        }

        if(zip === ""){
            setzipErr("error")
        }

        else{
            setemailErr("")
            setcardErr("")
            setexpiryErr("")
            setcvvErr("")
            setholderErr("")
            setcountryErr("")
            setzipErr("")
            props.setshowTransaction(true)
        }
    }

  return (
    <>
    {
      props.showTransaction === false ?
      <div className="bg-white rounded-lg px-5 py-8 md:mb-6">
        <img src="/images/card.svg" className='mx-auto w-[120px] mb-6' alt="card" />
        <div className="w-full">

          <div className="font-bold text-[15px] text-[#11047A] mb-2">Email Address</div>
          <div className={`flex items-center justify-between gap-2 w-full px-4 rounded-lg border border-[#F5F5F7] outline-main-color outline-[2.5px] focus-within:outline focus-within:bg-transparent-main-color focus-within:border-none overflow-hidden ${emailErr === "error" ? "border border-red-400" : ""}`}>
            <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter Email Address...' className='w-full border-none outline-none bg-transparent py-[12px]' />
            <div className='text-black'><svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.7"><path d="M7.63898 9.96703C9.97508 9.96703 11.8483 8.08307 11.8483 5.73351C11.8483 3.38306 9.97508 1.5 7.63898 1.5C5.30287 1.5 3.42969 3.38306 3.42969 5.73351C3.42969 8.08307 5.30287 9.96703 7.63898 9.96703" stroke="#1A1A1A" stroke-width="1.5"/><path d="M7.63926 13.0399C4.18927 13.0399 1.27832 13.6037 1.27832 15.7794C1.27832 17.9561 4.20808 18.5 7.63926 18.5C11.0892 18.5 14.0002 17.9362 14.0002 15.7605C14.0002 13.5839 11.0704 13.0399 7.63926 13.0399" stroke="#1A1A1A" stroke-width="1.5"/></g></svg></div>
          </div>
          <div className={`text-red-400 text-sm mt-2 ${emailErr === "error" ? "flex" : "hidden"}`}>Please Enter Email Address</div>

          
          <div className="font-bold text-[15px] text-[#11047A] mb-2 mt-6">Card Number</div>
          <div className={`flex items-center justify-between gap-2 w-full px-4 rounded-lg border border-[#F5F5F7] outline-main-color outline-[2.5px] focus-within:outline focus-within:bg-transparent-main-color focus-within:border-none overflow-hidden ${cardErr === "error" ? "border border-red-400" : ""}`}>
            <input type="text" value={card} onChange={(e)=>{setcard(e.target.value)}} placeholder='1234 1234 1234 1234' className='w-full border-none outline-none bg-transparent py-[12px]' />
            <div className='text-black'><svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 9.25C3.58579 9.25 3.25 9.58579 3.25 10C3.25 10.4142 3.58579 10.75 4 10.75V9.25ZM7.5 10.75C7.91421 10.75 8.25 10.4142 8.25 10C8.25 9.58579 7.91421 9.25 7.5 9.25V10.75ZM3 1.75H17V0.25H3V1.75ZM18.25 3V11H19.75V3H18.25ZM17 12.25H3V13.75H17V12.25ZM1.75 11V3H0.25V11H1.75ZM3 12.25C2.30964 12.25 1.75 11.6904 1.75 11H0.25C0.25 12.5188 1.48122 13.75 3 13.75V12.25ZM18.25 11C18.25 11.6904 17.6904 12.25 17 12.25V13.75C18.5188 13.75 19.75 12.5188 19.75 11H18.25ZM17 1.75C17.6904 1.75 18.25 2.30964 18.25 3H19.75C19.75 1.48122 18.5188 0.25 17 0.25V1.75ZM3 0.25C1.48122 0.25 0.25 1.48122 0.25 3H1.75C1.75 2.30964 2.30964 1.75 3 1.75V0.25ZM1 5.75H19V4.25H1V5.75ZM4 10.75H7.5V9.25H4V10.75Z" fill="#1A1A1A"/></svg></div>
          </div>
          <div className={`text-red-400 text-sm mt-2 ${cardErr === "error" ? "flex" : "hidden"}`}>Please Enter Card Number</div>


          <div className="grid grid-cols-[1fr,120px] gap-3 mt-6">
             <div>
             <div className="font-bold text-[15px] text-[#11047A] mb-2">Valid Thru</div>
          <div className={`flex items-center justify-between gap-2 w-full px-4 rounded-lg border border-[#F5F5F7] outline-main-color outline-[2.5px] focus-within:outline focus-within:bg-transparent-main-color focus-within:border-none overflow-hidden ${expiryErr === "error" ? "border border-red-400" : ""}`}>
            <input type="text" value={expiry} onChange={(e)=>{setexpiry(e.target.value)}} placeholder='MM/YY' className='w-full border-none outline-none bg-transparent py-[12px]' />
          </div>
          <div className={`text-red-400 text-sm mt-2 ${expiryErr === "error" ? "flex" : "hidden"}`}>Please Enter Expiry Date</div>
             </div>


             <div>
             <div className="font-bold text-[15px] text-[#11047A] mb-2">CVV</div>
          <div className={`flex items-center justify-between gap-2 w-full px-4 rounded-lg border border-[#F5F5F7] outline-main-color outline-[2.5px] focus-within:outline focus-within:bg-transparent-main-color focus-within:border-none overflow-hidden ${cvvErr === "error" ? "border border-red-400" : ""}`}>
            <input type="text" value={cvv} onChange={(e)=>{setcvv(e.target.value)}} placeholder='CVV' className='w-full border-none outline-none bg-transparent py-[12px]' />
          </div>
          <div className={`text-red-400 text-sm mt-2 ${cvvErr === "error" ? "flex" : "hidden"}`}>Please Enter CVV</div>
             </div>

          </div>



          <div className='mt-6'>
          <div className="font-bold text-[15px] text-[#11047A] mb-2">Card Holder’s Name</div>
          <div className={`flex items-center justify-between gap-2 w-full px-4 rounded-lg border border-[#F5F5F7] outline-main-color outline-[2.5px] focus-within:outline focus-within:bg-transparent-main-color focus-within:border-none overflow-hidden ${holderErr === "error" ? "border border-red-400" : ""}`}>
            <input type="text" value={holder} onChange={(e)=>{setholder(e.target.value)}} placeholder='Enter Name...' className='w-full border-none outline-none bg-transparent py-[12px]' />
          </div>
          <div className={`text-red-400 text-sm mt-2 ${holderErr === "error" ? "flex" : "hidden"}`}>Please Enter Card Holder’s Name</div>
          </div>



          <div className="grid grid-cols-[1fr,120px] gap-3 mt-6">
             <div>
             <div className="font-bold text-[15px] text-[#11047A] mb-2">Country / region</div>
          <div className={`flex items-center justify-between gap-2 w-full px-4 rounded-lg border border-[#F5F5F7] outline-main-color outline-[2.5px] focus-within:outline focus-within:bg-transparent-main-color focus-within:border-none overflow-hidden ${countryErr === "error" ? "border border-red-400" : ""}`}>
            <input type="text" value={country} onChange={(e)=>{setcountry(e.target.value)}} placeholder='Select Country' className='w-full border-none outline-none bg-transparent py-[12px]' />
            <div className='text-black'><svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.21244 5.9C4.67358 6.83333 3.32642 6.83333 2.78756 5.9L0.882309 2.6C0.343449 1.66667 1.01702 0.5 2.09474 0.5L5.90525 0.499999C6.98297 0.499999 7.65655 1.66667 7.11769 2.6L5.21244 5.9Z" fill="#1A1A1A"/></svg></div>
          </div>
          <div className={`text-red-400 text-sm mt-2 ${countryErr === "error" ? "flex" : "hidden"}`}>Please Enter Country</div>
             </div>


             <div>
             <div className="font-bold text-[15px] text-[#11047A] mb-2">Zip Code</div>
          <div className={`flex items-center justify-between gap-2 w-full px-4 rounded-lg border border-[#F5F5F7] outline-main-color outline-[2.5px] focus-within:outline focus-within:bg-transparent-main-color focus-within:border-none overflow-hidden ${zipErr === "error" ? "border border-red-400" : ""}`}>
            <input type="text" value={zip} onChange={(e)=>{setzip(e.target.value)}} placeholder='12345' className='w-full border-none outline-none bg-transparent py-[12px]' />
          </div>
          <div className={`text-red-400 text-sm mt-2 ${zipErr === "error" ? "flex" : "hidden"}`}>Please Enter ZIP</div>
             </div>

          </div>


          <button onClick={validation} className="w-full bg-main-color px-3 py-3 text-white rounded-lg mt-6">{props.show === "DepositFunds" ? "Pay" : "Withdrawal"}</button>


        </div>
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

export default CreditCard