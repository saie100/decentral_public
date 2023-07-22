import React, {useState, Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'

const RequestPopup = (props) => {

        function closeModal() {
            props.setrequestModal(false);
        }

  return (
    <>
    <Transition appear show={props.requestModal} as={Fragment}>
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
                  <button onClick={closeModal}><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 9C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7V9ZM0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM19 7L1 7V9L19 9V7Z" fill="black"/></svg></button>
                  <div className='text-[16px] sm7:text-[19px] text-not-black font-bold'>Request</div>
                  <button onClick={closeModal}><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.433246 0.433238C1.01091 -0.144413 1.94761 -0.144413 2.52527 0.433238L6.5 4.4079L10.4747 0.433238C11.0524 -0.144413 11.9891 -0.144413 12.5668 0.433238C13.1444 1.01089 13.1444 1.94758 12.5668 2.52523L8.59202 6.50011L12.5668 10.4748C13.1444 11.0524 13.1444 11.9891 12.5668 12.5668C11.9891 13.1444 11.0524 13.1444 10.4747 12.5668L6.5 8.5921L2.52527 12.5668C1.94761 13.1444 1.01091 13.1444 0.433246 12.5668C-0.144415 11.9891 -0.144415 11.0524 0.433246 10.4748L4.40798 6.50011L0.433246 2.52544C-0.144415 1.94779 -0.144415 1.0111 0.433246 0.433449V0.433238Z" fill="#FF3A3A"/></svg></button>
                  </div>
                 </div>
               

              <div>
        
           <div className="flex items-center justify-between gap-3 flex-wrap rounded-lg bg-transparent-main-color text-[#11047A] px-3 min-h-[60px] py-2">
              <div>To</div>
              <div className="flex items-center gap-1.5">
                <img src="/images/profile.png" className='w-[35px]' alt="profile" />
              <div className='text-[17px] font-[600]'>Sheira Azzahra Putri</div>
              </div>
           </div>

           <div className="flex items-center justify-between gap-3 flex-wrap rounded-lg bg-transparent-main-color text-[#11047A] px-3 min-h-[60px] py-2 mt-5">
              <div>Amount</div>
              <div className='text-[17px] font-[600]'>$129.74 USD</div>
           </div>
          

           <button className='flex w-fit mx-auto  px-7 sm:px-10 mt-10 py-3 sm:py-4 rounded-xl bg-main-color text-white'>Request</button>

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

export default RequestPopup