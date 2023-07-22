import DepositFundsTrans from './DepositFundsTrans'
import WithdrawalFundsTrans from './WithdrawalFundsTrans'

const GPay = (props) => {
    // {props.amount}

  return (
    <>
    {
      props.showTransaction === false ?
      <div className="flex items-center justify-center h-full w-full md:mb-6">
        <div className="bg-white w-full rounded-lg px-5 py-8 ">
   <div>
      <img src="/images/google.svg" className="w-[100px] mx-auto mb-5" alt="google logo" />
      <div className="text-[#11047A] text-opacity-60 text-center">Pay through Google Pay with easy payment method.</div>
      <button onClick={()=> {props.setshowTransaction(true)}} className="flex items-center justify-center font-[500] w-full py-3 rounded-lg bg-white border border-[#EEEEEE] mt-5"><img src="/images/gpay2.svg" className="translate-y-0.5" alt="gpay logo" /></button>
   </div>
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

export default GPay