import Image from 'next/image'
import { IoLogoJavascript } from 'react-icons/io5'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaHtml5 } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { SiMongodb } from 'react-icons/si'
import { FaPython } from 'react-icons/fa6'

const WhyChooseUs = () => {
  return (
    <>
      <section className="flex max-w-screen-2xl m-auto px-8 py-20 flex-col lg:flex-row text-white justify-center overflow-x-hidden h-full">
        {/* Right-side content with text and icons */}
        <div
          data-aos="fade-down"
          className="bg-gray-800 flex flex-col justify-center items-start lg:py-0 py-6 lg:px-14 px-2 w-full lg:w-2/4 gap-6 -mt-20 lg:-mt-0 h-full"
          style={{ height: '736px' }} // 높이 값을 조절하세요
        >
          <div>
            {/* Title */}
            <h2 className="text-[1.6rem] sm:text-[1.7rem] lg:text-[1.8rem] xl:text-[1.9rem] 2xl:text-[2rem] leading-10 duration-200 text-white ">
              소개
            </h2>
            {/* Description */}
            <p className="text-[#ffffff80] mt-1">
              중부대학교 정보보호학과 2학년 재학 중인 이태연입니다.
            </p>
            <p className="text-[#ffffff80] mt-1">
              웹서버 보안 프로그래밍을 수강하면서 배우게 된 것과 앞으로 제가
              공부할 것입니다.
            </p>
          </div>

          {/* Icon and text sections */}
          <div className="flex gap-5 ">
            {/* Icon and text section 1 */}
            <div className="flex flex-col gap-1">
              {/* Icon */}
              <IoLogoJavascript className="text-6xl" />
              {/* Icon title */}
              <h3 className="text-base text-white">Javascript</h3>
              {/* Icon description */}
              <p className="text-[#ffffff80]">
                It enables interactive and dynamic behavior within web browsers
                and can be used both on the client side (browser) and server
                side.
              </p>
            </div>

            {/* Icon and text section 2 */}
            <div className="flex flex-col gap-1">
              {/* Icon */}
              <BiLogoTypescript className="text-6xl" />
              {/* Icon title */}
              <h3 className="text-base text-white">Typescript</h3>
              {/* Icon description */}
              <p className="text-[#ffffff80]">
                It allows developers to define types for variables, function
                parameters, and return values, enhancing code clarity and
                catching errors during development.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              {/* Icon */}
              <FaHtml5 className="text-6xl" />
              {/* Icon title */}
              <h3 className="text-base text-white">HTML</h3>
              {/* Icon description */}
              <p className="text-[#ffffff80]">
                It consists of a set of elements and tags that define the
                structure of a web page, specifying headings, paragraphs, links,
                images, and other elements.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              {/* Icon */}
              <IoLogoCss3 className="text-6xl" />
              {/* Icon title */}
              <h3 className="text-base text-white">CSS</h3>
              {/* Icon description */}
              <p className="text-[#ffffff80]">
                CSS defines how elements should be displayed on a web page,
                controlling aspects such as layout, colors, fonts, and spacing.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              {/* Icon */}
              <SiMongodb className="text-6xl" />
              {/* Icon title */}
              <h3 className="text-base text-white">DB</h3>
              {/* Icon description */}
              <p className="text-[#ffffff80]">
                It uses a document data model with flexible, schema-less
                documents, making it suitable for a variety of applications.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              {/* Icon */}
              <FaPython className="text-6xl" />
              {/* Icon title */}
              <h3 className="text-base text-white">PYTHON</h3>
              {/* Icon description */}
              <p className="text-[#ffffff80]">
                It supports multiple programming paradigms, including
                procedural, object-oriented, and functional programming, making
                it suitable for various applications.
              </p>
            </div>
          </div>

          {/* Button component */}
        </div>
        <div data-aos="fade-down" className="">
          {/* Image component */}
          <Image src="/images/jijiji.png" width={648} height={800} />
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs
