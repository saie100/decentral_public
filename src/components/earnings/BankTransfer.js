import DepositFundsTrans from './DepositFundsTrans'
import WithdrawalFundsTrans from './WithdrawalFundsTrans'

const BankTransfer = (props) => {
    // {props.amount}

  return (
    <>
    {
      props.showTransaction === false ?
      <div className="flex items-center justify-center h-full w-full md:mb-6">
        <div className="bg-white w-full rounded-lg px-5 py-8 ">
   <div>
      <img src="/images/bank.png" className="w-[100px] mx-auto mb-5" alt="Bank logo" />
      <div className="text-[#11047A] text-opacity-60 text-center">{props.show === "DepositFunds" ? "Pay" : "Withdrawal"} through bank with easy payment method.</div>
      <button onClick={()=> {props.setshowTransaction(true)}} className="flex items-center justify-center font-[500] w-full py-3 rounded-lg bg-white border border-[#EEEEEE] mt-5">{props.show === "DepositFunds" ? "Pay" : "Withdrawal"}</button>
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

export default BankTransfer