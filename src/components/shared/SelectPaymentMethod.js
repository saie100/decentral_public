import React, {Fragment} from 'react'
import { Dialog, Transition,RadioGroup } from '@headlessui/react'

const SelectPaymentMethod = () => {

const [isOpen2, setIsOpen2] = React.useState(false);


  function closeModal() {
    setIsOpen2(false);
  }

  return (
    <>
    {/* Select Payment Method */}

    <Transition appear show={isOpen2} as={Fragment}>
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
                <Dialog.Panel className='relative bg-white w-full max-w-[900px] transform overflow-hidden rounded-2xl bg-sooth p-5 text-left align-middle shadow-xl transition-all'>
                 
                 <div>
                  <div className='flex items-center justify-between mb-3'>
                  <div onClick={()=> {setpaymentMethod("none")}} className={`text-[19px] text-not-black font-bold flex items-center gap-2 flex-row-reverse ${paymentMethod === "bank" ? "cursor-pointer" : ""}`}>{paymentMethod === "none" ? "Select Payment Method" : "Select Bank"} {paymentMethod === "bank" ? <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 9C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7V9ZM0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM19 7L1 7V9L19 9V7Z" fill="black"/></svg> : ""}</div>
                  <button onClick={closeModal} className="sm:absolute sm:top-7 sm:right-7"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.433246 0.433238C1.01091 -0.144413 1.94761 -0.144413 2.52527 0.433238L6.5 4.4079L10.4747 0.433238C11.0524 -0.144413 11.9891 -0.144413 12.5668 0.433238C13.1444 1.01089 13.1444 1.94758 12.5668 2.52523L8.59202 6.50011L12.5668 10.4748C13.1444 11.0524 13.1444 11.9891 12.5668 12.5668C11.9891 13.1444 11.0524 13.1444 10.4747 12.5668L6.5 8.5921L2.52527 12.5668C1.94761 13.1444 1.01091 13.1444 0.433246 12.5668C-0.144415 11.9891 -0.144415 11.0524 0.433246 10.4748L4.40798 6.50011L0.433246 2.52544C-0.144415 1.94779 -0.144415 1.0111 0.433246 0.433449V0.433238Z" fill="#FF3A3A"/></svg></button>
                  </div>
                 </div>

                
                 <div className={`w-full grid-cols-1 md:grid-cols-2 gap-5 mt-5 mb-5 ${paymentMethod === "none" ? "grid" : "hidden"}`}>
                     <div onClick={()=> {setpaymentMethod("bank")}} className='cursor-pointer text-center h-[250px] px-4 border border-[#EEEEEE] bg-white rounded-lg flex items-center justify-center flex-col gap-3'>
                        <img src="/images/bank.png" className='w-[80px]' alt="bank" />
                        <div className='mt-3'>
                            <div className='font-bold text-[21px]'>Bank Transfer</div>
                            <div className='mt-1 text-[#000000] text-opacity-50 text-[15px]'>Service fee : 5%*</div>
                        </div>
                     </div>

                     <div className='cursor-pointer text-center h-[250px] px-4 border border-[#EEEEEE] bg-white rounded-lg flex items-center justify-center flex-col gap-3'>
                        <img src="/images/debit-card.png" className='w-[80px]' alt="bank" />
                        <div className='mt-3'>
                            <div className='font-bold text-[21px]'>Credit/Debit Card</div>
                            <div className='mt-1 text-[#000000] text-opacity-50 text-[15px]'>Service fee : 10%</div>
                        </div>
                     </div>
                 </div>




                 <div className={`w-full mt-5 mb-5 ${paymentMethod === "bank" ? "block" : "hidden"}`}>
                 <RadioGroup value={plan} onChange={setPlan} className="flex flex-col gap-4">
      <RadioGroup.Option value="bank of america">
        {({ checked }) => (
          <div className={`relative cursor-pointer w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white border-2 ${checked ? "border-main-color" : "border-[#F5F5F7]"}`}>
            <div>
              <div className='hidden sm:block text-[17px] font-bold mb-6 sm2:mb-1 text-[#11047A]'>PKNF**********81569</div>
              <div className='sm2:hidden text-[17px] font-bold mb-6 sm2:mb-1 text-[#11047A]'>*****81569</div>
              <div className="flex items-center gap-6 sm2:gap-[60px]">
                <div className="text-[#11047A] text-opacity-70 text-[15px]">Azhar Dwi</div>
                <div className="text-[#11047A] text-opacity-70 text-[15px]">BANK OF AMERICA</div>
              </div>
            </div>
         <button className='absolute top-3 right-3 sm2:relative sm2:top-auto sm2:right-auto px-5 py-2 sm4:py-2.5 rounded-xl text-[14px] sm2:text-[15px] bg-transparent-main-color text-main-color'>Default</button>
          </div>
        )}
      </RadioGroup.Option>


      <RadioGroup.Option value="times bank">
        {({ checked }) => (
          <div className={`relative cursor-pointer w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white border-2 ${checked ? "border-main-color" : "border-[#F5F5F7]"}`}>
            <div>
              <div className='hidden sm:block text-[17px] font-bold mb-6 sm2:mb-1 text-[#11047A]'>PKNF**********81569</div>
              <div className='sm2:hidden text-[17px] font-bold mb-6 sm2:mb-1 text-[#11047A]'>*****81569</div>
              <div className="flex items-center gap-6 sm2:gap-[60px]">
                <div className="text-[#11047A] text-opacity-70 text-[15px]">JHON DOE</div>
                <div className="text-[#11047A] text-opacity-70 text-[15px]">TIMES BANK</div>
              </div>
            </div>
          </div>
        )}
      </RadioGroup.Option>
     
    </RadioGroup>

    <button onClick={closeModal} className="block  mt-10 mx-auto px-10 py-3 w-fit  bg-main-color text-white rounded-lg">Confirm</button>

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

export default SelectPaymentMethod