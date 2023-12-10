import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className=" bg-[#efefef]">
      <div className="max-w-screen-2xl m-auto py-8 px-8">
        <div className="flex justify-between lg:flex-row flex-col gap-12 lg:gap-0">
          {/* About Stodeo */}
          <div>
            <div className="mb-12">
              <h3 className="text-[#1a1a1a] uppercase mb-3">About portfolio</h3>
              <p className="max-w-md">Hello, This is main site</p>
            </div>
            <div>
              {/* Social Icons */}
              <h3 className="text-[#2e2e2f] uppercase mb-3">Connect</h3>
              <div className="flex gap-2">
                <FaGithub className="shadow-xl bg-[#cccccc] text-4xl text-[#fffffff5] rounded-full p-2.5 hover:bg-[#343435] hover:text-white duration-300 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-[#2a2a2b] uppercase mb-3">패키지 다운</h3>
            <ul className="space-y-3">
              <li className="relative pl-2 cursor-pointer group">
                react-icons
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#2a2a2b]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                autoprefixer
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#313131]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                postcss
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#303131]  group-hover:scale-y-100"></span>
              </li>
              <li className="relative pl-2 cursor-pointer group">
                uuid
                <span className="absolute bottom-0 left-0 w-[3px] h-full bg-transparent transform scale-y-0 transition-transform duration-200 group-hover:bg-[#282829]  group-hover:scale-y-100"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer Copyright */}
      <div className="text-center py-8 flex flex-col bg-gray-600 text-white">
        <span>
          2023 This is a portfolio{' '}
          <span className="text-[#303131] font-bold"> taeyeon</span>
        </span>
      </div>
    </section>
  )
}

export default Footer
