import { Poppins } from 'next/font/google'
import Image from 'next/image'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export default function SmallCardGlasses({
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
    <div className={`bg-white p-5 w-[250px] h-[212px] border-[1px] border-[#0000006B] rounded-[4px] ${poppins.className}`}>
      <div>
        <div className="flex justify-center">
          <Image src={linkImgGlasses} alt={title} width={150} height={150} className="w-[150px]" />
        </div>
        <div className="flex justify-end mt-7 mb-2">
          <span className="text-[9px] text-black tracking-[0.04em] font-[300]">IMAGEM MERAMENTE ILUSTRATIVA</span>
        </div>
        <div className="w-full h-[1px] bg-[#414859] my-2"></div>
      </div>
      <div className="mt-4">
        <h3 className="text-black tracking-[0.1em] font-[400] text-[10px]">MODELO: {modelo}</h3>
        <div className="flex justify-between items-center mt-4">
          <h3 className="text-[10px] text-black self-end tracking-[0.09em] font-[300]">
            COLEÇÃO {collection}
          </h3>
          <Image
            src={linkImgEnterprise}
            alt={title}
            width={70}
            height={70}
            className="w-[70px]"
          />
        </div>
      </div>
    </div>
  )
}