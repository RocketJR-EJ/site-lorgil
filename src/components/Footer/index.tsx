import Image from 'next/image'

export default function Footer() {

  return (
    <footer className="w-full font-prompt font-normal">
      <div className="bg-[#FF2A2A] text-white py-2 px-14">
        <div className="max-w-6xl flex flex-col md:items-start items-center gap-1 md:gap-4">
          <div className="text-center md:text-left mb-2 md:mb-4 md:-ml-4">
            <Image
              src="/img/ImgsSection6/lorgil-footer.svg"
              alt="Logo L'orgil Ótica"
              width={130}
              height={52}
              className="object-contain inline-block md:inline"
            />
          </div>
          <div className="text-center md:text-left text-xs flex flex-col md:flex-row gap-2 md:gap-6">
            <span>Privacy Policy</span>
            <span>Terms Of Service</span>
            <span>2025 Rocket Jr All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}