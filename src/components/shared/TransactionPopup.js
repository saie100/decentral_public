import React, {Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'

const TransactionPopup = (props) => {

    function closeModal() {
        props.settransactionModal(false);
      }

  return (
    <>
     <Transition appear show={props.transactionModal} as={Fragment}>
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
                 
                 <div>
                  <div className='flex items-center justify-between mb-3'>
                  <div className='text-[19px] text-not-black font-bold '>Transaction</div>
                  <button onClick={closeModal} className="sm:absolute sm:top-7 sm:right-7"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.433246 0.433238C1.01091 -0.144413 1.94761 -0.144413 2.52527 0.433238L6.5 4.4079L10.4747 0.433238C11.0524 -0.144413 11.9891 -0.144413 12.5668 0.433238C13.1444 1.01089 13.1444 1.94758 12.5668 2.52523L8.59202 6.50011L12.5668 10.4748C13.1444 11.0524 13.1444 11.9891 12.5668 12.5668C11.9891 13.1444 11.0524 13.1444 10.4747 12.5668L6.5 8.5921L2.52527 12.5668C1.94761 13.1444 1.01091 13.1444 0.433246 12.5668C-0.144415 11.9891 -0.144415 11.0524 0.433246 10.4748L4.40798 6.50011L0.433246 2.52544C-0.144415 1.94779 -0.144415 1.0111 0.433246 0.433449V0.433238Z" fill="#FF3A3A"/></svg></button>
                  </div>
                 </div>

                
                 <div className="w-full mt-5 mb-5">
                  {
                    props.transactionType === "successfull"
                    ?
                    <svg className='mx-auto' width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" fill="#0085FF"/><path d="M14 30.0577L21.7949 42L46 19" stroke="white" stroke-width="5"/></svg>
                    :
                    props.transactionType === "processing"
                    ?
                    <svg className='mx-auto' width="50" height="50" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.5 0C14 0 0.5 13.5 0.5 30C0.5 46.5 14 60 30.5 60C47 60 60.5 46.5 60.5 30C60.5 13.5 47 0 30.5 0ZM30.5 7.5C42.95 7.5 53 17.55 53 30C53 42.45 42.95 52.5 30.5 52.5C18.05 52.5 8 42.45 8 30C8 17.55 18.05 7.5 30.5 7.5ZM26.75 15V31.65L27.95 32.625L31.7 36.375L34.25 39.225L39.65 33.825L36.8 31.275L34.25 28.725V15.15H26.75V15Z" fill="#99ABBB"/></svg>
                    :
                    props.transactionType === "order cancelled"
                    ?
                    <svg className='mx-auto' width="50" height="50" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4342 18L18.6138 15.8204C19.7036 14.7306 21.8893 14.7306 22.9791 15.8204L30.6138 23.4551L38.2485 15.8204C39.3383 14.7306 41.5179 14.7306 42.6077 15.8204L44.7872 18C45.877 19.0898 45.877 21.2755 44.7872 22.3653L37.1587 30L44.7934 37.6347C45.8832 38.7245 45.8832 40.9041 44.7934 41.9939L42.6138 44.1796C41.524 45.2694 39.3444 45.2694 38.2546 44.1796L30.6138 36.5449L22.9791 44.1796C21.8893 45.2694 19.7097 45.2694 18.6138 44.1796L16.4342 42C15.3444 40.9102 15.3444 38.7306 16.4342 37.6408L24.0689 30L16.4342 22.3653C15.3383 21.2755 15.3383 19.0898 16.4342 18ZM0.61377 30C0.61377 46.5673 14.0464 60 30.6138 60C47.1811 60 60.6138 46.5673 60.6138 30C60.6138 13.4327 47.1811 0 30.6138 0C14.0464 0 0.61377 13.4327 0.61377 30Z" fill="#FF5C00"/></svg>
                    :
                    null
                  }

                  <div className='text-center font-[600] text-[20px] mt-4'>
                  {
                    props.transactionType === "successfull"
                    ?
                    "Successfully Withdrew $131.05!"
                    :
                    props.transactionType === "processing"
                    ?
                    "Processing $131.05 Withdraw"
                    :
                    props.transactionType === "order cancelled"
                    ?
                    "Order Cancelled"
                    :
                    null
                  }
                  </div>

                  <div className="flex items-center justify-center flex-col gap-3 mt-7">
                     <div className="flex items-center justify-between gap-4 whitespace-nowrap rounded-lg border border-black px-4 py-2 w-full">
                        <div className='font-[500]'>TxID</div>
                        <div className='font-[600] text-[17px] text-ellipsis overflow-hidden'>Tx000000001</div>
                     </div>

                     <div className="flex items-center justify-between gap-4 whitespace-nowrap rounded-lg border border-black px-4 py-2 w-full">
                        <div className='font-[500]'>To Receive</div>
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
                        <div className='font-[600] text-[17px] text-ellipsis overflow-hidden'>Cash App</div>
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

                 </div>



              </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default TransactionPopup