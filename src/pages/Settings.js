import React, {Fragment} from 'react'
import SideNavbar from '../components/shared/SideNavbar'
import BuySellSidebar from '../components/shared/BuySellSidebar'
import {Link} from 'react-router-dom'
import { Dialog, Transition,RadioGroup } from '@headlessui/react'
import AddNewAddress from '../components/shared/AddNewAddress';

const Settings = () => {

  const [navBar, setnavBar] = React.useState('-translate-x-full');
  const [show, setshow] = React.useState('Profile');
  const [dateValue, setdateValue] = React.useState('MM DD YYY');
  const [plan, setPlan] = React.useState('bank of america')
  const [isOpen, setIsOpen] = React.useState(false);
  const [showDropDown, setshowDropDown] = React.useState(false);
  const [showDropDown2, setshowDropDown2] = React.useState(false);
  const [showDropDown3, setshowDropDown3] = React.useState(false);
  const [saveChanges, setsaveChanges] = React.useState(false);
  const [resetChanges, setresetChanges] = React.useState(false);
  const [newaddress, setnewaddress] = React.useState(false);
  const [deletePaymentMethod, setdeletePaymentMethod] = React.useState(false);
  
  const [profileI1, setprofileI1] = React.useState("");
  const [profileI2, setprofileI2] = React.useState("");
  const [profileI3, setprofileI3] = React.useState("");
  const [profileI4, setprofileI4] = React.useState("");
  const [profileI5, setprofileI5] = React.useState("");
  const [profileI6, setprofileI6] = React.useState("");
  const [profileI7, setprofileI7] = React.useState("");
  const [profileI8, setprofileI8] = React.useState("");


  const [profileFirstName, setprofileFirstName] = React.useState("");
  const [profileLastName, setprofileLastName] = React.useState("");
  const [country, setcountry] = React.useState("");
  const [state, setstate] = React.useState("");
  const [city, setcity] = React.useState("");
  const [zip, setzip] = React.useState("");
  const [number, setnumber] = React.useState("");





  const [password1, setpassword1] = React.useState("");
  const [password2, setpassword2] = React.useState("");
  const [password3, setpassword3] = React.useState("");


  const [oldPassword, setoldPassword] = React.useState("");
  const [newPassword, setnewPassword] = React.useState("");
  const [ConfirmPassword, setConfirmPassword] = React.useState("");




  const [accountNameI1, setaccountNameI1] = React.useState("");
  const [accountNameValue, setaccountNameValue] = React.useState("");

  const [accountNumberI1, setaccountNumberI1] = React.useState("");
  const [accountNumberValue, setaccountNumberValue] = React.useState("");

  const [routingNumberI1, setroutingNumberI1] = React.useState("");
  const [routingNumberValue, setroutingNumberValue] = React.useState("");




  function closeModal() {
    setIsOpen(false)
    setsaveChanges(false)
    setresetChanges(false)
    setnewaddress(false)
    setdeletePaymentMethod(false)

    setaccountNameValue("");
    setaccountNumberValue("");
    setroutingNumberValue("");

    setaccountNameI1("");
    setaccountNumberI1("");
    setroutingNumberI1("");

  }

  function openModal() {
    setIsOpen(true)
  }

  function saveChangesModalOpenProfile() {
    if(profileFirstName === ""){
      setprofileI1("error");
    }

    if(profileLastName === ""){
      setprofileI2("error");
    }

    if(country === ""){
      setprofileI3("error");
    }

    if(state === ""){
      setprofileI4("error");
    }


    if(city === ""){
      setprofileI5("error");
    }


    if(zip === ""){
      setprofileI6("error");
    }

    if(number === ""){
      setprofileI7("error");
    }

    // if(dateValue === "MM DD YYY"){
    //   profileI8("error");
    // }

    else{
      setprofileI1("");
      setprofileI2("");
      setprofileI3("");
      setprofileI4("");
      setprofileI5("");
      setprofileI6("");
      setprofileI7("");
      setprofileI8("");
      setsaveChanges(true);
    }
  }










  function saveChangesModalOpenPassword() {
    if(oldPassword === ""){
      setpassword1("error");
    }

    if(newPassword === ""){
      setpassword2("error");
    }

    if(ConfirmPassword === ""){
      setpassword3("error");
    }


    else{
      setpassword1("");
      setpassword2("");
      setpassword3("");
      setsaveChanges(true);
    }
  }

  function resetChangesModalOpen() {
    setresetChanges(true)
  }



  let validateBankDetails = () =>{


    if(accountNameValue === ""){
      setaccountNameI1("error");
    }

    if(accountNumberValue === ""){
      setaccountNumberI1("error");
    }

    if(routingNumberValue === ""){
      setroutingNumberI1("error");
    }


    else{
      setaccountNameValue("");
      setaccountNumberValue("");
      setroutingNumberValue("");

      setaccountNameI1("");
      setaccountNumberI1("");
      setroutingNumberI1("");
      
      closeModal()
    }
  }


  const [showDeleteIcons, setshowDeleteIcons] = React.useState(false);



  React.useEffect(() => {
    document.body.classList.add('dashboard');
  }, [])
  
  return (
    <>
    <div className="mainCont grid grid-cols-1 lg2:grid-cols-[300px,1fr,350px] overflow-y-hidden ">
    <div className="px-5 w-full pt-4 flex gap-2 lg2:hidden items-center justify-between">
       <div className="h-fit"><Link to="/"><img src="/images/logo.svg" alt="logo" /></Link></div>
            <div className="flex items-center gap-3">
            <div onMouseEnter={()=> {setshowDropDown3(true)}} onMouseLeave={()=> {setshowDropDown3(false)}} className="relative">
            <button className="border border-[#F2F2F2] h-[54px] rounded-xl p-1">
               <div className="flex items-center justify-between gap-3 px-2">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]">oxe44d...</div>
                <div className='mr-1'><svg className={`${showDropDown3 === false ? "" : "rotate-180"}`} width="9" height="8" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.86603 4.5C3.48113 5.16667 2.51888 5.16667 2.13397 4.5L0.401923 1.5C0.0170231 0.833332 0.498149 -3.85264e-07 1.26795 -4.52563e-07L4.73205 -7.55404e-07C5.50185 -8.22702e-07 5.98298 0.833332 5.59808 1.5L3.86603 4.5Z" fill={showDropDown3 === false ? "#1A1A1A" : "#0085FF"}/></svg></div>
               </div>

              <div className={`absolute top-full left-0 w-full flex flex-col gap-3 z-30 bg-white py-2.5 border border-[#F2F2F2] rounded-xl ${showDropDown3 === false ? "hidden" : "block"}`}>
              <label htmlFor="btc123123asd13" className="cursor-pointer flex items-center justify-between px-3 ">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]">oxe44d...</div>
                <input id="btc123123asd13" type="radio" name="wallet" className='cursor-pointer w-[15px] h-[15px]' />
               </label>


               <label htmlFor="btc9876543567" className="cursor-pointer flex items-center justify-between px-3 mb-1">
               <div className="flex items-center gap-1.5 font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]">oxe44d...</div>
                <input id="btc9876543567" type="radio" name="wallet" className='cursor-pointer w-[15px] h-[15px]' />
               </label>
              </div>

               
            </button>

           </div>
            <button onClick={()=> {navBar === "-translate-x-full" ? setnavBar('translate-x-0') : setnavBar('-translate-x-full')}} className='z-[999999] bg-white w-[45px] flex items-center justify-center h-[54px] rounded-xl border border-[#F2F2F2]'> <img src="/images/menu.svg" className={`w-[25px] ${navBar === "-translate-x-full" ? "" : "hidden"}`} alt="icon" /> <img src="/images/close.svg" className={`w-[25px] ${navBar === "-translate-x-full" ? "hidden" : ""}`}  alt="icon" /></button>

            </div>
      </div>
      <div className={`${navBar} lg2:translate-x-0 transition fixed z-[9999] pr-[75px] lg2:pr-0 max-w-[300px] lg2:max-w-[100%] w-full top-0 left-0 lg2:relative lg2:top-auto lg2:left-auto`}><SideNavbar/></div>
      <div onClick={()=> setnavBar('-translate-x-full')} className={`${navBar === "-translate-x-full" ? "opacity-0 invisible" : "opacity-100 visible"} transition lg2:hidden fixed top-0 z-[999] left-0 w-screen h-screen bg-[#11047A33] bg-opacity-20 pr-4`}></div>
      <div className="pt-5 bg-white overflow-hidden">

      <div className="sidebar-scroll bg-transparent-main-color p-5 rounded-lg lg2:rounded-tl-lg lg2:rounded-tr-lg h-full lg2:max-h-screen min-h-[calc(100vh-90px)] lg2:min-h-full overflow-y-auto">
        
      <div className="bg-white rounded-xl px-4 py-4 sm2:py-2 flex items-center justify-between flex-col gap-2 sm2:gap-0 sm2:flex-row">
          <div className='text-not-black font-bold text-[20px]'>Settings</div>
          <div className="w-full border border-[#E9EDF7] grid grid-cols-3 sm2:flex items-center sm2:w-fit h-fit bg-transparent-main-color rounded-xl overflow-hidden">
             <button onClick={()=> {setshow("Profile")}} className={`${show === "Profile" ? "sm2:px-6 py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-main-color text-white" : "sm2:px-6 py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-transparent-main-color text-not-black"}`}>Profile</button>
             <button onClick={()=> {setshow("Password")}} className={`${show === "Password" ? "sm2:px-6 py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-main-color text-white" : "sm2:px-6 py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-transparent-main-color text-not-black"}`}>Password</button>
             {/* If you want it to be clickable add the onClick fucntion and remove the opacity and cursor default*/}
             {/* onClick={()=> {setshow("Payments")}} */}
             <button className={`opacity-50 cursor-default ${show === "Payments" ? "sm2:px-6 py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-main-color text-white" : "sm2:px-6 py-2.5 rounded-xl text-[13px] sm5:text-[15px] bg-transparent-main-color text-not-black"}`}>Payments</button>
          </div>
      </div>


      <div className='my-5'>
         {
          show === "Profile"
          ?
          <div>
            <div className='flex items-center justify-between mb-5'>
            <div className='text-[19px] text-not-black font-bold '>Profile</div>
            <button className='px-4 h-[40px] rounded-xl bg-white'><svg width="20" height="8" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="#0085FF"/></svg></button>
         </div>
        <div className="bg-white rounded-xl p-5 relative">

          <div className="flex items-center gap-4">
            <div className='relative min-w-[100px] min-h-[100px] sm5:w-[130px] sm5:h-[130px] rounded-full bg-[#D9D9D9]'>
              <button className="flex items-center justify-center rounded-full w-[30px] h-[30px] bg-white absolute bottom-0 right-3"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7 7.41663C16.7 7.67496 17.925 9.21663 17.925 12.5916V12.7C17.925 16.425 16.4333 17.9166 12.7083 17.9166H7.28332C3.55832 17.9166 2.06665 16.425 2.06665 12.7V12.5916C2.06665 9.24163 3.27498 7.69996 6.22498 7.42496" stroke="#11047A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 12.5001V3.01672" stroke="#11047A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.7917 4.87504L10 2.08337L7.20837 4.87504" stroke="#11047A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>

            <div>
              <div className="text-[18px] font-bold text-[#11047A] mb-1.5">Upload Photo</div>
              <div className='text-[#84818A] text-[14px]'>300x300 and max 2 MB</div>
            </div>
          </div>
          

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-3 mt-8">
          <div className="text-[#11047A]">
            <div className=" font-bold text-[15px] mb-2">First Name</div>
            <input type="text" onChange={(e)=> {setprofileFirstName(e.target.value)}} value={profileFirstName} className={`w-full px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color ${profileI1 === "error" ? "border-red-400" : ""}`} placeholder='Enter First Name...' />
            <div className={`text-red-400 text-sm mt-2 ${profileI1 === "error" ? "flex" : "hidden"}`}>First Name Required</div>
          </div>


          <div className="text-[#11047A]">
            <div className=" font-bold text-[15px] mb-2">Last Name</div>
            <input type="text" onChange={(e)=> {setprofileLastName(e.target.value)}} value={profileLastName} className={`w-full px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color ${profileI2 === "error" ? "border-red-400" : ""}`} placeholder='Enter Last Name...' />
            <div className={`text-red-400 text-sm mt-2 ${profileI2 === "error" ? "flex" : "hidden"}`}>Last Name Required</div>
          
          </div>

          </div>


          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-8 mt-8">
          <svg className='absolute top-[67%] left-1/2 -translate-x-1/2 hidden sm:flex' width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.75" y1="1.25" x2="9.25" y2="1.25" stroke="#11047A" stroke-width="1.5" stroke-linecap="round"/></svg>
          <div className="relative text-[#11047A]">
            <div className=" font-bold text-[15px] mb-2">Select Blockchain</div>
            <div onMouseEnter={()=> {setshowDropDown(true)}} onMouseLeave={()=> {setshowDropDown(false)}} className='cursor-pointer h-[60px] relative w-full flex items-center justify-between px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color'>
               <div className="flex items-center gap-3">
               <img src="/images/btc.svg" className='w-[40px]' alt="icon" />
               <div className='font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]'>Bitcoin</div>
               </div>
               
               <div><svg width="16" className={`${showDropDown === false ? "" : "rotate-180"}`} height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.833375L8 8.33337L15.5 0.833375" stroke="#11047A" stroke-width="1.2"/></svg></div>
            
              
               <div className={`bg-white z-[99] border w-full absolute top-full left-0 px-2 py-2 border-[#F2F2F2] rounded-lg ${showDropDown === false ? "hidden" : "flex"}`}>
             <div className='w-full'>
            
             <div className="w-full">
             <div className="w-full">
                <div className="sidebar-scroll max-h-[200px] overflow-y-auto flex flex-col w-full items-center gap-2">
                <label htmlFor="bitcoin1123sad" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="bitcoin1123sad" name="select-blockchain" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="asd3r32r" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="asd3r32r" name="select-blockchain" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="sdasd23rasf" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="sdasd23rasf" name="select-blockchain" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="sdbsgb24ghb" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="sdbsgb24ghb" name="select-blockchain" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="ksjdnskjdfn2u3i" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="ksjdnskjdfn2u3i" name="select-blockchain" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="ajsndkasjdn23iunad" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="ajsndkasjdn23iunad" name="select-blockchain" className='cursor-pointer w-[15px] h-[15px]' /></label>
                <label htmlFor="sndskjadn289bf" className='flex items-center justify-between w-full gap-5 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A] font-bold text-[15px]"><img src="/images/btc.svg" alt="icon" /> Bitcoin</div><input type="radio" id="sndskjadn289bf" name="select-blockchain" className='cursor-pointer w-[15px] h-[15px]' /></label>

                </div>
             </div>

             </div>
             </div>
           </div>

            
            </div>

            

          </div>



          <div className="relative text-[#11047A]">
            <div className=" font-bold text-[15px] mb-2">Default Wallet</div>
            <div onMouseEnter={()=> {setshowDropDown2(true)}} onMouseLeave={()=> {setshowDropDown2(false)}} className='relative cursor-pointer h-[60px] w-full flex items-center justify-between px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color'>
               <div className="flex items-center gap-3">
               <svg width="18" height="22" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.331003 6.84033H1.3564V6.70911V4.53088C1.3564 3.28516 1.83448 2.15247 2.60373 1.33179V1.33069C3.37332 0.509888 4.43557 0 5.60438 0C6.77228 0 7.8343 0.509888 8.60389 1.33069L8.60504 1.33179C9.37429 2.15247 9.85236 3.28516 9.85236 4.53088V6.70911V6.84033H10.6691C10.8511 6.84033 11.0001 6.99927 11.0001 7.19324V14.6471C11.0001 14.8411 10.8511 15 10.6691 15H0.331003C0.14902 15 0 14.8411 0 14.6471V7.19324C0 6.99927 0.14902 6.84033 0.331003 6.84033ZM3.00684 6.84033H8.20158V6.70911V4.50574C8.20158 3.74402 7.90927 3.05103 7.43909 2.54895L7.43852 2.54944C6.96799 2.04724 6.31835 1.73535 5.60438 1.73535C4.89007 1.73535 4.24043 2.04712 3.76933 2.54895C3.29904 3.05103 3.00684 3.74402 3.00684 4.50574V6.70923V6.84033ZM5.62533 10.9189L6.14964 13.4994L4.71244 13.5059L5.1342 10.8907C4.74151 10.7565 4.45686 10.364 4.45686 9.90063C4.45686 9.32678 4.89293 8.86169 5.43121 8.86169C5.96892 8.86169 6.40533 9.32678 6.40533 9.90063C6.40533 10.4036 6.07021 10.8231 5.62533 10.9189Z" fill="black"/></svg>
               <div className='font-[PlusJakartaSans-SemiBold] text-[15px] text-[#11047A]'>oxe44d...07059e</div>
               </div>
               
               <div><svg width="16" className={`${showDropDown2 === false ? "" : "rotate-180"}`} height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.833375L8 8.33337L15.5 0.833375" stroke="#11047A" stroke-width="1.2"/></svg></div>
            
               <div className={`bg-white z-[99] border w-full min-w-[250px] absolute top-full left-0 px-2 py-2 border-[#F2F2F2] rounded-lg ${showDropDown2 === false ? "hidden" : "flex"}`}>
             <div className='w-full'>
            
             <div className="w-full">
             <div className="sidebar-scroll max-h-[120px] overflow-y-auto flex flex-col w-full items-center gap-2">
             
                <label htmlFor='solanaaskdjn3241' className='flex items-center justify-between cursor-pointer w-full gap-2'><img src="/images/btc.svg" alt="icon" /><div className="flex items-center gap-2"> <div className='flex items-center gap-1 rounded-full bg-transparent-main-color text-main-color py-[2px] px-2 text-[13px]'><svg width="12" height="14" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_287_9321)"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.150456 3.19216H0.616546V3.13092V2.11441C0.616546 1.53307 0.833854 1.00448 1.18351 0.621501V0.620988C1.53333 0.237948 2.01617 0 2.54745 0C3.07831 0 3.56105 0.237948 3.91086 0.620988L3.91138 0.621501C4.26104 1.00448 4.47835 1.53307 4.47835 2.11441V3.13092V3.19216H4.8496C4.93232 3.19216 5.00005 3.26632 5.00005 3.35684V6.83531C5.00005 6.92583 4.93232 7 4.8496 7H0.150456C0.0677363 7 0 6.92583 0 6.83531V3.35684C0 3.26632 0.0677363 3.19216 0.150456 3.19216ZM1.36674 3.19216H3.72799V3.13092V2.10268C3.72799 1.74721 3.59512 1.42381 3.3814 1.18951L3.38114 1.18974C3.16727 0.955379 2.87198 0.809831 2.54745 0.809831C2.22276 0.809831 1.92747 0.955322 1.71333 1.18951C1.49956 1.42381 1.36674 1.74721 1.36674 2.10268V3.13097V3.19216ZM2.55697 5.09551L2.79529 6.29972L2.14202 6.30273L2.33373 5.08235C2.15523 5.01969 2.02585 4.83654 2.02585 4.6203C2.02585 4.3525 2.22406 4.13546 2.46873 4.13546C2.71315 4.13546 2.91152 4.3525 2.91152 4.6203C2.91152 4.855 2.75919 5.05079 2.55697 5.09551Z" fill="#0085FF"/></g><defs><clipPath id="clip0_287_9321"><rect width="5" height="7" fill="white"/></clipPath></defs></svg> Default Address</div> {showDeleteIcons === false ? <input type="radio" id="solanaaskdjn3241" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /> : <svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6794 2.27673C11.9226 2.27673 12.125 2.47861 12.125 2.73548V2.97298C12.125 3.2236 11.9226 3.43172 11.6794 3.43172H1.32116C1.07741 3.43172 0.875 3.2236 0.875 2.97298V2.73548C0.875 2.47861 1.07741 2.27673 1.32116 2.27673H3.14348C3.51366 2.27673 3.83581 2.01361 3.91909 1.64236L4.01452 1.21612C4.16284 0.635499 4.65093 0.249878 5.20954 0.249878H7.79046C8.34299 0.249878 8.83656 0.635499 8.9794 1.18549L9.08152 1.64174C9.16419 2.01361 9.48634 2.27673 9.85713 2.27673H11.6794ZM10.7535 10.9586C10.9438 9.1855 11.2769 4.97304 11.2769 4.93054C11.289 4.80179 11.2471 4.67992 11.1638 4.5818C11.0744 4.48992 10.9614 4.43555 10.8368 4.43555H2.16769C2.04248 4.43555 1.92334 4.48992 1.84067 4.5818C1.75679 4.67992 1.71545 4.80179 1.72153 4.93054C1.72265 4.93835 1.7346 5.08674 1.75459 5.33481C1.84336 6.43684 2.0906 9.5062 2.25036 10.9586C2.36342 12.0286 3.06548 12.7011 4.0824 12.7255C4.86713 12.7436 5.67557 12.7498 6.50224 12.7498C7.28089 12.7498 8.07169 12.7436 8.88074 12.7255C9.93292 12.7073 10.6344 12.0467 10.7535 10.9586Z" fill="#E71D36"/></svg>}</div></label>
                <label htmlFor='solanaaskdjn3241asd' className='flex items-center justify-between w-full gap-2 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A]"><img src="/images/btc.svg" alt="icon" />ox996d...659er9</div>{showDeleteIcons === false ? <input type="radio" id="solanaaskdjn3241asd" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /> : <svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6794 2.27673C11.9226 2.27673 12.125 2.47861 12.125 2.73548V2.97298C12.125 3.2236 11.9226 3.43172 11.6794 3.43172H1.32116C1.07741 3.43172 0.875 3.2236 0.875 2.97298V2.73548C0.875 2.47861 1.07741 2.27673 1.32116 2.27673H3.14348C3.51366 2.27673 3.83581 2.01361 3.91909 1.64236L4.01452 1.21612C4.16284 0.635499 4.65093 0.249878 5.20954 0.249878H7.79046C8.34299 0.249878 8.83656 0.635499 8.9794 1.18549L9.08152 1.64174C9.16419 2.01361 9.48634 2.27673 9.85713 2.27673H11.6794ZM10.7535 10.9586C10.9438 9.1855 11.2769 4.97304 11.2769 4.93054C11.289 4.80179 11.2471 4.67992 11.1638 4.5818C11.0744 4.48992 10.9614 4.43555 10.8368 4.43555H2.16769C2.04248 4.43555 1.92334 4.48992 1.84067 4.5818C1.75679 4.67992 1.71545 4.80179 1.72153 4.93054C1.72265 4.93835 1.7346 5.08674 1.75459 5.33481C1.84336 6.43684 2.0906 9.5062 2.25036 10.9586C2.36342 12.0286 3.06548 12.7011 4.0824 12.7255C4.86713 12.7436 5.67557 12.7498 6.50224 12.7498C7.28089 12.7498 8.07169 12.7436 8.88074 12.7255C9.93292 12.7073 10.6344 12.0467 10.7535 10.9586Z" fill="#E71D36"/></svg>}</label>
                <label htmlFor='bnfdkjbn' className='flex items-center justify-between w-full gap-2 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A]"><img src="/images/btc.svg" alt="icon" />ox996d...659er9</div>{showDeleteIcons === false ? <input type="radio" id="bnfdkjbn" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /> : <svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6794 2.27673C11.9226 2.27673 12.125 2.47861 12.125 2.73548V2.97298C12.125 3.2236 11.9226 3.43172 11.6794 3.43172H1.32116C1.07741 3.43172 0.875 3.2236 0.875 2.97298V2.73548C0.875 2.47861 1.07741 2.27673 1.32116 2.27673H3.14348C3.51366 2.27673 3.83581 2.01361 3.91909 1.64236L4.01452 1.21612C4.16284 0.635499 4.65093 0.249878 5.20954 0.249878H7.79046C8.34299 0.249878 8.83656 0.635499 8.9794 1.18549L9.08152 1.64174C9.16419 2.01361 9.48634 2.27673 9.85713 2.27673H11.6794ZM10.7535 10.9586C10.9438 9.1855 11.2769 4.97304 11.2769 4.93054C11.289 4.80179 11.2471 4.67992 11.1638 4.5818C11.0744 4.48992 10.9614 4.43555 10.8368 4.43555H2.16769C2.04248 4.43555 1.92334 4.48992 1.84067 4.5818C1.75679 4.67992 1.71545 4.80179 1.72153 4.93054C1.72265 4.93835 1.7346 5.08674 1.75459 5.33481C1.84336 6.43684 2.0906 9.5062 2.25036 10.9586C2.36342 12.0286 3.06548 12.7011 4.0824 12.7255C4.86713 12.7436 5.67557 12.7498 6.50224 12.7498C7.28089 12.7498 8.07169 12.7436 8.88074 12.7255C9.93292 12.7073 10.6344 12.0467 10.7535 10.9586Z" fill="#E71D36"/></svg>}</label>
                <label htmlFor='solanaaskdjn3241asdasdqiufwe' className='flex items-center justify-between w-full gap-2 cursor-pointer'><div className="flex items-center gap-2 text-[#11047A]"><img src="/images/btc.svg" alt="icon" />ox996d...659er9</div>{showDeleteIcons === false ? <input type="radio" id="solanaaskdjn3241asdasdqiufwe" name="select-coin" className='cursor-pointer w-[15px] h-[15px]' /> : <svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6794 2.27673C11.9226 2.27673 12.125 2.47861 12.125 2.73548V2.97298C12.125 3.2236 11.9226 3.43172 11.6794 3.43172H1.32116C1.07741 3.43172 0.875 3.2236 0.875 2.97298V2.73548C0.875 2.47861 1.07741 2.27673 1.32116 2.27673H3.14348C3.51366 2.27673 3.83581 2.01361 3.91909 1.64236L4.01452 1.21612C4.16284 0.635499 4.65093 0.249878 5.20954 0.249878H7.79046C8.34299 0.249878 8.83656 0.635499 8.9794 1.18549L9.08152 1.64174C9.16419 2.01361 9.48634 2.27673 9.85713 2.27673H11.6794ZM10.7535 10.9586C10.9438 9.1855 11.2769 4.97304 11.2769 4.93054C11.289 4.80179 11.2471 4.67992 11.1638 4.5818C11.0744 4.48992 10.9614 4.43555 10.8368 4.43555H2.16769C2.04248 4.43555 1.92334 4.48992 1.84067 4.5818C1.75679 4.67992 1.71545 4.80179 1.72153 4.93054C1.72265 4.93835 1.7346 5.08674 1.75459 5.33481C1.84336 6.43684 2.0906 9.5062 2.25036 10.9586C2.36342 12.0286 3.06548 12.7011 4.0824 12.7255C4.86713 12.7436 5.67557 12.7498 6.50224 12.7498C7.28089 12.7498 8.07169 12.7436 8.88074 12.7255C9.93292 12.7073 10.6344 12.0467 10.7535 10.9586Z" fill="#E71D36"/></svg>}</label>
                </div>

                <div onClick={()=> {setnewaddress(true)}} className="w-full mt-3"><button className='w-full rounded-lg bg-transparent-main-color text-main-color font-bold flex items-center justify-center py-3 text-[15px] '>Add new Address</button></div>
                <div onClick={()=> {setshowDeleteIcons(true)}} className={`w-full mt-3 ${showDeleteIcons === false ? "block" : "hidden"}`}><button className='w-full rounded-lg bg-[#E71D3626] text-[#E71D36] font-bold flex items-center justify-center py-3 text-[15px] flex items-center gap-2 flex-row-reverse'>Delete Address <svg width="15" height="15" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6794 2.27673C11.9226 2.27673 12.125 2.47861 12.125 2.73548V2.97298C12.125 3.2236 11.9226 3.43172 11.6794 3.43172H1.32116C1.07741 3.43172 0.875 3.2236 0.875 2.97298V2.73548C0.875 2.47861 1.07741 2.27673 1.32116 2.27673H3.14348C3.51366 2.27673 3.83581 2.01361 3.91909 1.64236L4.01452 1.21612C4.16284 0.635499 4.65093 0.249878 5.20954 0.249878H7.79046C8.34299 0.249878 8.83656 0.635499 8.9794 1.18549L9.08152 1.64174C9.16419 2.01361 9.48634 2.27673 9.85713 2.27673H11.6794ZM10.7535 10.9586C10.9438 9.1855 11.2769 4.97304 11.2769 4.93054C11.289 4.80179 11.2471 4.67992 11.1638 4.5818C11.0744 4.48992 10.9614 4.43555 10.8368 4.43555H2.16769C2.04248 4.43555 1.92334 4.48992 1.84067 4.5818C1.75679 4.67992 1.71545 4.80179 1.72153 4.93054C1.72265 4.93835 1.7346 5.08674 1.75459 5.33481C1.84336 6.43684 2.0906 9.5062 2.25036 10.9586C2.36342 12.0286 3.06548 12.7011 4.0824 12.7255C4.86713 12.7436 5.67557 12.7498 6.50224 12.7498C7.28089 12.7498 8.07169 12.7436 8.88074 12.7255C9.93292 12.7073 10.6344 12.0467 10.7535 10.9586Z" fill="#E71D36"/></svg></button></div>
                <div onClick={()=> {setshowDeleteIcons(false)}} className={`w-full mt-3 ${showDeleteIcons === true ? "block" : "hidden"}`}><button className='w-full rounded-lg bg-[#E71D36] text-white font-bold flex items-center justify-center py-3 text-[15px] '>Cancel</button></div>
             </div>
             </div>
           </div>
            </div>

            

          </div>


          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-3 mt-8">
          <div className="text-[#11047A]">
            <div className=" font-bold text-[15px] mb-2">Country</div>
            <input type="text" onChange={(e)=> {setcountry(e.target.value)}} value={country} className={`w-full px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color ${profileI3 === "error" ? "border-red-400" : ""}`} placeholder='Enter Country name...' />
            <div className={`text-red-400 text-sm mt-2 ${profileI3 === "error" ? "flex" : "hidden"}`}>Country Required</div>
          </div>


          <div className="text-[#11047A]">
            <div className=" font-bold text-[15px] mb-2">State</div>
            <input type="text" onChange={(e)=> {setstate(e.target.value)}} value={state} className={`w-full px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color ${profileI4 === "error" ? "border-red-400" : ""}`} placeholder='Enter State name...' />
            <div className={`text-red-400 text-sm mt-2 ${profileI4 === "error" ? "flex" : "hidden"}`}>State Required</div>
          </div>

          </div>


         

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-3 mt-8">
          <div className="text-[#11047A]">
            <div className=" font-bold text-[15px] mb-2">City</div>
            <input type="text" onChange={(e)=> {setcity(e.target.value)}} value={city} className={`w-full px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color ${profileI5 === "error" ? "border-red-400" : ""}`} placeholder='Enter City name...' />
            <div className={`text-red-400 text-sm mt-2 ${profileI5 === "error" ? "flex" : "hidden"}`}>City Required</div>
          </div>


          <div className="text-[#11047A]">
            <div className=" font-bold text-[15px] mb-2">ZIP</div>
            <input type="text" onChange={(e)=> {setzip(e.target.value)}} value={zip} className={`w-full px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color ${profileI6 === "error" ? "border-red-400" : ""}`} placeholder='Enter ZIP name...' />
            <div className={`text-red-400 text-sm mt-2 ${profileI6 === "error" ? "flex" : "hidden"}`}>ZIP Required</div>
          </div>

          </div>




          <div className="mt-8 text-[#11047A]">
            <div className=" font-bold text-[15px] mb-2">Birthday</div>
            <label htmlFor='date' className={`relative cursor-pointer w-full flex items-center justify-between px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color ${profileI8 === "error" ? "border-red-400" : ""}`}>
               <div>{dateValue === "MM DD YYY" ? <div className='text-[#9CA3AF]'>{dateValue}</div> : new Date(dateValue).toDateString().split(' ').slice(1).join(' ')}</div>
               <img src='/images/calender.svg' className='w-[20px]' alt='calender' />
               <input
          type='date'
          className='absolute h-full top-0 opacity-0 left-0 w-full'
          id='date'
          onChange={(e) => {
            setdateValue(e.target.value);
          }}
        />
            </label>
            <div className={`text-red-400 text-sm mt-2 ${profileI8 === "error" ? "flex" : "hidden"}`}>Date Required</div>

          </div>



          <div className="text-[#11047A] mt-8">
            <div className=" font-bold text-[15px] mb-2">Phone Number</div>
            <input type="text" onChange={(e)=> {setnumber(e.target.value)}} value={number} className={`w-full px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color ${profileI7 === "error" ? "border-red-400" : ""}`} placeholder='Enter phone number...' />
            <div className={`text-red-400 text-sm mt-2 ${profileI7 === "error" ? "flex" : "hidden"}`}>Phone number Required</div>
          </div>


          <div className="mt-6 grid grid-cols-1 sm:flex items-center gap-3">
          <button onClick={saveChangesModalOpenProfile} className='px-5 py-3 sm:px-7 sm:py-4 rounded-xl bg-main-color text-white'>Save Change</button>
          <button onClick={resetChangesModalOpen} className='px-5 py-3 sm:px-7 sm:py-4 rounded-xl bg-[#FFE7D9] text-[#FF5C00]'>Reset Changes</button>
          </div>

        </div>

          </div>
          :
          show === "Password" 
          ?

          <div>
            <div className='flex items-center justify-between mb-5'>
            <div className='text-[19px] text-not-black font-bold '>Password</div>
            <button className='px-4 h-[40px] rounded-xl bg-white'><svg width="20" height="8" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="#0085FF"/></svg></button>
         </div>
        <div className="bg-white rounded-xl p-5 relative">

          

         <div className="text-[#11047A]">
            <div className="font-bold text-[15px] mb-2">Old Password</div>
            <input type="text" onChange={(e)=> {setoldPassword(e.target.value)}} value={oldPassword} className={`w-full px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color ${password1 === "error" ? "border-red-400" : ""}`} placeholder='Enter Old Password...' />
            <div className={`text-red-400 text-sm mt-2 ${password1 === "error" ? "flex" : "hidden"}`}>Old Password Required</div>
          </div>


          <div className="mt-8 text-[#11047A]">
            <div className=" font-bold text-[15px] mb-2">New Password</div>
            <input type="text" onChange={(e)=> {setnewPassword(e.target.value)}} value={newPassword} className={`w-full px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color ${password2 === "error" ? "border-red-400" : ""}`} placeholder='Enter New Password...' />
            <div className={`text-red-400 text-sm mt-2 ${password2 === "error" ? "flex" : "hidden"}`}>New Password Required</div>
          </div>


          <div className="mt-8 text-[#11047A]">
            <div className=" font-bold text-[15px] mb-2">Confirm Password</div>
            <input type="text" onChange={(e)=> {setConfirmPassword(e.target.value)}} value={ConfirmPassword} className={`w-full px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color ${password3 === "error" ? "border-red-400" : ""}`} placeholder='Enter Confirm Password...' />
            <div className={`text-red-400 text-sm mt-2 ${password3 === "error" ? "flex" : "hidden"}`}>Confirm Password Required</div>
          </div>


          <div className="mt-6 grid grid-cols-1 sm:flex items-center gap-3">
          <button onClick={saveChangesModalOpenPassword} className='px-5 py-3 sm:px-7 sm:py-4 rounded-xl bg-main-color text-white'>Update Password</button>
          <button onClick={resetChangesModalOpen} className='px-5 py-3 sm:px-7 sm:py-4 rounded-xl bg-[#FFE7D9] text-[#FF5C00]'>Reset Changes</button>
          </div>

        </div>
          </div>

          :

          show === "Payments"
          ?

          <div>
            <div className='flex items-center justify-between mb-5'>
            <div className='text-[19px] text-not-black font-bold '>Payments</div>
            <button className='px-4 h-[40px] rounded-xl bg-white'><svg width="20" height="8" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="#0085FF"/></svg></button>
         </div>
        <div className="bg-white rounded-xl p-5 relative pb-[150px] lg2:min-h-[calc(100vh-205px)]">

          
        <RadioGroup value={plan} onChange={setPlan} className="flex flex-col gap-4">
      <RadioGroup.Option value="bank of america">
        {({ checked }) => (
          <div className={`relative cursor-pointer w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white border-2 ${checked ? "border-main-color" : "border-[#F5F5F7]"}`}>
            <div>
              <div className='hidden sm2:block text-[17px] font-bold mb-6 sm2:mb-1 text-[#11047A]'>PKNF**********81569</div>
              <div className='sm2:hidden text-[17px] font-bold mb-6 sm2:mb-1 text-[#11047A]'>***815</div>
              <div className="flex items-center gap-6 sm2:gap-[60px]">
                <div className="text-[#11047A] text-opacity-70 text-[15px]">Azhar Dwi</div>
                <div className="text-[#11047A] text-opacity-70 text-[15px]">BANK OF AMERICA</div>
              </div>
            </div>
          <div className="absolute top-3 right-3 sm2:relative sm2:top-auto sm2:right-auto flex items-center gap-2">
          <button className='px-5 py-2 sm4:py-2.5 rounded-xl text-[14px] sm2:text-[15px] bg-transparent-main-color text-main-color'>Default</button>
          <button onClick={()=> {setdeletePaymentMethod(true)}} className='bg-[#FF21211A] rounded-lg px-2.5 py-[5px] sm4:py-[11px] flex items-center justify-center'><svg width="18" height="20" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9059 3.36934C15.2301 3.36934 15.5 3.63851 15.5 3.981V4.29767C15.5 4.63183 15.2301 4.90933 14.9059 4.90933H1.09488C0.769883 4.90933 0.5 4.63183 0.5 4.29767V3.981C0.5 3.63851 0.769883 3.36934 1.09488 3.36934H3.52464C4.01821 3.36934 4.44775 3.01851 4.55879 2.52352L4.68603 1.95519C4.88378 1.18103 5.53458 0.66687 6.27939 0.66687H9.72061C10.4573 0.66687 11.1154 1.18103 11.3059 1.91436L11.442 2.52268C11.5522 3.01851 11.9818 3.36934 12.4762 3.36934H14.9059ZM13.6718 14.9449C13.9255 12.5808 14.3696 6.9642 14.3696 6.90753C14.3858 6.73586 14.3299 6.57337 14.2188 6.44253C14.0997 6.32004 13.949 6.24754 13.7828 6.24754H2.22403C2.05708 6.24754 1.89823 6.32004 1.788 6.44253C1.67616 6.57337 1.62105 6.73586 1.62915 6.90753C1.63064 6.91794 1.64658 7.11578 1.67322 7.44654C1.79158 8.9159 2.12124 13.0084 2.33426 14.9449C2.485 16.3716 3.42108 17.2683 4.77698 17.3008C5.82329 17.3249 6.9012 17.3333 8.00343 17.3333C9.04163 17.3333 10.096 17.3249 11.1748 17.3008C12.5777 17.2766 13.5129 16.3958 13.6718 14.9449Z" fill="#FF2121"/></svg></button>
          </div>

          </div>
        )}
      </RadioGroup.Option>


      <RadioGroup.Option value="times bank">
        {({ checked }) => (
          <div className={`relative cursor-pointer w-full flex items-center justify-between px-4 py-3 rounded-lg bg-white border-2 ${checked ? "border-main-color" : "border-[#F5F5F7]"}`}>
            <div>
              <div className='hidden sm2:block text-[17px] font-bold mb-6 sm2:mb-1 text-[#11047A]'>PKNF**********81569</div>
              <div className='sm2:hidden text-[17px] font-bold mb-6 sm2:mb-1 text-[#11047A]'>***815</div>
              <div className="flex items-center gap-6 sm2:gap-[60px]">
                <div className="text-[#11047A] text-opacity-70 text-[15px]">JHON DOE</div>
                <div className="text-[#11047A] text-opacity-70 text-[15px]">TIMES BANK</div>
              </div>
            </div>
            <div className="absolute top-3 right-3 sm2:relative sm2:top-auto sm2:right-auto flex items-center gap-2">
            <button className='px-5 py-2 sm4:py-2.5 rounded-xl text-[14px] sm2:text-[15px] text-transparent-main-color bg-main-color'>Make as Default</button>
            <button onClick={()=> {setdeletePaymentMethod(true)}} className='bg-[#FF21211A] rounded-lg px-2.5 py-[5px] sm4:py-[11px] flex items-center justify-center'><svg width="18" height="20" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9059 3.36934C15.2301 3.36934 15.5 3.63851 15.5 3.981V4.29767C15.5 4.63183 15.2301 4.90933 14.9059 4.90933H1.09488C0.769883 4.90933 0.5 4.63183 0.5 4.29767V3.981C0.5 3.63851 0.769883 3.36934 1.09488 3.36934H3.52464C4.01821 3.36934 4.44775 3.01851 4.55879 2.52352L4.68603 1.95519C4.88378 1.18103 5.53458 0.66687 6.27939 0.66687H9.72061C10.4573 0.66687 11.1154 1.18103 11.3059 1.91436L11.442 2.52268C11.5522 3.01851 11.9818 3.36934 12.4762 3.36934H14.9059ZM13.6718 14.9449C13.9255 12.5808 14.3696 6.9642 14.3696 6.90753C14.3858 6.73586 14.3299 6.57337 14.2188 6.44253C14.0997 6.32004 13.949 6.24754 13.7828 6.24754H2.22403C2.05708 6.24754 1.89823 6.32004 1.788 6.44253C1.67616 6.57337 1.62105 6.73586 1.62915 6.90753C1.63064 6.91794 1.64658 7.11578 1.67322 7.44654C1.79158 8.9159 2.12124 13.0084 2.33426 14.9449C2.485 16.3716 3.42108 17.2683 4.77698 17.3008C5.82329 17.3249 6.9012 17.3333 8.00343 17.3333C9.04163 17.3333 10.096 17.3249 11.1748 17.3008C12.5777 17.2766 13.5129 16.3958 13.6718 14.9449Z" fill="#FF2121"/></svg></button>
          </div>
          </div>
        )}
      </RadioGroup.Option>
     
    </RadioGroup>

        <button onClick={openModal} className='mx-auto flex items-center flex-row-reverse gap-1.5 mt-6 px-5 py-3 sm:px-7 sm:py-4 rounded-xl bg-main-color text-white'>Add new Bank <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12H18" stroke="white" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="round"/><path d="M12 18V6" stroke="white" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="round"/></svg></button>


        <button className='absolute bottom-4 left-4 mx-auto flex items-center flex-row-reverse gap-1.5 mt-6 px-5 py-3 sm:px-7 sm:py-4 rounded-xl bg-main-color text-white'>Save Changes</button>


        </div>
          </div>

          :

          ""
          
         }
        </div>

      </div>



      <Transition appear show={isOpen} as={Fragment}>
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
                  <div className='flex items-center justify-between mb-5'>
                  <div className='text-[19px] text-not-black font-bold '>Add Account/Bank</div>
                  <button onClick={closeModal} className="sm:absolute sm:top-7 sm:right-7"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.433246 0.433238C1.01091 -0.144413 1.94761 -0.144413 2.52527 0.433238L6.5 4.4079L10.4747 0.433238C11.0524 -0.144413 11.9891 -0.144413 12.5668 0.433238C13.1444 1.01089 13.1444 1.94758 12.5668 2.52523L8.59202 6.50011L12.5668 10.4748C13.1444 11.0524 13.1444 11.9891 12.5668 12.5668C11.9891 13.1444 11.0524 13.1444 10.4747 12.5668L6.5 8.5921L2.52527 12.5668C1.94761 13.1444 1.01091 13.1444 0.433246 12.5668C-0.144415 11.9891 -0.144415 11.0524 0.433246 10.4748L4.40798 6.50011L0.433246 2.52544C-0.144415 1.94779 -0.144415 1.0111 0.433246 0.433449V0.433238Z" fill="#FF3A3A"/></svg></button>
                  </div>
                 </div>

                 <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
                 <div className=" text-[#11047A]">
                  <div className="font-bold text-[15px] mb-2">Full Name</div>
                  <input type="text" onChange={(e)=> {setaccountNameValue(e.target.value)}} value={accountNameValue} className={`w-full px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color ${accountNameI1 === "error" ? "border-red-400" : ""}`} placeholder='Full Name...' />
                  <div className={`text-red-400 text-sm mt-2 ${accountNameI1 === "error" ? "flex" : "hidden"}`}>Full Name Required</div>
                 </div>

                 <div className="text-[#11047A]">
                  <div className=" font-bold text-[15px] mb-2">Select Bank</div>
                  <div className='cursor-pointer w-full flex items-center justify-between px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color'>
                  <div className='text-[#9CA3AF]'>Select Bank</div>
                  <div><svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.833375L8 8.33337L15.5 0.833375" stroke="#11047A" stroke-width="1.2"/></svg></div>
                  </div>
                 </div>

                 </div> 


                 <div className='grid grid-cols-1 md:grid-cols-[1fr,300px] gap-5 mt-8'>
                 <div className=" text-[#11047A]">
                  <div className="font-bold text-[15px] mb-2">Account Number</div>
                  <input type="text" onChange={(e)=> {setaccountNumberValue(e.target.value)}} value={accountNumberValue} className={`w-full px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color ${accountNumberI1 === "error" ? "border-red-400" : ""}`} placeholder='Account Number...' />
                  <div className={`text-red-400 text-sm mt-2 ${accountNumberI1 === "error" ? "flex" : "hidden"}`}>Account Number Required</div>
                 </div>



                 <div className=" text-[#11047A]">
                  <div className="font-bold text-[15px] mb-2">Routing Number</div>
                  <input type="text" onChange={(e)=> {setroutingNumberValue(e.target.value)}} value={routingNumberValue} className={`w-full px-4 py-3 rounded-lg border border-[#F5F5F7] outline-main-color focus:bg-transparent-main-color ${routingNumberI1 === "error" ? "border-red-400" : ""}`} placeholder='Routing Number...' />
                  <div className={`text-red-400 text-sm mt-2 ${routingNumberI1 === "error" ? "flex" : "hidden"}`}>Routing Required</div>
                 </div>                 

                 </div> 


                <div className="flex items-center justify-center mb-3">
                <button onClick={validateBankDetails} className='mt-6 px-4 sm7:px-7 text-[15px] sm7:text-base py-4 rounded-xl bg-main-color text-white'>Save Payment Method</button>
                </div>



                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>












      <Transition appear show={saveChanges} as={Fragment}>
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
                <Dialog.Panel className='relative bg-white w-full max-w-[400px] transform overflow-hidden rounded-2xl bg-sooth p-5 text-left align-middle shadow-xl transition-all'>
                 
                 <div>
                  <div className='flex items-center justify-between mb-5'>
                  <div className='text-[17px] text-[#11047A] font-bold '>Save Changes Now?</div>
                  <button onClick={closeModal} className="sm:absolute sm:top-7 sm:right-7"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.433246 0.433238C1.01091 -0.144413 1.94761 -0.144413 2.52527 0.433238L6.5 4.4079L10.4747 0.433238C11.0524 -0.144413 11.9891 -0.144413 12.5668 0.433238C13.1444 1.01089 13.1444 1.94758 12.5668 2.52523L8.59202 6.50011L12.5668 10.4748C13.1444 11.0524 13.1444 11.9891 12.5668 12.5668C11.9891 13.1444 11.0524 13.1444 10.4747 12.5668L6.5 8.5921L2.52527 12.5668C1.94761 13.1444 1.01091 13.1444 0.433246 12.5668C-0.144415 11.9891 -0.144415 11.0524 0.433246 10.4748L4.40798 6.50011L0.433246 2.52544C-0.144415 1.94779 -0.144415 1.0111 0.433246 0.433449V0.433238Z" fill="#FF3A3A"/></svg></button>
                  </div>
                 </div>

                   <div className='text-[#11047A]'>Yes I’m sure to save changes now.</div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
                    <button onClick={closeModal} className='py-3 sm:py-4 rounded-xl bg-[#E0E0E0] text-[#5B5B5B]'>Cancel</button>
                    <button className='py-3 sm:py-4 rounded-xl bg-main-color text-white'>Save Changes</button>
                   </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>







      <Transition appear show={resetChanges} as={Fragment}>
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
                <Dialog.Panel className='relative bg-white w-full max-w-[400px] transform overflow-hidden rounded-2xl bg-sooth p-5 text-left align-middle shadow-xl transition-all'>
                 
                 <div>
                  <div className='flex items-center justify-between mb-5'>
                  <div className='text-[17px] text-[#11047A] font-bold '>Are you sure to reset changes?</div>
                  <button onClick={closeModal} className="sm:absolute sm:top-7 sm:right-7"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.433246 0.433238C1.01091 -0.144413 1.94761 -0.144413 2.52527 0.433238L6.5 4.4079L10.4747 0.433238C11.0524 -0.144413 11.9891 -0.144413 12.5668 0.433238C13.1444 1.01089 13.1444 1.94758 12.5668 2.52523L8.59202 6.50011L12.5668 10.4748C13.1444 11.0524 13.1444 11.9891 12.5668 12.5668C11.9891 13.1444 11.0524 13.1444 10.4747 12.5668L6.5 8.5921L2.52527 12.5668C1.94761 13.1444 1.01091 13.1444 0.433246 12.5668C-0.144415 11.9891 -0.144415 11.0524 0.433246 10.4748L4.40798 6.50011L0.433246 2.52544C-0.144415 1.94779 -0.144415 1.0111 0.433246 0.433449V0.433238Z" fill="#FF3A3A"/></svg></button>
                  </div>
                 </div>

                   <div className='text-[#11047A]'>Yes I’m sure to reset changes now.</div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
                    <button onClick={closeModal} className='py-3 sm:py-4 rounded-xl bg-main-color text-white'>Cancel</button>
                    <button className='py-3 sm:py-4 rounded-xl bg-[#FF3A3A] text-white'>Reset Changes</button>
                   </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>



      <Transition appear show={deletePaymentMethod} as={Fragment}>
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
                  <div className='flex items-center justify-between mb-5'>
                  <div className='text-[17px] text-[#11047A] font-bold '>Are you sure to Delete Payment method?</div>
                  <button onClick={closeModal} className="sm:absolute sm:top-7 sm:right-7"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.433246 0.433238C1.01091 -0.144413 1.94761 -0.144413 2.52527 0.433238L6.5 4.4079L10.4747 0.433238C11.0524 -0.144413 11.9891 -0.144413 12.5668 0.433238C13.1444 1.01089 13.1444 1.94758 12.5668 2.52523L8.59202 6.50011L12.5668 10.4748C13.1444 11.0524 13.1444 11.9891 12.5668 12.5668C11.9891 13.1444 11.0524 13.1444 10.4747 12.5668L6.5 8.5921L2.52527 12.5668C1.94761 13.1444 1.01091 13.1444 0.433246 12.5668C-0.144415 11.9891 -0.144415 11.0524 0.433246 10.4748L4.40798 6.50011L0.433246 2.52544C-0.144415 1.94779 -0.144415 1.0111 0.433246 0.433449V0.433238Z" fill="#FF3A3A"/></svg></button>
                  </div>
                 </div>

                   <div className='text-[#11047A]'>Yes I want to delete the payment method which is:<br/><div className='font-bold text-[17px]'>“PKNF**********81569”</div></div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6">
                    <button onClick={closeModal} className='py-3 sm:py-4 rounded-xl bg-main-color text-white'>Cancel</button>
                    <button className='py-3 sm:py-4 rounded-xl bg-[#FF3A3A] text-white'>Delete Now</button>
                   </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>




      <AddNewAddress newaddress={newaddress} setnewaddress={setnewaddress}/>



      </div>
      <div className='hidden lg2:block'><BuySellSidebar/></div>
    </div>
    </>
  )
}

export default Settings