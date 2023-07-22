import {useState} from 'react'

const WithdrawalFundsTrans = (props) => {
  const [transactionType, settransactionType] = useState("successfull");

  return (
    <>
     <div className="bg-white rounded-lg px-6 py-8 max-w-[800px] mx-auto w-full md:mb-6">
        <div className="flex justify-between gap-3">
            <div className='text-center'>
                <div className='flex items-center gap-2 flex-col'>
                 <div className="mx-auto flex items-center justify-center rounded-full w-[35px] h-[35px] bg-main-color text-white text-[18px] leading-none">1</div>
                 <div className='text-[15px]'>Order placed</div>
                </div>
            </div>

            <div className="relative text-center">
            <div className='flex items-center gap-2 flex-col'>
              {
                transactionType === "processing" ?
                <svg className='mx-auto' width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="18" r="14" fill="#0085FF"/><path d="M14.8551 25V23.8494L19.1761 19.1193C19.6832 18.5653 20.1009 18.0838 20.429 17.6747C20.7571 17.2614 21 16.8736 21.1577 16.5114C21.3196 16.1449 21.4006 15.7614 21.4006 15.3608C21.4006 14.9006 21.2898 14.5021 21.0682 14.1655C20.8509 13.8288 20.5526 13.5689 20.1733 13.3857C19.794 13.2024 19.3679 13.1108 18.8949 13.1108C18.392 13.1108 17.9531 13.2152 17.5781 13.424C17.2074 13.6286 16.9197 13.9162 16.7152 14.2869C16.5149 14.6577 16.4148 15.0923 16.4148 15.5909H14.9062C14.9062 14.8239 15.0831 14.1506 15.4368 13.571C15.7905 12.9915 16.272 12.5398 16.8814 12.2159C17.495 11.892 18.1832 11.7301 18.946 11.7301C19.7131 11.7301 20.3928 11.892 20.9851 12.2159C21.5774 12.5398 22.0419 12.9766 22.3786 13.5263C22.7152 14.076 22.8835 14.6875 22.8835 15.3608C22.8835 15.8423 22.7962 16.3132 22.6214 16.7734C22.451 17.2294 22.1527 17.7386 21.7266 18.3011C21.3047 18.8594 20.7188 19.5412 19.9688 20.3466L17.0284 23.4915V23.5938H23.1136V25H14.8551Z" fill="white"/><path d="M36.5 18C36.5 27.9411 28.4411 36 18.5 36C8.55887 36 0.5 27.9411 0.5 18C0.5 8.05887 8.55887 0 18.5 0C28.4411 0 36.5 8.05887 36.5 18ZM3.04057 18C3.04057 26.538 9.96199 33.4594 18.5 33.4594C27.038 33.4594 33.9594 26.538 33.9594 18C33.9594 9.46199 27.038 2.54057 18.5 2.54057C9.96199 2.54057 3.04057 9.46199 3.04057 18Z" fill="#E3E3E3"/><path d="M13.8768 0.603843C17.3175 -0.310534 20.952 -0.184111 24.3208 0.967125C27.6895 2.11836 30.6413 4.2427 32.8027 7.07152C34.9642 9.90033 36.2383 13.3066 36.4638 16.8595C36.6894 20.4124 35.8564 23.9524 34.07 27.0318C32.2837 30.1113 29.6243 32.5919 26.4282 34.1599C23.232 35.728 19.6427 36.3131 16.1141 35.8412C12.5854 35.3693 9.27594 33.8616 6.60414 31.5088C3.93235 29.1561 2.01824 26.0638 1.10385 22.6232L3.58403 21.9641C4.36805 24.9142 6.00926 27.5655 8.30014 29.5829C10.591 31.6002 13.4287 32.8929 16.4542 33.2975C19.4798 33.7022 22.5574 33.2005 25.2979 31.856C28.0383 30.5115 30.3186 28.3846 31.8502 25.7442C33.3819 23.1038 34.0961 20.0684 33.9027 17.0221C33.7093 13.9757 32.6169 11.0551 30.7636 8.62959C28.9103 6.20409 26.3794 4.38261 23.4909 3.39551C20.6024 2.4084 17.4861 2.3 14.536 3.08402L13.8768 0.603843Z" fill="#0085FF"/></svg>
                :
                transactionType === "successfull" ?
                <div className="mx-auto flex items-center justify-center rounded-full w-[35px] h-[35px] bg-main-color text-white text-[18px] leading-none">2</div>
                :
                <svg className='mx-auto' width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1625 10.9441L11.4441 9.66251C12.0849 9.02171 13.3701 9.02171 14.0109 9.66251L18.5001 14.1517L22.9893 9.66251C23.6301 9.02171 24.9117 9.02171 25.5525 9.66251L26.8341 10.9441C27.4749 11.5849 27.4749 12.8701 26.8341 13.5109L22.3485 18.0001L26.8377 22.4893C27.4785 23.1301 27.4785 24.4117 26.8377 25.0525L25.5561 26.3377C24.9153 26.9785 23.6337 26.9785 22.9929 26.3377L18.5001 21.8485L14.0109 26.3377C13.3701 26.9785 12.0885 26.9785 11.4441 26.3377L10.1625 25.0561C9.52171 24.4153 9.52171 23.1337 10.1625 22.4929L14.6517 18.0001L10.1625 13.5109C9.51811 12.8701 9.51811 11.5849 10.1625 10.9441ZM0.860107 18.0001C0.860107 27.7417 8.75851 35.6401 18.5001 35.6401C28.2417 35.6401 36.1401 27.7417 36.1401 18.0001C36.1401 8.25851 28.2417 0.360107 18.5001 0.360107C8.75851 0.360107 0.860107 8.25851 0.860107 18.0001Z" fill="#FF5C00"/></svg>
              }
              <div className='text-[15px]'>Processing Order</div>
            </div>

            <div className="hidden sm6:flex absolute top-[20px] left-[calc(-10px)] sm8:left-[calc(-30px)] sm4:left-[calc(-50px)] sm2:-left-[90px] sm:-left-[130px] md:-left-[170px] w-[30px] sm2:w-[50px] sm:w-[80px] md:w-[120px] h-[1px] bg-main-color"></div>
            <div className={`hidden sm6:flex absolute top-[20px] right-[calc(-10px)] sm8:right-[calc(-30px)] sm4:right-[calc(-50px)] sm2:-right-[90px] sm:-right-[130px] md:-right-[170px] w-[30px] sm2:w-[50px] sm:w-[80px] md:w-[120px] h-[1px] ${transactionType === "successfull" ? "bg-main-color" : "bg-[#E1E1E1]"}`}></div>
            </div>

            <div className="text-center">
            <div className='flex items-center gap-2 flex-col'>
              <div className={`mx-auto flex items-center justify-center rounded-full w-[35px] h-[35px] text-white text-[18px] leading-none ${transactionType === "successfull" ? "bg-main-color" : "bg-[#DCDCDC]"}`}><svg width="16" height="16" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.2203 14.2013L1.9531 8.60403L0.5 10.4966L6.2203 18L18.5 1.89262L17.0571 0L6.2203 14.2013Z" fill="#FEFEFE"/></svg></div>
              <div className='text-[15px]'>Completed</div>
            </div>
            </div>
        </div>




        <div className="w-full max-w-[500px] mx-auto mt-20">
                  {
                    transactionType === "successfull"
                    ?
                    <svg className='mx-auto' width="55" height="55" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" fill="#0085FF"/><path d="M14 30.0577L21.7949 42L46 19" stroke="white" stroke-width="5"/></svg>
                    :
                    transactionType === "processing"
                    ?
                    <svg className='mx-auto' width="55" height="55" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.5 0C14 0 0.5 13.5 0.5 30C0.5 46.5 14 60 30.5 60C47 60 60.5 46.5 60.5 30C60.5 13.5 47 0 30.5 0ZM30.5 7.5C42.95 7.5 53 17.55 53 30C53 42.45 42.95 52.5 30.5 52.5C18.05 52.5 8 42.45 8 30C8 17.55 18.05 7.5 30.5 7.5ZM26.75 15V31.65L27.95 32.625L31.7 36.375L34.25 39.225L39.65 33.825L36.8 31.275L34.25 28.725V15.15H26.75V15Z" fill="#99ABBB"/></svg>
                    :
                    transactionType === "order cancelled"
                    ?
                    <svg className='mx-auto' width="55" height="55" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4342 18L18.6138 15.8204C19.7036 14.7306 21.8893 14.7306 22.9791 15.8204L30.6138 23.4551L38.2485 15.8204C39.3383 14.7306 41.5179 14.7306 42.6077 15.8204L44.7872 18C45.877 19.0898 45.877 21.2755 44.7872 22.3653L37.1587 30L44.7934 37.6347C45.8832 38.7245 45.8832 40.9041 44.7934 41.9939L42.6138 44.1796C41.524 45.2694 39.3444 45.2694 38.2546 44.1796L30.6138 36.5449L22.9791 44.1796C21.8893 45.2694 19.7097 45.2694 18.6138 44.1796L16.4342 42C15.3444 40.9102 15.3444 38.7306 16.4342 37.6408L24.0689 30L16.4342 22.3653C15.3383 21.2755 15.3383 19.0898 16.4342 18ZM0.61377 30C0.61377 46.5673 14.0464 60 30.6138 60C47.1811 60 60.6138 46.5673 60.6138 30C60.6138 13.4327 47.1811 0 30.6138 0C14.0464 0 0.61377 13.4327 0.61377 30Z" fill="#FF5C00"/></svg>
                    :
                    null
                  }

                  <div className='text-center font-[600] text-[20px] mt-4'>
                  {
                    transactionType === "successfull"
                    ?
                    "Successfully Withdrew $131.05!"
                    :
                    transactionType === "processing"
                    ?
                    "Processing $131.05 Withdraw"
                    :
                    transactionType === "order cancelled"
                    ?
                    "Order Cancelled"
                    :
                    null
                  }
                  </div>

                  <div className="flex items-center justify-center flex-col gap-3 mt-10">
                     <div className="flex items-center justify-between gap-4 whitespace-nowrap rounded-lg border border-black px-4 py-2 w-full">
                        <div className='font-[500]'>TxID</div>
                        <div className='font-[600] text-[17px] text-ellipsis overflow-hidden'>Tx000000001</div>
                     </div>

                     <div className="flex items-center justify-between gap-4 whitespace-nowrap rounded-lg border border-black px-4 py-2 w-full">
                        <div className='font-[500]'>Deposit</div>
                        <div className='font-[600] text-[17px] text-ellipsis overflow-hidden'>$129.00</div>
                     </div>

                     <div className="flex items-center justify-between gap-4 whitespace-nowrap rounded-lg border border-black px-4 py-2 w-full">
                        <div className='font-[500]'>Service Fee</div>
                        <div className='font-[600] text-[17px] text-ellipsis overflow-hidden'>$2.05</div>
                     </div>

                     <div className="flex items-center justify-between gap-4 whitespace-nowrap rounded-lg border border-black px-4 py-2 w-full">
                        <div className='font-[500]'>Withdraw</div>
                        <div className='font-[600] text-[17px] text-ellipsis overflow-hidden'>$131.05</div>
                     </div>

                     <div className="flex items-center justify-between gap-4 whitespace-nowrap rounded-lg border border-black px-4 py-2 w-full">
                        <div className='font-[500]'>Payment Method</div>
                        <div className='font-[600] text-[17px] text-ellipsis overflow-hidden'>{props.paymentMethod}</div>
                     </div>

                     <div className="flex items-center justify-between gap-4 whitespace-nowrap rounded-lg border border-black px-4 py-2 w-full">
                        <div className='font-[500]'>From</div>
                        <div className='font-[600] text-[17px] text-ellipsis overflow-hidden'>payment@decentralservices.tech</div>
                     </div>

                     <div className="flex items-center justify-between gap-4 whitespace-nowrap rounded-lg border border-black px-4 py-2 w-full">
                        <div className='font-[500]'>To</div>
                        <div className='font-[600] text-[17px] text-ellipsis overflow-hidden'>customer@cashapp.com</div>
                     </div>

                     
                  </div>

                  <div className="flex items-center justify-center gap-3 mt-10">
                    <button className='rounded-xl bg-main-color text-white px-6 py-2.5 shadow-md'>Go Console</button>
                    <button className='rounded-xl bg-white border border-black text-black px-6 py-[9px] shadow-md'>Buy Again</button>
                  </div>

                 </div>
     </div>
    </>
  )
}

export default WithdrawalFundsTrans