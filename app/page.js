'use client'

import Hero from './components/hero/Hero'
import WhyChooseUs from './components/whyChooseUs/WhyChooseUs'

export default function Home() {
  return (
    <>
      <Hero
        title="안녕하세요, 중부대학교 정보보호학과 
        이태연입니다."
        bgColor="#ffffff"
        imageUrl="/images/eee.jpg"
      />

      <WhyChooseUs />
    </>
  )
}
