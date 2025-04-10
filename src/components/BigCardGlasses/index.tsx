import { Poppins } from 'next/font/google'
import Image from 'next/image'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export default function BigCardGlasses({
  title,
  linkImgGlasses,
  linkImgEnterprise,
  modelo,
  collection,
}: {
  title: string
  linkImgGlasses: string,
  modelo: string,
  collection: string,
  linkImgEnterprise: string
}) {
  return (
    <div className={`bg-white p-5 w-[350px] h-[300px] rounded-[8px] ${poppins.className}`}>
      <div>
        <div className="flex justify-center">
          <Image src={linkImgGlasses} alt={title} width={270} height={270} className="w-[270px]" />
        </div>
        <div className="flex justify-end mt-7 mb-2">
          <span className="text-[14px] text-black tracking-[0.09em] font-[300]">IMAGEM MERAMENTE ILUSTRATIVA</span>
        </div>
        <div className="w-full h-[1px] bg-black my-2"></div>
      </div>
      <div className="mt-6">
        <h3 className="text-black tracking-[0.1em] font-[400]">MODELO: {modelo}</h3>
        <div className="flex justify-between items-center">
          <h3 className="text-[14px] text-black self-end tracking-[0.09em] font-[300]">
            COLEÇÃO <span className="font-bold">{collection}</span>
          </h3>
          <Image
            src={linkImgEnterprise}
            alt={title}
            width={120}
            height={120}
            className="w-[120px]"
          />
        </div>
      </div>
    </div>
  )
}