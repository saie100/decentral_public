import React from 'react'

const PortfolioUser = () => {

  let tokens = [
    {
      name: "Bitcoin",
      sName: "btc",
      amount: "0.32",
      value: "$3,352",
      change: "2%",
      bar: "60%"
    },

    {
      name: "Bitcoin Cash",
      sName: "bch",
      amount: "0.32",
      value: "$3,352",
      change: "2%",
      bar: "80%"
    },

    {
      name: "Bitcoin",
      sName: "btc",
      amount: "0.32",
      value: "$3,352",
      change: "2%",
      bar: "40%"
    },

    {
      name: "Bitcoin Cash",
      sName: "bch",
      amount: "0.32",
      value: "$3,352",
      change: "2%",
      bar: "80%"
    },

    {
      name: "Bitcoin",
      sName: "btc",
      amount: "0.32",
      value: "$3,352",
      change: "2%",
      bar: "40%"
    },


    {
      name: "Bitcoin Cash",
      sName: "bch",
      amount: "0.32",
      value: "$3,352",
      change: "2%",
      bar: "80%"
    },

    {
      name: "Bitcoin",
      sName: "btc",
      amount: "0.32",
      value: "$3,352",
      change: "2%",
      bar: "40%"
    },

    {
      name: "Bitcoin Cash",
      sName: "bch",
      amount: "0.32",
      value: "$3,352",
      change: "2%",
      bar: "80%"
    },

    {
      name: "Bitcoin",
      sName: "btc",
      amount: "0.32",
      value: "$3,352",
      change: "2%",
      bar: "40%"
    },
  ]

  const [show, setshow] = React.useState('Tokens');
  const [data, setdata] = React.useState(false);

  return (
    <>
    <div className='my-7'>
    <div className='flex items-center justify-between mb-5'>
                <div className='text-[19px] text-not-black font-bold '>Portfolio</div>
                <div className="flex items-center w-fit h-fit bg-white rounded-xl overflow-hidden">
                   <button onClick={()=> {setshow("Tokens")}} className={`${show === "Tokens" ? "w-[100px] py-2.5 rounded-xl text-[15px] bg-main-color text-white" : "w-[100px] py-2.5 rounded-xl text-[15px] bg-white text-not-black"}`}>Tokens</button>
                   <button onClick={()=> {setshow("NFT")}} className={`${show === "NFT" ? "w-[80px] py-2.5 rounded-xl text-[15px] bg-main-color text-white" : "w-[80px] py-2.5 rounded-xl text-[15px] bg-white text-not-black"}`}>NFT</button>
                </div>
              </div>
        <div className="bg-white rounded-xl p-5 relative">

         

          
          {
            data === false
            ?
            <div className='flex items-center justify-center flex-col text-center w-full h-[300px]'>
                <img src="/images/emptyState.svg" alt="empty-state" />
                  <div className="font-bold text-[#11047A] text-[19px]">Oops, Your Portfolio is Empty!</div>
            </div>
            :
            <div>

         <div className="w-full relative">
               <div className="flex items-center justify-between gap-5">
                 <div className="w-[400px] flex items-center flex-row-reverse gap-2 bg-transparent-main-color rounded-xl px-3"><input type="text" placeholder='Search portfolio assets...' className='w-full bg-transparent h-[50px] text-[#5F6374] text-[15px] border-none outline-none' /><svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.3514 2.30396C4.57687 2.30396 2.32767 4.55315 2.32767 7.32768C2.32767 10.1022 4.57687 12.3514 7.3514 12.3514C10.1259 12.3514 12.3751 10.1022 12.3751 7.32768C12.3751 4.55315 10.1259 2.30396 7.3514 2.30396Z" fill="#0085FF"/><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M11.2418 11.2181C11.4053 11.0546 11.6704 11.0546 11.8339 11.2181L12.9503 12.3345C13.1137 12.498 13.1137 12.763 12.9503 12.9265C12.7868 13.09 12.5217 13.09 12.3582 12.9265L11.2418 11.8101C11.0783 11.6466 11.0783 11.3816 11.2418 11.2181Z" fill="#0085FF"/></svg></div>
                 <button className='px-4 h-[50px] rounded-xl bg-transparent-main-color'><svg width="20" height="8" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="#0085FF"/></svg></button>
               </div>

          </div>

            {
            show === "Tokens"
            ?
            <div className="sidebar-scroll overflow-auto mt-5 max-h-[400px]">
            <div className="grid grid-cols-[250px,200px,200px,200px,150px] xlCustom:grid-cols-[1.5fr,1fr,1fr,1fr,150px] mb-2">
              <div className='text-[#A3AED0] text-[15px] py-1.5 border-b'>Assets</div>
              <div className='text-[#A3AED0] text-[15px] py-1.5 border-b'>Amount</div>
              <div className='text-[#A3AED0] text-[15px] py-1.5 border-b'>Value in USD</div>
              <div className='text-[#A3AED0] text-[15px] py-1.5 border-b'>Change %</div>
              <div className='text-[#A3AED0] text-[15px] py-1.5 border-b'>Allocations</div>
            </div>

            {
              tokens.map((ele)=>{
                return(
                  <div className="py-2.5 grid grid-cols-[250px,200px,200px,200px,150px] xlCustom:grid-cols-[1.5fr,1fr,1fr,1fr,150px]">
              <div className='flex items-center gap-2.5'>
                <img src={`/images/${ele.sName}.svg`} className='w-[40px]' alt="icon" />
                <div>
                  <div className='text-not-black text-[15px] font-bold'>{ele.name}</div>
                  <div className='text-sm text-not-black text-opacity-50 uppercase font-light mt-[1px]'>{ele.sName}</div>
                </div>
              </div>

              <div className='font-bold flex items-center text-not-black text-[15px]'>{ele.amount}</div>
              <div className='font-bold flex items-center text-not-black text-[15px]'>{ele.value}</div>
            <div className='font-bold flex items-center text-[15px]'><div className='w-fit h-fit rounded-full px-3 py-1 bg-[#00FF85] bg-opacity-[0.1] text-[#00FF85]'>{ele.change}</div></div>
            <div className='font-bold flex items-center text-not-black text-[15px]'><div className="w-full bg-transparent-main-color h-[10px] rounded-full overflow-hidden"><div className={`bg-main-color rounded-full h-full w-[68%]`}></div></div></div>
            </div>
                )
              })
            }

            
            </div>

            :

            <div className="sidebar-scroll overflow-auto mt-5 max-h-[500px] pr-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl2:grid-cols-3 xl3:grid-cols-4 gap-5">
                  <div className='rounded-2xl bg-transparent-main-color'>
                    <div className='relative w-full h-[200px]'>
                    <img src="/images/nft.svg" className='w-full h-[200px] object-cover object-center rounded-2xl' alt="nft" />
                    <img src="/images/rounded-eth.svg" className='absolute -bottom-[27px] right-5 w-[50px]' alt="crypto icon" />
                    </div>
                    <div className="w-full flex items-center justify-between px-5 py-5">
                           <div>
                             <div className='text-main-color mb-1'>.crypto</div>
                             <div className='text-not-black text-xl font-bold'>freetesla.crypto</div>
                           </div>
                           <button><svg width="21" height="11" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.22223 0.333496C1.36667 0.333496 0.666672 1.0335 0.666672 1.88905C0.666672 2.74461 1.36667 3.44461 2.22223 3.44461C3.07778 3.44461 3.77778 2.74461 3.77778 1.88905C3.77778 1.0335 3.07778 0.333496 2.22223 0.333496ZM11.5556 0.333496C10.7 0.333496 10 1.0335 10 1.88905C10 2.74461 10.7 3.44461 11.5556 3.44461C12.4111 3.44461 13.1111 2.74461 13.1111 1.88905C13.1111 1.0335 12.4111 0.333496 11.5556 0.333496ZM6.88889 0.333496C6.03334 0.333496 5.33334 1.0335 5.33334 1.88905C5.33334 2.74461 6.03334 3.44461 6.88889 3.44461C7.74445 3.44461 8.44445 2.74461 8.44445 1.88905C8.44445 1.0335 7.74445 0.333496 6.88889 0.333496Z" fill="#0085FF"/></svg></button>
                    </div>
                  </div>

                  <div className='rounded-2xl bg-transparent-main-color'>
                    <div className='relative w-full h-[200px]'>
                    <img src="/images/nft.svg" className='w-full h-[200px] object-cover object-center rounded-2xl' alt="nft" />
                    <img src="/images/rounded-eth.svg" className='absolute -bottom-[27px] right-5 w-[50px]' alt="crypto icon" />
                    </div>
                    <div className="w-full flex items-center justify-between px-5 py-5">
                           <div>
                             <div className='text-main-color mb-1'>.crypto</div>
                             <div className='text-not-black text-xl font-bold'>freetesla.crypto</div>
                           </div>
                           <button><svg width="21" height="11" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.22223 0.333496C1.36667 0.333496 0.666672 1.0335 0.666672 1.88905C0.666672 2.74461 1.36667 3.44461 2.22223 3.44461C3.07778 3.44461 3.77778 2.74461 3.77778 1.88905C3.77778 1.0335 3.07778 0.333496 2.22223 0.333496ZM11.5556 0.333496C10.7 0.333496 10 1.0335 10 1.88905C10 2.74461 10.7 3.44461 11.5556 3.44461C12.4111 3.44461 13.1111 2.74461 13.1111 1.88905C13.1111 1.0335 12.4111 0.333496 11.5556 0.333496ZM6.88889 0.333496C6.03334 0.333496 5.33334 1.0335 5.33334 1.88905C5.33334 2.74461 6.03334 3.44461 6.88889 3.44461C7.74445 3.44461 8.44445 2.74461 8.44445 1.88905C8.44445 1.0335 7.74445 0.333496 6.88889 0.333496Z" fill="#0085FF"/></svg></button>
                    </div>
                  </div>


                  <div className='rounded-2xl bg-transparent-main-color'>
                    <div className='relative w-full h-[200px]'>
                    <img src="/images/nft.svg" className='w-full h-[200px] object-cover object-center rounded-2xl' alt="nft" />
                    <img src="/images/rounded-eth.svg" className='absolute -bottom-[27px] right-5 w-[50px]' alt="crypto icon" />
                    </div>
                    <div className="w-full flex items-center justify-between px-5 py-5">
                           <div>
                             <div className='text-main-color mb-1'>.crypto</div>
                             <div className='text-not-black text-xl font-bold'>freetesla.crypto</div>
                           </div>
                           <button><svg width="21" height="11" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.22223 0.333496C1.36667 0.333496 0.666672 1.0335 0.666672 1.88905C0.666672 2.74461 1.36667 3.44461 2.22223 3.44461C3.07778 3.44461 3.77778 2.74461 3.77778 1.88905C3.77778 1.0335 3.07778 0.333496 2.22223 0.333496ZM11.5556 0.333496C10.7 0.333496 10 1.0335 10 1.88905C10 2.74461 10.7 3.44461 11.5556 3.44461C12.4111 3.44461 13.1111 2.74461 13.1111 1.88905C13.1111 1.0335 12.4111 0.333496 11.5556 0.333496ZM6.88889 0.333496C6.03334 0.333496 5.33334 1.0335 5.33334 1.88905C5.33334 2.74461 6.03334 3.44461 6.88889 3.44461C7.74445 3.44461 8.44445 2.74461 8.44445 1.88905C8.44445 1.0335 7.74445 0.333496 6.88889 0.333496Z" fill="#0085FF"/></svg></button>
                    </div>
                  </div>


                  <div className='rounded-2xl bg-transparent-main-color'>
                    <div className='relative w-full h-[200px]'>
                    <img src="/images/nft.svg" className='w-full h-[200px] object-cover object-center rounded-2xl' alt="nft" />
                    <img src="/images/rounded-eth.svg" className='absolute -bottom-[27px] right-5 w-[50px]' alt="crypto icon" />
                    </div>
                    <div className="w-full flex items-center justify-between px-5 py-5">
                           <div>
                             <div className='text-main-color mb-1'>.crypto</div>
                             <div className='text-not-black text-xl font-bold'>freetesla.crypto</div>
                           </div>
                           <button><svg width="21" height="11" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.22223 0.333496C1.36667 0.333496 0.666672 1.0335 0.666672 1.88905C0.666672 2.74461 1.36667 3.44461 2.22223 3.44461C3.07778 3.44461 3.77778 2.74461 3.77778 1.88905C3.77778 1.0335 3.07778 0.333496 2.22223 0.333496ZM11.5556 0.333496C10.7 0.333496 10 1.0335 10 1.88905C10 2.74461 10.7 3.44461 11.5556 3.44461C12.4111 3.44461 13.1111 2.74461 13.1111 1.88905C13.1111 1.0335 12.4111 0.333496 11.5556 0.333496ZM6.88889 0.333496C6.03334 0.333496 5.33334 1.0335 5.33334 1.88905C5.33334 2.74461 6.03334 3.44461 6.88889 3.44461C7.74445 3.44461 8.44445 2.74461 8.44445 1.88905C8.44445 1.0335 7.74445 0.333496 6.88889 0.333496Z" fill="#0085FF"/></svg></button>
                    </div>
                  </div>



                  <div className='rounded-2xl bg-transparent-main-color'>
                    <div className='relative w-full h-[200px]'>
                    <img src="/images/nft.svg" className='w-full h-[200px] object-cover object-center rounded-2xl' alt="nft" />
                    <img src="/images/rounded-eth.svg" className='absolute -bottom-[27px] right-5 w-[50px]' alt="crypto icon" />
                    </div>
                    <div className="w-full flex items-center justify-between px-5 py-5">
                           <div>
                             <div className='text-main-color mb-1'>.crypto</div>
                             <div className='text-not-black text-xl font-bold'>freetesla.crypto</div>
                           </div>
                           <button><svg width="21" height="11" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.22223 0.333496C1.36667 0.333496 0.666672 1.0335 0.666672 1.88905C0.666672 2.74461 1.36667 3.44461 2.22223 3.44461C3.07778 3.44461 3.77778 2.74461 3.77778 1.88905C3.77778 1.0335 3.07778 0.333496 2.22223 0.333496ZM11.5556 0.333496C10.7 0.333496 10 1.0335 10 1.88905C10 2.74461 10.7 3.44461 11.5556 3.44461C12.4111 3.44461 13.1111 2.74461 13.1111 1.88905C13.1111 1.0335 12.4111 0.333496 11.5556 0.333496ZM6.88889 0.333496C6.03334 0.333496 5.33334 1.0335 5.33334 1.88905C5.33334 2.74461 6.03334 3.44461 6.88889 3.44461C7.74445 3.44461 8.44445 2.74461 8.44445 1.88905C8.44445 1.0335 7.74445 0.333496 6.88889 0.333496Z" fill="#0085FF"/></svg></button>
                    </div>
                  </div>



                  <div className='rounded-2xl bg-transparent-main-color'>
                    <div className='relative w-full h-[200px]'>
                    <img src="/images/nft.svg" className='w-full h-[200px] object-cover object-center rounded-2xl' alt="nft" />
                    <img src="/images/rounded-eth.svg" className='absolute -bottom-[27px] right-5 w-[50px]' alt="crypto icon" />
                    </div>
                    <div className="w-full flex items-center justify-between px-5 py-5">
                           <div>
                             <div className='text-main-color mb-1'>.crypto</div>
                             <div className='text-not-black text-xl font-bold'>freetesla.crypto</div>
                           </div>
                           <button><svg width="21" height="11" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.22223 0.333496C1.36667 0.333496 0.666672 1.0335 0.666672 1.88905C0.666672 2.74461 1.36667 3.44461 2.22223 3.44461C3.07778 3.44461 3.77778 2.74461 3.77778 1.88905C3.77778 1.0335 3.07778 0.333496 2.22223 0.333496ZM11.5556 0.333496C10.7 0.333496 10 1.0335 10 1.88905C10 2.74461 10.7 3.44461 11.5556 3.44461C12.4111 3.44461 13.1111 2.74461 13.1111 1.88905C13.1111 1.0335 12.4111 0.333496 11.5556 0.333496ZM6.88889 0.333496C6.03334 0.333496 5.33334 1.0335 5.33334 1.88905C5.33334 2.74461 6.03334 3.44461 6.88889 3.44461C7.74445 3.44461 8.44445 2.74461 8.44445 1.88905C8.44445 1.0335 7.74445 0.333496 6.88889 0.333496Z" fill="#0085FF"/></svg></button>
                    </div>
                  </div>



                  <div className='rounded-2xl bg-transparent-main-color'>
                    <div className='relative w-full h-[200px]'>
                    <img src="/images/nft.svg" className='w-full h-[200px] object-cover object-center rounded-2xl' alt="nft" />
                    <img src="/images/rounded-eth.svg" className='absolute -bottom-[27px] right-5 w-[50px]' alt="crypto icon" />
                    </div>
                    <div className="w-full flex items-center justify-between px-5 py-5">
                           <div>
                             <div className='text-main-color mb-1'>.crypto</div>
                             <div className='text-not-black text-xl font-bold'>freetesla.crypto</div>
                           </div>
                           <button><svg width="21" height="11" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.22223 0.333496C1.36667 0.333496 0.666672 1.0335 0.666672 1.88905C0.666672 2.74461 1.36667 3.44461 2.22223 3.44461C3.07778 3.44461 3.77778 2.74461 3.77778 1.88905C3.77778 1.0335 3.07778 0.333496 2.22223 0.333496ZM11.5556 0.333496C10.7 0.333496 10 1.0335 10 1.88905C10 2.74461 10.7 3.44461 11.5556 3.44461C12.4111 3.44461 13.1111 2.74461 13.1111 1.88905C13.1111 1.0335 12.4111 0.333496 11.5556 0.333496ZM6.88889 0.333496C6.03334 0.333496 5.33334 1.0335 5.33334 1.88905C5.33334 2.74461 6.03334 3.44461 6.88889 3.44461C7.74445 3.44461 8.44445 2.74461 8.44445 1.88905C8.44445 1.0335 7.74445 0.333496 6.88889 0.333496Z" fill="#0085FF"/></svg></button>
                    </div>
                  </div>




                  <div className='rounded-2xl bg-transparent-main-color'>
                    <div className='relative w-full h-[200px]'>
                    <img src="/images/nft.svg" className='w-full h-[200px] object-cover object-center rounded-2xl' alt="nft" />
                    <img src="/images/rounded-eth.svg" className='absolute -bottom-[27px] right-5 w-[50px]' alt="crypto icon" />
                    </div>
                    <div className="w-full flex items-center justify-between px-5 py-5">
                           <div>
                             <div className='text-main-color mb-1'>.crypto</div>
                             <div className='text-not-black text-xl font-bold'>freetesla.crypto</div>
                           </div>
                           <button><svg width="21" height="11" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.22223 0.333496C1.36667 0.333496 0.666672 1.0335 0.666672 1.88905C0.666672 2.74461 1.36667 3.44461 2.22223 3.44461C3.07778 3.44461 3.77778 2.74461 3.77778 1.88905C3.77778 1.0335 3.07778 0.333496 2.22223 0.333496ZM11.5556 0.333496C10.7 0.333496 10 1.0335 10 1.88905C10 2.74461 10.7 3.44461 11.5556 3.44461C12.4111 3.44461 13.1111 2.74461 13.1111 1.88905C13.1111 1.0335 12.4111 0.333496 11.5556 0.333496ZM6.88889 0.333496C6.03334 0.333496 5.33334 1.0335 5.33334 1.88905C5.33334 2.74461 6.03334 3.44461 6.88889 3.44461C7.74445 3.44461 8.44445 2.74461 8.44445 1.88905C8.44445 1.0335 7.74445 0.333496 6.88889 0.333496Z" fill="#0085FF"/></svg></button>
                    </div>
                  </div>




                  <div className='rounded-2xl bg-transparent-main-color'>
                    <div className='relative w-full h-[200px]'>
                    <img src="/images/nft.svg" className='w-full h-[200px] object-cover object-center rounded-2xl' alt="nft" />
                    <img src="/images/rounded-eth.svg" className='absolute -bottom-[27px] right-5 w-[50px]' alt="crypto icon" />
                    </div>
                    <div className="w-full flex items-center justify-between px-5 py-5">
                           <div>
                             <div className='text-main-color mb-1'>.crypto</div>
                             <div className='text-not-black text-xl font-bold'>freetesla.crypto</div>
                           </div>
                           <button><svg width="21" height="11" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.22223 0.333496C1.36667 0.333496 0.666672 1.0335 0.666672 1.88905C0.666672 2.74461 1.36667 3.44461 2.22223 3.44461C3.07778 3.44461 3.77778 2.74461 3.77778 1.88905C3.77778 1.0335 3.07778 0.333496 2.22223 0.333496ZM11.5556 0.333496C10.7 0.333496 10 1.0335 10 1.88905C10 2.74461 10.7 3.44461 11.5556 3.44461C12.4111 3.44461 13.1111 2.74461 13.1111 1.88905C13.1111 1.0335 12.4111 0.333496 11.5556 0.333496ZM6.88889 0.333496C6.03334 0.333496 5.33334 1.0335 5.33334 1.88905C5.33334 2.74461 6.03334 3.44461 6.88889 3.44461C7.74445 3.44461 8.44445 2.74461 8.44445 1.88905C8.44445 1.0335 7.74445 0.333496 6.88889 0.333496Z" fill="#0085FF"/></svg></button>
                    </div>
                  </div>



              </div>
            </div>
          }
            </div>
          }



        </div>
   </div>
    </>
  )
}

export default PortfolioUser