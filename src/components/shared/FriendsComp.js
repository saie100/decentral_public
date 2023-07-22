import {useState} from 'react';
import {Link} from 'react-router-dom'

const Friends = () => {

    let data = [
        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },



        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: true,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: true,
        },

        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },

        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },

        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },



        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },



        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },



        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },



        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },

        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },


        {
            name: "Sell MATIC/BIDR",
            id: "14961316943184",
            request: false,
        },

        

    ]

    const [overflow, setoverflow] = useState('overflow-y-hidden');
    const [overflow2, setoverflow2] = useState('overflow-y-hidden');
    const [relavent, setrelavent] = useState('');

  return (
    <>
       <div className="sidebar-scroll h-full relative bg-white pt-[20px] lg4:pt-[33px] overflow-y-auto lg4:max-h-screen">
        <div className='h-[calc(100%-100px)]'>

           <div className="px-5 lg4:px-4">
           <button className="custom-shadow bg-white w-full p-3 rounded-3xl">
           <div className="w-full flex items-center gap-2 bg-transparent border border-[#F5F5F7] focus-within:border-[#0085FF] focus-within:bg-transparent-main-color rounded-xl px-3"><input type="text" onChange={(e)=> {setrelavent(e.target.value)}} value={relavent} placeholder='Search New Friends' className='w-full bg-transparent py-3 text-[#11047A] text-[15px] border-none outline-none' /><svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="#11047A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.5 16.5L15 15" stroke="#11047A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
           </button>
           </div>



             {
                relavent === "" ?
                <div>
                    <div className='mt-10 '>

<div className="px-5 lg4:px-4 flex items-center justify-between border-b pb-3 border-[#F9F9F9]">
    <div className='text-[17px] text-[#11047A] font-bold'>Friends Request</div>
    <button><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2175 11.3629C14.1286 11.3629 12.4342 13.072 12.4342 15.1815C12.4342 17.2898 14.1286 19 16.2175 19C18.3064 19 19.9997 17.2898 19.9997 15.1815C19.9997 13.072 18.3064 11.3629 16.2175 11.3629Z" fill="#0085FF"/><path opacity="0.4" d="M8.08337 13.6605H1.50788C0.67567 13.6605 0.00012207 14.3424 0.00012207 15.1812C0.00012207 16.0201 0.67567 16.703 1.50788 16.703H8.08337C8.91447 16.703 9.59002 16.0201 9.59002 15.1812C9.59002 14.3424 8.91447 13.6605 8.08337 13.6605Z" fill="#0085FF"/><path d="M3.78329 7.6371C5.87216 7.6371 7.56658 5.928 7.56658 3.81967C7.56658 1.71022 5.87216 0 3.78329 0C1.69443 0 0 1.71022 0 3.81967C0 5.928 1.69443 7.6371 3.78329 7.6371Z" fill="#0085FF"/><path opacity="0.4" d="M20 3.81927C20 2.98043 19.3244 2.29858 18.4933 2.29858H11.9179C11.0856 2.29858 10.4101 2.98043 10.4101 3.81927C10.4101 4.65812 11.0856 5.33997 11.9179 5.33997H18.4933C19.3244 5.33997 20 4.65812 20 3.81927Z" fill="#0085FF"/></svg></button>
</div>


<div className={`relative flex flex-col divide-y divide-[#F9F9F9] h-full ${overflow} ${overflow === "overflow-y-hidden" ? "max-h-[400px] lg4:max-h-[50vh]" : ""} `}>
{
  data.map((ele)=>{
    return(
        <div key={Math.random()} className="flex sm3:items-center justify-between flex-col sm3:flex-row gap-2 py-4 px-5 lg4:px-4">
<div className="flex items-center gap-3">
<img src="/images/profile.png" className='w-[60px]' alt="profile" />
<div className='text-left flex flex-col gap-1'>
<div className='oneLineText text-[#11047A] text-[15px] font-bold'>{ele.name}</div>
<div className='oneLineText text-not-black text-[15px]'>{ele.id}</div>
</div>
</div>

<div className="grid grid-cols-2 sm3:flex sm3:items-end sm3:justify-end w-full sm3:w-auto gap-2 mt-3 sm3:mt-0">
<button className='bg-main-color rounded-lg text-white px-3.5 h-[43px] flex items-center justify-center text-[14px]'>Dismiss</button>
<button className='bg-[#FF21211A] rounded-lg text-[#FF3535] px-3.5 h-[43px] flex items-center justify-center text-[14px]'>Accept</button>
</div>

</div>
    )
  })
}

<button onClick={()=> {setoverflow('overflow-y-auto')}} className={`gradientWhiteBG min-h-[120px] pb-2 sticky -bottom-[1px] left-0 w-full items-end justify-center text-main-color ${overflow === "overflow-y-hidden" ? "flex" : "hidden"}`}>See All</button>
    

</div>

</div>









<div className='mt-10 '>

<div className="px-5 lg4:px-4 flex items-center justify-between border-b pb-3 border-[#F9F9F9]">
<div className='text-[17px] text-[#11047A] font-bold'>Suggestion People</div>
<button><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2175 11.3629C14.1286 11.3629 12.4342 13.072 12.4342 15.1815C12.4342 17.2898 14.1286 19 16.2175 19C18.3064 19 19.9997 17.2898 19.9997 15.1815C19.9997 13.072 18.3064 11.3629 16.2175 11.3629Z" fill="#0085FF"/><path opacity="0.4" d="M8.08337 13.6605H1.50788C0.67567 13.6605 0.00012207 14.3424 0.00012207 15.1812C0.00012207 16.0201 0.67567 16.703 1.50788 16.703H8.08337C8.91447 16.703 9.59002 16.0201 9.59002 15.1812C9.59002 14.3424 8.91447 13.6605 8.08337 13.6605Z" fill="#0085FF"/><path d="M3.78329 7.6371C5.87216 7.6371 7.56658 5.928 7.56658 3.81967C7.56658 1.71022 5.87216 0 3.78329 0C1.69443 0 0 1.71022 0 3.81967C0 5.928 1.69443 7.6371 3.78329 7.6371Z" fill="#0085FF"/><path opacity="0.4" d="M20 3.81927C20 2.98043 19.3244 2.29858 18.4933 2.29858H11.9179C11.0856 2.29858 10.4101 2.98043 10.4101 3.81927C10.4101 4.65812 11.0856 5.33997 11.9179 5.33997H18.4933C19.3244 5.33997 20 4.65812 20 3.81927Z" fill="#0085FF"/></svg></button>
</div>


<div className={`relative flex flex-col divide-y divide-[#F9F9F9] h-full ${overflow2} ${overflow2 === "overflow-y-hidden" ? "max-h-[400px] lg4:max-h-[50vh]" : ""} `}>
{
  data.map((ele)=>{
    return(
        <div key={Math.random()} className="flex sm3:items-center justify-between flex-col sm3:flex-row gap-2 py-4 px-5 lg4:px-4">
<div className="flex items-center gap-3">
<img src="/images/profile.png" className='w-[60px]' alt="profile" />
<div className='text-left flex flex-col gap-1'>
<div className='oneLineText text-[#11047A] text-[15px] font-bold'>{ele.name}</div>
<div className='oneLineText text-not-black text-[15px]'>{ele.id}</div>
</div>
</div>

<div className="grid grid-cols-1 sm3:flex sm3:items-end sm3:justify-end w-full sm3:w-auto gap-2 mt-3 sm3:mt-0">
<Link to="/chat"><div className='bg-white border border-[#F5F5F7] rounded-lg text-main-color px-2.5 h-[43px] flex items-center justify-center'><svg width="23" height="23" className='translate-y-[1px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99984 19.0083C9.42484 19.0083 8.88317 18.7166 8.49984 18.2083L7.24984 16.5416C7.22484 16.5083 7.12484 16.4666 7.08317 16.4583H6.6665C3.1915 16.4583 1.0415 15.5166 1.0415 10.8333V6.66663C1.0415 2.98329 2.98317 1.04163 6.6665 1.04163H13.3332C17.0165 1.04163 18.9582 2.98329 18.9582 6.66663V10.8333C18.9582 14.5166 17.0165 16.4583 13.3332 16.4583H12.9165C12.8498 16.4583 12.7915 16.4916 12.7498 16.5416L11.4998 18.2083C11.1165 18.7166 10.5748 19.0083 9.99984 19.0083ZM6.6665 2.29163C3.68317 2.29163 2.2915 3.68329 2.2915 6.66663V10.8333C2.2915 14.6 3.58317 15.2083 6.6665 15.2083H7.08317C7.50817 15.2083 7.9915 15.45 8.24984 15.7916L9.49984 17.4583C9.7915 17.8416 10.2082 17.8416 10.4998 17.4583L11.7498 15.7916C12.0248 15.425 12.4582 15.2083 12.9165 15.2083H13.3332C16.3165 15.2083 17.7082 13.8166 17.7082 10.8333V6.66663C17.7082 3.68329 16.3165 2.29163 13.3332 2.29163H6.6665Z" fill="#0085FF"/><path d="M9.99984 10C9.53317 10 9.1665 9.62504 9.1665 9.16671C9.1665 8.70837 9.5415 8.33337 9.99984 8.33337C10.4582 8.33337 10.8332 8.70837 10.8332 9.16671C10.8332 9.62504 10.4665 10 9.99984 10Z" fill="#0085FF"/><path d="M13.3333 10C12.8667 10 12.5 9.62504 12.5 9.16671C12.5 8.70837 12.875 8.33337 13.3333 8.33337C13.7917 8.33337 14.1667 8.70837 14.1667 9.16671C14.1667 9.62504 13.8 10 13.3333 10Z" fill="#0085FF"/><path d="M6.66683 10C6.20016 10 5.8335 9.62504 5.8335 9.16671C5.8335 8.70837 6.2085 8.33337 6.66683 8.33337C7.12516 8.33337 7.50016 8.70837 7.50016 9.16671C7.50016 9.62504 7.1335 10 6.66683 10Z" fill="#0085FF"/></svg></div></Link>
<button className={`rounded-lg text-white sm3:w-[140px] h-[43px] flex items-center justify-center text-[14px] ${ele.request ? "bg-[#ACACAC]" : "bg-main-color"}`}>{ele.request ? "Cancel Request" : "Send Request"}</button>
</div>

</div>
    )
  })
}

<button onClick={()=> {setoverflow2('overflow-y-auto')}} className={`gradientWhiteBG min-h-[120px] pb-2 sticky -bottom-[1px] left-0 w-full items-end justify-center text-main-color ${overflow2 === "overflow-y-hidden" ? "flex" : "hidden"}`}>See All</button>
    

</div>

</div>
                </div>
                :
                <div className='mt-10 '>

<div className="px-5 lg4:px-4 flex items-center justify-between border-b pb-3 border-[#F9F9F9]">
    <div className='text-[17px] text-[#11047A] font-bold'>Relevent Search</div>
    <button><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2175 11.3629C14.1286 11.3629 12.4342 13.072 12.4342 15.1815C12.4342 17.2898 14.1286 19 16.2175 19C18.3064 19 19.9997 17.2898 19.9997 15.1815C19.9997 13.072 18.3064 11.3629 16.2175 11.3629Z" fill="#0085FF"/><path opacity="0.4" d="M8.08337 13.6605H1.50788C0.67567 13.6605 0.00012207 14.3424 0.00012207 15.1812C0.00012207 16.0201 0.67567 16.703 1.50788 16.703H8.08337C8.91447 16.703 9.59002 16.0201 9.59002 15.1812C9.59002 14.3424 8.91447 13.6605 8.08337 13.6605Z" fill="#0085FF"/><path d="M3.78329 7.6371C5.87216 7.6371 7.56658 5.928 7.56658 3.81967C7.56658 1.71022 5.87216 0 3.78329 0C1.69443 0 0 1.71022 0 3.81967C0 5.928 1.69443 7.6371 3.78329 7.6371Z" fill="#0085FF"/><path opacity="0.4" d="M20 3.81927C20 2.98043 19.3244 2.29858 18.4933 2.29858H11.9179C11.0856 2.29858 10.4101 2.98043 10.4101 3.81927C10.4101 4.65812 11.0856 5.33997 11.9179 5.33997H18.4933C19.3244 5.33997 20 4.65812 20 3.81927Z" fill="#0085FF"/></svg></button>
</div>


<div className={`relative flex flex-col divide-y divide-[#F9F9F9] h-full  `}>
{
  data.slice(0,4).map((ele)=>{
    return(
        <div key={Math.random()} className="flex sm3:items-center justify-between flex-col sm3:flex-row gap-2 py-4 px-5 lg4:px-4">
<div className="flex items-center gap-3">
<img src="/images/profile.png" className='w-[60px]' alt="profile" />
<div className='text-left flex flex-col gap-1'>
<div className='oneLineText text-[#11047A] text-[15px] font-bold'>{ele.name}</div>
<div className='oneLineText text-not-black text-[15px]'>{ele.id}</div>
</div>
</div>

<div className="grid grid-cols-1 sm3:flex sm3:items-end sm3:justify-end w-full sm3:w-auto gap-2 mt-3 sm3:mt-0">
<Link to="/chat"><div className='bg-white border border-[#F5F5F7] rounded-lg text-main-color px-2.5 h-[43px] flex items-center justify-center'><svg width="23" height="23" className='translate-y-[1px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99984 19.0083C9.42484 19.0083 8.88317 18.7166 8.49984 18.2083L7.24984 16.5416C7.22484 16.5083 7.12484 16.4666 7.08317 16.4583H6.6665C3.1915 16.4583 1.0415 15.5166 1.0415 10.8333V6.66663C1.0415 2.98329 2.98317 1.04163 6.6665 1.04163H13.3332C17.0165 1.04163 18.9582 2.98329 18.9582 6.66663V10.8333C18.9582 14.5166 17.0165 16.4583 13.3332 16.4583H12.9165C12.8498 16.4583 12.7915 16.4916 12.7498 16.5416L11.4998 18.2083C11.1165 18.7166 10.5748 19.0083 9.99984 19.0083ZM6.6665 2.29163C3.68317 2.29163 2.2915 3.68329 2.2915 6.66663V10.8333C2.2915 14.6 3.58317 15.2083 6.6665 15.2083H7.08317C7.50817 15.2083 7.9915 15.45 8.24984 15.7916L9.49984 17.4583C9.7915 17.8416 10.2082 17.8416 10.4998 17.4583L11.7498 15.7916C12.0248 15.425 12.4582 15.2083 12.9165 15.2083H13.3332C16.3165 15.2083 17.7082 13.8166 17.7082 10.8333V6.66663C17.7082 3.68329 16.3165 2.29163 13.3332 2.29163H6.6665Z" fill="#0085FF"/><path d="M9.99984 10C9.53317 10 9.1665 9.62504 9.1665 9.16671C9.1665 8.70837 9.5415 8.33337 9.99984 8.33337C10.4582 8.33337 10.8332 8.70837 10.8332 9.16671C10.8332 9.62504 10.4665 10 9.99984 10Z" fill="#0085FF"/><path d="M13.3333 10C12.8667 10 12.5 9.62504 12.5 9.16671C12.5 8.70837 12.875 8.33337 13.3333 8.33337C13.7917 8.33337 14.1667 8.70837 14.1667 9.16671C14.1667 9.62504 13.8 10 13.3333 10Z" fill="#0085FF"/><path d="M6.66683 10C6.20016 10 5.8335 9.62504 5.8335 9.16671C5.8335 8.70837 6.2085 8.33337 6.66683 8.33337C7.12516 8.33337 7.50016 8.70837 7.50016 9.16671C7.50016 9.62504 7.1335 10 6.66683 10Z" fill="#0085FF"/></svg></div></Link>
<button className={`rounded-lg text-white sm3:w-[140px] h-[43px] flex items-center justify-center text-[14px] ${ele.request ? "bg-[#ACACAC]" : "bg-main-color"}`}>{ele.request ? "Cancel Request" : "Send Request"}</button>
</div>

</div>
    )
  })
}

    

</div>

</div>
             }










        
        </div>
       </div>
    </>
  )
}

export default Friends