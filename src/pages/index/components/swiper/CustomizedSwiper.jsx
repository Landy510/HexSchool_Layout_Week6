import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle'; // 必須要存在，輪播才會正常 work
import Swiper from 'swiper';

const CustomizedSwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".mySwiper", {
      speed: 3000,
      slidesPerView: "auto", // 參考解答，解決內文折行問題
      autoplay: {
        delay: 0, // 參考解答，解決 slide 與 slide 之間會有一小段時間停滯的問題
      },
      loop: true
    })
  }, [])

  return (
    <div className="swiper mySwiper" ref={swiperRef}>
      <div className="swiper-wrapper">
        <div className="swiper-slide text-warning bg-dark fs-2 py-4 py-5">活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・</div>
        <div className="swiper-slide text-warning bg-dark fs-2 py-4 py-5">活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・</div>
        <div className="swiper-slide text-warning bg-dark fs-2 py-4 py-5">活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・</div>
        <div className="swiper-slide text-warning bg-dark fs-2 py-4 py-5">活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・</div>
        <div className="swiper-slide text-warning bg-dark fs-2 py-4 py-5">活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・活動集錦・ALBUMS・</div>
      </div>
    </div>

  )
}

export default CustomizedSwiper;