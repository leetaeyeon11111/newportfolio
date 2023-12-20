'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = ({ pageName, title, bgColor = '#f8f9fa', imageUrl }) => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      offset: 100, // For reverse effect
      duration: 1000,
    })
  }, [])
  return (
    <>
      <section
        className={`px-8 text-left m-auto flex justify-start items-center flex-col sm:flex-row py-40 gap-3 bg-[${bgColor}]`}
      >
        <div className="flex-1">
          <span
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-[#50b4a6]"
          >
            {pageName}
          </span>

          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="max-w-2xl text-[1.8rem] sm:text-[2rem] lg:text-[2.2rem] xl:text-[2.4rem] 2xl:text-[2.5rem] leading-10 duration-200"
          >
            {title}
          </h1>

          <p data-aos="fade-up" data-aos-duration="1000" className="max-w-xl">
            웹서버 보안 프로그래밍
          </p>

          <button
            data-aos="fade-up"
            data-aos-duration="1200"
            className="px-8 py-2 mt-4 text-white bg-[#0a0a0a] rounded-full hover:bg-[#040404] duration-300 "
          >
            <Link href="https://github.com/leetaeyeon11111">
              leetaeyeon11111 Git Hub page
            </Link>
          </button>
          <button
            data-aos="fade-up"
            data-aos-duration="1200"
            className="px-8 py-2 mt-4 ml-3 text-white bg-[#45ce63] rounded-full hover:bg-[#65d18e] duration-300 "
          >
            <Link href="https://blog.naver.com/hahaha2662">NAVER Blog</Link>
          </button>
        </div>
        {imageUrl && (
          <img
            data-aos="fade-left"
            data-aos-duration="800"
            src={imageUrl}
            alt="Profile"
            className="rounded-lg"
            style={{
              float: 'left', // 왼쪽으로 이동
              marginRight: '1px', // 원하는 만큼 음수값으로 조절 (예: -5px)
              width: '500px', // 가로 크기 조절
              height: '500px', // 세로 크기 조절
            }}
          />
        )}
      </section>
    </>
  )
}

export default Hero
