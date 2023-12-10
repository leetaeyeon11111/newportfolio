'use client'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center max-w-screen-2xl m-auto py-5 px-8 relative bg-gray-800">
        <div>
          <Link className="text-white text-2xl font-bold" href="/">
            Portfolio
          </Link>
        </div>

        <nav className="lg:block hidden">
          <ul className="flex gap-5 text-white">
            <li>
              <Link
                className="hover:text-white ease-in-out duration-200"
                href="/"
              >
                메인화면
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-white ease-in-out duration-200"
                href="/courses"
              >
                프로젝트
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
