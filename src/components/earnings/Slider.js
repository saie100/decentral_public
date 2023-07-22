import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';

const Slider = ({paymentSelect, setpaymentSelect}) => {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
  
  
    const [addClass, setaddClass] = React.useState('');

    const handleSlideChange = (swiper) => {
      const activeIndex = swiper.activeIndex;
      if(activeIndex === 0){
        setpaymentSelect("PayPal")
      }

      if(activeIndex === 1){
        setpaymentSelect("Venmo")
      }

      if(activeIndex === 2){
        setpaymentSelect("G Pay")
      }

      if(activeIndex === 3){
        setpaymentSelect("Card")
      }

      if(activeIndex === 4){
        setpaymentSelect("Zelle")
      }

      if(activeIndex === 5){
        setpaymentSelect("Cash App")
      }

      // if(activeIndex === 6){
      //   setpaymentSelect("Bank")
      // }
    };
  
    React.useEffect(() => {
      setTimeout(() => {
        setaddClass('z-[99]');
      }, 1000);
    }, []);
  
  return (
    <div className='relative max-w-full overflow-hidden pt-10'>
      
        <Swiper
          slidesPerView={1.8}
          spaceBetween={5}
          initialSlide={3}
          centeredSlides={true}
          pagination={{ clickable: true }}
          rewind={true}
          onSlideChange={handleSlideChange}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
         
          modules={[Navigation, Pagination]}
          className='relative w-full'
        >

              <SwiperSlide
                className='w-full'
              >
                <button className={`relative w-full flex items-center justify-center flex-col gap-2.5 px-2 py-5 bg-white rounded-[8px] border ${paymentSelect === "PayPal" ? "custom-card-shadow border-[#0085FF33] border-opacity-20 min-h-[180px] min max-h-[180px] -translate-y-2.5" : "border-[#EEEEEE] min-h-[150px] min max-h-[150px]"}`}>
                    <img src="/images/paypal.svg" className='w-[60px]' alt="paypal" />
                    <div className={`text-[15px] ${paymentSelect === "PayPal" ? "text-main-color font-[600]" : "text-black text-opacity-50"}`}>PayPal</div>
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-[80px] rounded-t-md bg-main-color ${paymentSelect === "PayPal" ? "flex" : "hidden"}`}></div>
                </button>
              </SwiperSlide>



              <SwiperSlide
                className='w-full'
              >
                <button className={`relative w-full flex items-center justify-center flex-col gap-2.5 px-2 py-5 bg-white rounded-[8px] border ${paymentSelect === "Venmo" ? "custom-card-shadow border-[#0085FF33] border-opacity-20 min-h-[180px] min max-h-[180px] -translate-y-2.5" : "border-[#EEEEEE] min-h-[150px] min max-h-[150px]"}`}>
                    <img src="/images/venmo.svg" className='w-[60px]' alt="venmo" />
                    <div className={`text-[15px] ${paymentSelect === "Venmo" ? "text-main-color font-[600]" : "text-black text-opacity-50"}`}>Venmo</div>
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-[80px] rounded-t-md bg-main-color ${paymentSelect === "Venmo" ? "flex" : "hidden"}`}></div>
                </button>
              </SwiperSlide>


              <SwiperSlide
                className='w-full'
              >
                <button className={`relative w-full flex items-center justify-center flex-col gap-2.5 px-2 py-5 bg-white rounded-[8px] border ${paymentSelect === "G Pay" ? "custom-card-shadow border-[#0085FF33] border-opacity-20 min-h-[180px] min max-h-[180px] -translate-y-2.5" : "border-[#EEEEEE] min-h-[150px] min max-h-[150px]"}`}>
                       <img src="/images/gpay.svg" alt="G Pay" />
                       <div className={`text-[15px] translate-y-2.5 ${paymentSelect === "G Pay" ? "text-main-color font-[600]" : "text-black text-opacity-50"}`}>Google Pay</div>
                       <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-[80px] rounded-t-md bg-main-color ${paymentSelect === "G Pay" ? "flex" : "hidden"}`}></div>
                </button>
              </SwiperSlide>

              <SwiperSlide
                className='w-full'
              >
                <button className={`relative w-full flex items-center justify-center flex-col gap-2.5 px-2 py-5 bg-white rounded-[8px] border ${paymentSelect === "Card" ? "custom-card-shadow border-[#0085FF33] border-opacity-20 min-h-[180px] min max-h-[180px] -translate-y-2.5" : "border-[#EEEEEE] min-h-[150px] min max-h-[150px]"}`}>
                       <img src="/images/card.svg" alt="card" />
                       <div className={`text-[15px] ${paymentSelect === "Card" ? "text-main-color font-[600]" : "text-black text-opacity-50"}`}>Credit/ Debit Card</div>
                       <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-[80px] rounded-t-md bg-main-color ${paymentSelect === "Card" ? "flex" : "hidden"}`}></div>
                </button>
              </SwiperSlide>


              <SwiperSlide
                className='w-full'
              >
                <button className={`relative w-full flex items-center justify-center flex-col gap-2.5 px-2 py-5 bg-white rounded-[8px] border ${paymentSelect === "Zelle" ? "custom-card-shadow border-[#0085FF33] border-opacity-20 min-h-[180px] min max-h-[180px] -translate-y-2.5" : "border-[#EEEEEE] min-h-[150px] min max-h-[150px]"}`}>
                       <img src="/images/zelle.svg" className='w-[70px]' alt="zelle" />
                       <div className={`text-[15px] -mt-2 ${paymentSelect === "Zelle" ? "text-main-color font-[600]" : "text-black text-opacity-50"}`}>Zelle</div>
                       <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-[80px] rounded-t-md bg-main-color ${paymentSelect === "Zelle" ? "flex" : "hidden"}`}></div>
                </button>
              </SwiperSlide>



              <SwiperSlide
                className='w-full'
              >
                 <button className={`relative w-full flex items-center justify-center flex-col gap-2.5 px-2 py-5 bg-white rounded-[8px] border ${paymentSelect === "Cash App" ? "custom-card-shadow border-[#0085FF33] border-opacity-20 min-h-[180px] min max-h-[180px] -translate-y-2.5" : "border-[#EEEEEE] min-h-[150px] min max-h-[150px]"}`}>
                       <img src="/images/cashApp.svg" alt="cashApp" />
                       <div className={`text-[15px] ${paymentSelect === "Cash App" ? "text-main-color font-[600]" : "text-black text-opacity-50"}`}>Cash App</div>
                       <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-[80px] rounded-t-md bg-main-color ${paymentSelect === "Cash App" ? "flex" : "hidden"}`}></div>
                </button>
              </SwiperSlide>

              <SwiperSlide
                className='w-full'
              >
                    {/* If you want it to be clickable uncomment the bank's "if else" in the "handleSlideChange" function*/}
                <button className={`opacity-60 cursor-default relative w-full flex items-center justify-center flex-col gap-2.5 px-2 py-5 bg-white rounded-[8px] border ${paymentSelect === "Bank" ? "custom-card-shadow border-[#0085FF33] border-opacity-20 min-h-[180px] min max-h-[180px] -translate-y-2.5" : "border-[#EEEEEE] min-h-[150px] min max-h-[150px]"}`}>
                       <img src="/images/bank.png" className='w-[50px]' alt="Bank" />
                       <div className={`text-[15px] ${paymentSelect === "Bank" ? "text-main-color font-[600]" : "text-black text-opacity-50"}`}>Bank Transfer</div>
                       <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-[80px] rounded-t-md bg-main-color ${paymentSelect === "Bank" ? "flex" : "hidden"}`}></div>
                </button>
              </SwiperSlide>

          <div ref={navigationPrevRef} className='z-30 absolute top-1/2 left-0 -translate-y-1/2 hidden items-center justify-start w-[20px] 2sm:w-[80px] h-full cursor-pointer'><svg width="20" height="30" viewBox="0 0 31 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 42L4.00003 23L27 4" stroke="#4683B6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div ref={navigationNextRef} className='z-30 absolute top-1/2 right-0 -translate-y-1/2 hidden items-center justify-end w-[20px] 2sm:w-[80px] h-full cursor-pointer'><svg width="20" height="30" viewBox="0 0 31 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4L27 23L4 42" stroke="#4683B6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
        </Swiper>

    </div>
  )
}

export default Slider