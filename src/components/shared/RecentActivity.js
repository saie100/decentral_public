import {useState} from 'react';
import TransactionPopup from './TransactionPopup';

const RecentActivity = () => {

    let data = [
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },


        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "processing"
        },



        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "order cancelled"
        },




        {
            type: "sell",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },




        {
            type: "sell",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },



        {
            type: "sell",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },




        {
            type: "sell",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },



        {
            type: "sell",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },



        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },

        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },

        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },

        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },


        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },



        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },




        {
            type: "sell",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },




        {
            type: "sell",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },



        {
            type: "sell",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },




        {
            type: "sell",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },



        {
            type: "sell",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },



        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },

        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },

        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },

        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },
        {
            type: "buy",
            title: "Sell MATIC/BIDR",
            date: "08-27 21:06",
            topValue: "Rp 106,750",
            bottomValue: "5 Matic",
            transactionType: "successfull"
        },

    ];

    const [overflow, setoverflow] = useState('overflow-y-hidden');
    const [activityData, setactivityData] = useState(true);
    const [transactionModal, settransactionModal] = useState(false);
    const [transactionType, settransactionType] = useState("successfull");

  return (
    <>
       <div className="sidebar-scroll h-full relative bg-white pt-[20px] lg2:pt-[36px] overflow-y-auto lg2:max-h-screen">
        <div className='h-[calc(100%-100px)] flex flex-col'>

           <div className="px-5 lg4:px-4">
           <button className="custom-shadow bg-white w-full p-3 rounded-3xl">
           <div className="w-full flex items-center gap-2 bg-white border border-[#F5F5F7] focus-within:border-main-color focus-within:bg-transparent-main-color rounded-xl px-3"><input type="text" placeholder='Search History' className='w-full bg-transparent py-3 text-[#11047A] text-[15px] border-none outline-none' /><svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="#11047A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.5 16.5L15 15" stroke="#11047A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
           </button>
           </div>


             <div className='mt-10 flex-1'>

                <div className="px-5 lg2:px-4 flex items-center justify-between border-b pb-3 border-[#F9F9F9]">
                    <div className='text-[17px] text-[#11047A] font-bold'>Recent Activity</div>
                    <button><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2175 11.3629C14.1286 11.3629 12.4342 13.072 12.4342 15.1815C12.4342 17.2898 14.1286 19 16.2175 19C18.3064 19 19.9997 17.2898 19.9997 15.1815C19.9997 13.072 18.3064 11.3629 16.2175 11.3629Z" fill="#0085FF"/><path opacity="0.4" d="M8.08337 13.6605H1.50788C0.67567 13.6605 0.00012207 14.3424 0.00012207 15.1812C0.00012207 16.0201 0.67567 16.703 1.50788 16.703H8.08337C8.91447 16.703 9.59002 16.0201 9.59002 15.1812C9.59002 14.3424 8.91447 13.6605 8.08337 13.6605Z" fill="#0085FF"/><path d="M3.78329 7.6371C5.87216 7.6371 7.56658 5.928 7.56658 3.81967C7.56658 1.71022 5.87216 0 3.78329 0C1.69443 0 0 1.71022 0 3.81967C0 5.928 1.69443 7.6371 3.78329 7.6371Z" fill="#0085FF"/><path opacity="0.4" d="M20 3.81927C20 2.98043 19.3244 2.29858 18.4933 2.29858H11.9179C11.0856 2.29858 10.4101 2.98043 10.4101 3.81927C10.4101 4.65812 11.0856 5.33997 11.9179 5.33997H18.4933C19.3244 5.33997 20 4.65812 20 3.81927Z" fill="#0085FF"/></svg></button>
                </div>


                <div className={`relative flex flex-col divide-y divide-[#F9F9F9] h-full ${overflow} ${activityData === false ? "items-center justify-center" : ""} ${overflow === "overflow-y-hidden" ? "max-h-[82vh]" : ""} `}>
                    {
                        activityData === false
                        ?
                        <div className='w-full flex items-center justify-center text-[#11047A]'>No Recent Activity Found!</div>
                        :
                        
                            data.map((ele, index)=>{
                                return(
                                    <div
                                    onClick={()=> {
                                     settransactionType(ele.transactionType);
                                     settransactionModal(true);
                                    }}
                                    key={index}
                                    className='cursor-pointer flex items-center justify-between py-4 px-5 lg2:px-4'>
                              <div className="flex items-center gap-3">
                                {
                                    ele.type === "buy"
                                    ?
                                    <div className="w-[50px] h-[50px] rounded-full bg-main-color flex items-center justify-center"><svg width="17" height="19" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.72571 1.25L7.72571 16.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M1.70131 7.2998L7.72531 1.2498L13.7503 7.2998" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                                    :
                                    <div className="w-[50px] h-[50px] rounded-full bg-[#FF5C00] flex items-center justify-center"><svg width="17" height="19" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.27429 15.75V0.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.2987 9.7002L7.27469 15.7502L1.24969 9.7002" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                                }
                                <div>
                                    <div className='text-[#11047A] text-[15px] font-bold'>{ele.title}</div>
                                    <div className='text-sm text-not-black font-light mt-[3px]'>{ele.date}</div>
                                </div>
                              </div>
    
                              <div className='text-right'>
                                    <div className='text-[#11047A] text-[15px] font-bold'>{ele.topValue}</div>
                                    <div className='text-sm text-not-black font-light mt-[3px]'>{ele.bottomValue}</div>
                              </div>
                        </div>
                                )
                            })
                        
                    }

             <button onClick={()=> {setoverflow('overflow-y-auto')}} className={`gradientWhiteBG min-h-[120px] pb-2 sticky bottom-0 left-0 w-full items-end justify-center text-main-color ${activityData === true ? "" : "hidden"} ${overflow === "overflow-y-hidden" ? "flex" : "hidden"}`}>See All</button>
                    

                </div>

             </div>







        
        </div>
       </div>

      <TransactionPopup transactionModal={transactionModal} settransactionModal={settransactionModal} transactionType={transactionType}/>

    </>
  )
}

export default RecentActivity