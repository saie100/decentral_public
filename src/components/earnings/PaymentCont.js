import React from 'react'
import CreditCard from './CreditCard'
import PayPal from './PayPal'
import Venmo from './Venmo'
import GPay from './GPay'
import Zelle from './Zelle'
import CashApp from './CashApp'
import BankTransfer from './BankTransfer'

const PaymentCont = (props) => {

  return (
    <>
      <div className={`${props.showTransaction === false ? "md:grid-cols-2" : ""} grid grid-cols-1 gap-6 pt-6 h-[calc(100%-80px)]`}>
        {
          props.showTransaction === false ?
          <div className='relative'>
          <button onClick={()=> {props.setpaymentMethod("not-selected")}} className="flex items-center gap-2 font-bold text-[#11047A] text-[17px] mb-10">
          <svg width="19" height="13" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.5"><path d="M5.92866 7.70075C6.17017 7.56714 6.36318 7.35745 6.47008 7.10973C6.53838 6.93809 6.64429 6.42314 6.64429 6.41436C6.75118 5.85163 6.80859 4.93683 6.80859 3.92645C6.80859 2.96385 6.75119 2.08708 6.66408 1.51557C6.65418 1.50582 6.54729 0.867992 6.43148 0.648556C6.21867 0.247719 5.80295 -4.39579e-08 5.35754 -6.34274e-08L5.31894 -6.51148e-08C5.02893 0.00975264 4.4202 0.257472 4.4202 0.267224C3.39476 0.686591 1.3726 1.99151 0.560961 2.8595C0.560961 2.8595 0.331326 3.08283 0.232346 3.22132C0.0769466 3.42125 -0.000257652 3.66897 -0.000257663 3.91767C-0.000257675 4.19367 0.0868447 4.45017 0.251152 4.66082C0.289755 4.69886 0.435255 4.86076 0.569868 4.99437C1.36369 5.83213 3.43337 7.20531 4.51621 7.6237C4.68052 7.691 5.09722 7.83436 5.31894 7.84314C5.53175 7.84314 5.73565 7.79632 5.92866 7.70075Z" fill="#11047A"/><path opacity="0.4" d="M8.24231 3.92215C8.24231 4.35224 8.59567 4.70041 9.03217 4.70041L12.8479 4.914C13.4041 4.914 13.8545 4.47025 13.8545 3.92215C13.8545 3.37405 13.4041 2.92932 12.8479 2.92932L9.03217 3.14388C8.59567 3.14388 8.24231 3.49205 8.24231 3.92215Z" fill="#11047A"/></g></svg>
          <span className='leading-none -translate-y-[1px]'>Back</span>
          </button>

          <div>
            <div className='text-[#11047A] text-opacity-60 font-[500]'>Total Amount</div>
            <div className='text-[#11047A] font-bold text-[42px]'>${props.amount}</div>
          </div>

          <div className="mt-12 mb-7 md:mb-16">
          <div className='text-[#11047A] text-opacity-60 font-[500] mb-1.5'>Payment Details</div>
          <div className="flex items-center flex-col gap-3 mt-5">
              <div className="text-[#11047A] w-full rounded-xl flex items-center justify-between px-3 py-3.5 gap-1 bg-white">
               <div className='text-[15px]'>Total</div>
               <div className="flex items-center gap-1.5 flex-row-reverse font-bold text-[17px]">${props.amount}</div>
              </div>

              <div className="text-[#11047A] w-full rounded-xl flex items-center justify-between px-3 py-3.5 gap-1 bg-white">
               <div className='text-[15px]'>Processing Time</div>
               <div className="flex items-center gap-1.5 flex-row-reverse font-bold text-[17px]">1 hour</div>
              </div>

              <div className="text-[#11047A] w-full rounded-xl flex items-center justify-between px-3 py-3.5 gap-1 bg-white">
               <div className='text-[15px]'>Payment Method</div>
               <div className="flex items-center gap-1.5 flex-row-reverse font-bold text-[17px]">{props.paymentMethod}</div>
              </div>


              <div className="text-[#11047A] w-full rounded-xl flex items-center justify-between px-3 py-3.5 gap-1 bg-white">
               <div className='text-[15px]'>Transfer Method</div>
               <div className="flex items-center gap-1.5 flex-row-reverse font-bold text-[17px]">{props.show === "DepositFunds" ? "Deposit" : "Withdrawal"}</div>
              </div>


           
        </div>
          </div>



          <div className='absolute bottom-5 left-0 hidden md:flex gap-6'>
                <div><span className='text-[#11047A] text-opacity-60'>Powered by</span> <span className='text-[#11047A] font-bold'>Stripe.</span></div>
                <a href="#" className='text-[#11047A] text-opacity-60 underline'>Terms & Conditions</a>
          </div>

        </div>
        :
        null
        }

        <div>

           {
            props.paymentMethod === "Credit / Debit Card" 

            ?
            <CreditCard amount={props.amount} show={props.show} showTransaction={props.showTransaction} setshowTransaction={props.setshowTransaction} paymentMethod={props.paymentMethod}/>
            :

            props.paymentMethod === "PayPal"

            ?
            <PayPal amount={props.amount} show={props.show} showTransaction={props.showTransaction} setshowTransaction={props.setshowTransaction} paymentMethod={props.paymentMethod}/>
            
            :
            props.paymentMethod === "Venmo"

            ?
            <Venmo amount={props.amount} show={props.show} showTransaction={props.showTransaction} setshowTransaction={props.setshowTransaction} paymentMethod={props.paymentMethod}/>
            :
            
            props.paymentMethod === "G Pay"

            ?
            <GPay amount={props.amount} show={props.show} showTransaction={props.showTransaction} setshowTransaction={props.setshowTransaction} paymentMethod={props.paymentMethod}/>
            :
            props.paymentMethod === "Zelle"

            ?
            <Zelle amount={props.amount} show={props.show} showTransaction={props.showTransaction} setshowTransaction={props.setshowTransaction} paymentMethod={props.paymentMethod}/>
            :
            props.paymentMethod === "Cash App"

            ?
            <CashApp amount={props.amount} show={props.show} showTransaction={props.showTransaction} setshowTransaction={props.setshowTransaction} paymentMethod={props.paymentMethod}/>
            :
            props.paymentMethod === "Bank"

            ?
            <BankTransfer amount={props.amount} show={props.show} showTransaction={props.showTransaction} setshowTransaction={props.setshowTransaction} paymentMethod={props.paymentMethod}/>
            :
            ""

            }
            
            {
              props.showTransaction === false ?
              <div className='flex md:hidden gap-6 mt-5'>
                <div><span className='text-[#11047A] text-opacity-60'>Powered by</span> <span className='text-[#11047A] font-bold'>Stripe.</span></div>
                <a href="#" className='text-[#11047A] text-opacity-60 underline'>Terms & Conditions</a>
              </div>
              :
              null
            }
        </div>
      </div>
    </>
  )
}

export default PaymentCont