import React from 'react'
import PaymentCont from './PaymentCont';
import Slider from './Slider';

const Platforms = (props) => {
  const [paymentSelect, setpaymentSelect] = React.useState('Card');

  const [amount, setamount] = React.useState(5000);
  const [error, seterror] = React.useState("");

  let submit = () =>{
    if(amount === ""){
      seterror("error");
    }

    else if(amount === 0){
      seterror("error");
    }

    else{
      seterror("");
      if(paymentSelect === "Card"){
        props.setpaymentMethod("Credit / Debit Card")
      }

      if(paymentSelect === "PayPal"){
        props.setpaymentMethod("PayPal")
      }

      if(paymentSelect === "Venmo"){
        props.setpaymentMethod("Venmo")
      }

      if(paymentSelect === "G Pay"){
        props.setpaymentMethod("G Pay")
      }

      if(paymentSelect === "Zelle"){
        props.setpaymentMethod("Zelle")
      }

      if(paymentSelect === "Cash App"){
        props.setpaymentMethod("Cash App")
      }

      if(paymentSelect === "Bank"){
        props.setpaymentMethod("Bank")
      }

    }

    
  }

  return (
    <>
    {props.paymentMethod === "not-selected" ? 
    
    <div>
    <div className={`grid grid-cols-1 md:grid-cols-[1fr,300px] gap-3`}>
        <div>
            <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
                <div className='text-[#11047A] text-opacity-60 font-[500]'>Current Balance:</div>
                <div className="flex items-center gap-3">
                    <div className='text-[23px] font-[700] text-[#11047A]'>$129.00</div>
                    <button className='px-3 h-[40px] rounded-xl bg-white'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.833008 3.33325V8.33325H5.83301" stroke="#0085FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.167 16.6667V11.6667H14.167" stroke="#0085FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.0747 7.49998C16.652 6.30564 15.9337 5.23782 14.9868 4.39616C14.0398 3.55451 12.8951 2.96645 11.6594 2.68686C10.4238 2.40727 9.13738 2.44527 7.92035 2.79729C6.70332 3.14932 5.5953 3.80391 4.69967 4.69998L0.833008 8.33331M19.1663 11.6666L15.2997 15.3C14.4041 16.1961 13.296 16.8506 12.079 17.2027C10.862 17.5547 9.5756 17.5927 8.33991 17.3131C7.10423 17.0335 5.95951 16.4455 5.01256 15.6038C4.06562 14.7621 3.34731 13.6943 2.92467 12.5" stroke="#0085FF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
                </div>
            </div>

            <div className="rounded-lg bg-white p-5">
             <div className='text-not-black font-bold text-[19px] mb-4'>Services</div>
               
               <div className="flex sm:hidden">
                <Slider paymentSelect={paymentSelect} setpaymentSelect={setpaymentSelect}/>
               </div>

                {/* grid */}
                <div className="hidden sm:grid grid-cols-1 sm9:grid-cols-2 md2:grid-cols-3 lg5:grid-cols-4 2xl:grid-cols-5 gap-3">

                    <button onClick={()=> {setpaymentSelect("Card")}} className={`relative flex items-center justify-center flex-col gap-2.5 px-2 py-5 bg-white rounded-[8px] border ${paymentSelect === "Card" ? "custom-card-shadow border-[#0085FF33] border-opacity-20" : "border-[#EEEEEE]"}`}>
                       <img src="/images/card.svg" alt="card" />
                       <div className={`text-[15px] ${paymentSelect === "Card" ? "text-main-color font-[600]" : "text-black text-opacity-50"}`}>Credit/ Debit Card</div>
                       <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-[80px] rounded-t-md bg-main-color ${paymentSelect === "Card" ? "flex" : "hidden"}`}></div>
                    </button>

                    <button onClick={()=> {setpaymentSelect("PayPal")}} className={`relative flex items-center justify-center flex-col gap-2.5 px-2 py-5 bg-white rounded-[8px] border ${paymentSelect === "PayPal" ? "custom-card-shadow border-[#0085FF33] border-opacity-20" : "border-[#EEEEEE]"}`}>
                       <img src="/images/paypal.svg" className='w-[60px]' alt="paypal" />
                       <div className={`text-[15px] ${paymentSelect === "PayPal" ? "text-main-color font-[600]" : "text-black text-opacity-50"}`}>PayPal</div>
                       <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-[80px] rounded-t-md bg-main-color ${paymentSelect === "PayPal" ? "flex" : "hidden"}`}></div>
                    </button>

                    <button onClick={()=> {setpaymentSelect("Venmo")}} className={`relative flex items-center justify-center flex-col gap-2.5 px-2 py-5 bg-white rounded-[8px] border ${paymentSelect === "Venmo" ? "custom-card-shadow border-[#0085FF33] border-opacity-20" : "border-[#EEEEEE]"}`}>
                       <img src="/images/venmo.svg" className='w-[60px]' alt="venmo" />
                       <div className={`text-[15px] ${paymentSelect === "Venmo" ? "text-main-color font-[600]" : "text-black text-opacity-50"}`}>Venmo</div>
                       <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-[80px] rounded-t-md bg-main-color ${paymentSelect === "Venmo" ? "flex" : "hidden"}`}></div>
                    </button>

                    <button onClick={()=> {setpaymentSelect("G Pay")}} className={`relative flex items-center justify-center flex-col gap-2.5 px-2 py-5 bg-white rounded-[8px] border ${paymentSelect === "G Pay" ? "custom-card-shadow border-[#0085FF33] border-opacity-20" : "border-[#EEEEEE]"}`}>
                       <img src="/images/gpay.svg" alt="G Pay" />
                       <div className={`text-[15px] translate-y-2.5 ${paymentSelect === "G Pay" ? "text-main-color font-[600]" : "text-black text-opacity-50"}`}>Google Pay</div>
                       <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-[80px] rounded-t-md bg-main-color ${paymentSelect === "G Pay" ? "flex" : "hidden"}`}></div>
                    </button>

                    <button onClick={()=> {setpaymentSelect("Zelle")}} className={`relative flex items-center justify-center flex-col gap-2.5 px-2 py-5 bg-white rounded-[8px] border ${paymentSelect === "Zelle" ? "custom-card-shadow border-[#0085FF33] border-opacity-20" : "border-[#EEEEEE]"}`}>
                       <img src="/images/zelle.svg" className='w-[70px]' alt="zelle" />
                       <div className={`text-[15px] -mt-2 ${paymentSelect === "Zelle" ? "text-main-color font-[600]" : "text-black text-opacity-50"}`}>Zelle</div>
                       <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-[80px] rounded-t-md bg-main-color ${paymentSelect === "Zelle" ? "flex" : "hidden"}`}></div>
                    </button>


                    <button onClick={()=> {setpaymentSelect("Cash App")}} className={`relative flex items-center justify-center flex-col gap-2.5 px-2 py-5 bg-white rounded-[8px] border ${paymentSelect === "Cash App" ? "custom-card-shadow border-[#0085FF33] border-opacity-20" : "border-[#EEEEEE]"}`}>
                       <img src="/images/cashApp.svg" alt="cashApp" />
                       <div className={`text-[15px] ${paymentSelect === "Cash App" ? "text-main-color font-[600]" : "text-black text-opacity-50"}`}>Cash App</div>
                       <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-[80px] rounded-t-md bg-main-color ${paymentSelect === "Cash App" ? "flex" : "hidden"}`}></div>
                    </button>

                    {/* If you want it to be clickable add the onClick fucntion and remove the opacity and cursor default. Make sure to do these things in the mobile slider too */}
                    {/* onClick={()=> {setpaymentSelect("Bank")}} */}
                    <button className={`opacity-60 cursor-default relative flex items-center justify-center flex-col gap-2.5 px-2 py-5 bg-white rounded-[8px] border ${paymentSelect === "Bank" ? "custom-card-shadow border-[#0085FF33] border-opacity-20" : "border-[#EEEEEE]"}`}>
                       <img src="/images/bank.png" className='w-[50px]' alt="Bank" />
                       <div className={`text-[15px] ${paymentSelect === "Bank" ? "text-main-color font-[600]" : "text-black text-opacity-50"}`}>Bank Transfer</div>
                       <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-[80px] rounded-t-md bg-main-color ${paymentSelect === "Bank" ? "flex" : "hidden"}`}></div>
                    </button>

                </div>


                <div className="mt-7 md:mt-12">
                  <div className='text-not-black font-bold text-[19px] mb-4'>Amount</div>

                  <div className='grid grid-cols-1 md2:grid-cols-[1fr,300px] gap-3'>
                  <div className={`flex items-center justify-between gap-2 w-full px-4 rounded-lg border border-[#F5F5F7] outline-main-color outline-[2.5px] focus-within:outline focus-within:bg-transparent-main-color focus-within:border-none overflow-hidden ${error === "error" ? "border border-red-400" : ""}`}>
                      <input type="text" value={amount} onChange={(e)=>{setamount(e.target.value)}} placeholder='Enter Amount...' className='w-full border-none outline-none bg-transparent h-full py-[16px]' />
                      <div className='text-black'>$</div>
                  </div>

                  <div className={`flex items-center justify-between gap-2 w-full px-4 rounded-lg border border-[#F5F5F7] outline-main-color outline-[2.5px] focus-within:outline focus-within:bg-transparent-main-color overflow-hidden`}>
                      <input type="text" placeholder='Discount code' className='w-full border-none outline-none bg-transparent h-full py-[16px]' />
                      <div className='text-black'><img src="/images/discount.svg" className='scale-110' alt="discound" /></div>
                  </div>
                  
                  </div>

                  <div className={`text-red-400 text-sm mt-2 ${error === "error" ? "flex" : "hidden"}`}>Please Enter Amount</div>


                </div>

            </div>
        </div>
        <div>
        <div className="rounded-lg bg-white p-5 h-full">
        <div className='text-not-black font-bold text-[19px] mb-1'>{props.show === "DepositFunds" ? "Deposit Summary" : "Withdrawal Summary"}</div>
        <div className='text-sm text-[#90A3BF]'>Please check the Summary for review.</div>

        <div className="flex items-center flex-col gap-4 mt-5">
              <div className="text-[#11047A] w-full rounded-lg bg-transparent-main-color flex items-center justify-between px-3 py-3 gap-1.5">
               <div className='text-[15px]'>{props.show === "DepositFunds" ? "To Deposit" : "To Withdrawal"}</div>
               <div className="flex items-center gap-1.5 flex-row-reverse font-bold text-[17px]">${amount === "" ? 0 : amount}</div>
              </div>

              <div className="text-[#11047A] w-full rounded-lg bg-transparent-main-color flex items-center justify-between px-3 py-3 gap-1.5">
               <div className='text-[15px]'>Discount</div>
               <div className="flex items-center gap-1.5 flex-row-reverse font-bold text-[17px]">$100</div>
              </div>

              <div className="text-[#11047A] w-full rounded-lg bg-transparent-main-color flex items-center justify-between px-3 py-3 gap-1.5">
               <div className='text-[15px]'>Payment Method</div>
               <div className="flex items-center gap-1.5 flex-row-reverse font-bold text-[17px]">{paymentSelect === "Card" ? "Visa" : paymentSelect}</div>
              </div>


              <div className="text-[#11047A] w-full rounded-lg bg-transparent-main-color flex items-center justify-between px-3 py-3 gap-1.5">
               <div className='text-[15px]'>Service Fee</div>
               <div className="flex items-center gap-1.5 flex-row-reverse font-bold text-[17px]">3%</div>
              </div>


              <div className="text-[#11047A] w-full rounded-lg bg-transparent-main-color flex items-center justify-between px-3 py-3 gap-1.5">
               <div className='text-[15px]'>To Pay</div>
               <div className="flex items-center gap-1.5 flex-row-reverse font-bold text-[17px]">$2,900</div>
              </div>
        </div>


        <button onClick={submit} className='w-full rounded-lg bg-main-color text-white py-3.5 mt-6'>{props.show === "DepositFunds" ? "Deposit" : "Withdrawal"}</button>
        <div className='text-sm text-[#90A3BF] text-center mt-3'>Overall price and includes rental discount</div>


        </div>

      
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-end gap-2 mt-5 md:-translate-x-[35px]">
          <img src="/images/lock.svg" alt="lock icon" />
          <div className='text-sm text-[#90A3BF]'>2048-Bit Strong SSL Security</div>
        </div>
      </div>

    : ""}
      


      {props.paymentMethod !== "not-selected" ? 
      <PaymentCont
       show={props.show}
       amount={amount}
       paymentMethod={props.paymentMethod}
       setpaymentMethod={props.setpaymentMethod}
       showTransaction={props.showTransaction}
       setshowTransaction={props.setshowTransaction}

      
      />
        :
        ""
      }
      
    

    </>
  )
}

export default Platforms