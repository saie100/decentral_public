import React, {Fragment} from 'react'
import { Dialog, Transition,RadioGroup } from '@headlessui/react'

const ConnectWallet = (props) => {
  return (
    <>
     <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-[999999]' onClose={props.closeModal}>
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
                <Dialog.Panel className='relative bg-white w-full max-w-[1000px] transform overflow-hidden rounded-2xl bg-sooth p-5 text-left align-middle shadow-xl transition-all'>
                 
                 <div>
                  <div className='flex items-center justify-between mb-3'>
                  <div className='text-[19px] text-not-black font-bold '>Select Wallet</div>
                  <button onClick={props.closeModal} className="sm:absolute sm:top-7 sm:right-7"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.433246 0.433238C1.01091 -0.144413 1.94761 -0.144413 2.52527 0.433238L6.5 4.4079L10.4747 0.433238C11.0524 -0.144413 11.9891 -0.144413 12.5668 0.433238C13.1444 1.01089 13.1444 1.94758 12.5668 2.52523L8.59202 6.50011L12.5668 10.4748C13.1444 11.0524 13.1444 11.9891 12.5668 12.5668C11.9891 13.1444 11.0524 13.1444 10.4747 12.5668L6.5 8.5921L2.52527 12.5668C1.94761 13.1444 1.01091 13.1444 0.433246 12.5668C-0.144415 11.9891 -0.144415 11.0524 0.433246 10.4748L4.40798 6.50011L0.433246 2.52544C-0.144415 1.94779 -0.144415 1.0111 0.433246 0.433449V0.433238Z" fill="#FF3A3A"/></svg></button>
                  </div>
                 </div>

                
                 <div className={`w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 mb-5`}>
                     <div className='cursor-pointer text-center h-[250px] px-4 border border-[#EEEEEE] bg-white rounded-lg flex items-center justify-center flex-col gap-3'>
                        <img src="/images/metamask.png" className='w-[90px]' alt="Metamask" />
                        <div className='mt-3'>
                            <div className='font-bold text-[21px]'>MetaMask</div>
                            <div className='mt-2 text-[#000000] text-opacity-50 text-[15px]'>Connect to your MetaMask Wallet</div>
                        </div>
                     </div>

                     <div className='cursor-pointer text-center h-[250px] px-4 border border-[#EEEEEE] bg-white rounded-lg flex items-center justify-center flex-col gap-3'>
                        <img src="/images/walletConnect.png" className='w-[80px]' alt="Wallet Connect" />
                        <div className='mt-3'>
                            <div className='font-bold text-[21px]'>Wallet Connect</div>
                            <div className='mt-2 text-[#000000] text-opacity-50 text-[15px]'>Scan with WalletConnect to connect</div>
                        </div>
                     </div>

                     <div className='cursor-pointer text-center h-[250px] px-4 border border-[#EEEEEE] bg-white rounded-lg flex items-center justify-center flex-col gap-3'>
                        <img src="/images/coinbaseWallet.svg" className='w-[80px]' alt="bank" />
                        <div className='mt-3'>
                            <div className='font-bold text-[21px]'>Coinbase Wallet</div>
                            <div className='mt-2 text-[#000000] text-opacity-50 text-[15px]'>Scan with Coinbase wallet to connect</div>
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

export default ConnectWallet