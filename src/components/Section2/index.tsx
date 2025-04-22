import SmallCardGlasses from '../SmallCardGlasses'
import Image from 'next/image'

const mormaiGlasses = [
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection2/mormai-agra.svg",
    modelo: "M6117A1451",
    collection: "AGRA",
    linkImgEnterprise: "/img/Enterprises/mormaii.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection2/mormai-ancara2.svg",
    modelo: "M6142DH95",
    collection: "ANCARA 2",
    linkImgEnterprise: "/img/Enterprises/mormaii.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection2/mormai-angel.svg",
    modelo: "M6079AA35",
    collection: "AGEL",
    linkImgEnterprise: "/img/Enterprises/mormaii.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection2/mormai-asana.svg",
    modelo: "M6053A1452",
    collection: "ASANA",
    linkImgEnterprise: "/img/Enterprises/mormaii.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection2/mormai-hover.svg",
    modelo: "M6160A8558",
    collection: "HOVER",
    linkImgEnterprise: "/img/Enterprises/mormaii.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection2/M6071ABC5.png",
    modelo: "M6071ABC5",
    collection: "SWAP 2",
    linkImgEnterprise: "/img/Enterprises/mormaii.svg"
  }
];

const jeanPierreGlasses = [
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection2/mormai-agra.svg",
    modelo: "M6117A1451",
    collection: "AGRA",
    linkImgEnterprise: "/img/Enterprises/jean-pierre.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection2/colcci-gabi.svg",
    modelo: "0012ASDASD123AS",
    collection: "GABI",
    linkImgEnterprise: "/img/Enterprises/jean-pierre.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection2/colcci-gabi.svg",
    modelo: "0012ASDASD123AS",
    collection: "GABI",
    linkImgEnterprise: "/img/Enterprises/jean-pierre.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection2/colcci-gabi.svg",
    modelo: "0012ASDASD123AS",
    collection: "GABI",
    linkImgEnterprise: "/img/Enterprises/jean-pierre.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection2/colcci-gabi.svg",
    modelo: "0012ASDASD123AS",
    collection: "GABI",
    linkImgEnterprise: "/img/Enterprises/jean-pierre.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection2/colcci-gabi.svg",
    modelo: "0012ASDASD123AS",
    collection: "GABI",
    linkImgEnterprise: "/img/Enterprises/jean-pierre.svg"
  }
];

export default function Section2() {
  return (
    <section className="w-full bg-white text-black my-10 px-0 sm:px-0 md:px-0">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12 md:mb-20">
        <div className="w-full md:w-1/2">
          <Image
            src="/img/ImgsSection2/first-image.svg"
            alt="Section 2"
            width={840}
            height={440}
            className="w-auto h-full object-contain"
            priority
          />
        </div>
        <div id="Mormaii" className="w-full md:w-3/5 mt-6 md:mt-0 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full">
            {mormaiGlasses.map((glass, index) => (
              <div key={index} className="flex justify-center">
                <SmallCardGlasses
                  title={glass.title}
                  linkImgGlasses={glass.linkImgGlasses}
                  modelo={glass.modelo}
                  collection={glass.collection}
                  linkImgEnterprise={glass.linkImgEnterprise}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="JeanPierre" className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8">
        <div className="w-full md:w-3/5 mt-6 md:mt-0 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full">
            {jeanPierreGlasses.map((glass, index) => (
              <div key={index} className="flex justify-center">
                <SmallCardGlasses
                  title={glass.title}
                  linkImgGlasses={glass.linkImgGlasses}
                  modelo={glass.modelo}
                  collection={glass.collection}
                  linkImgEnterprise={glass.linkImgEnterprise}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/img/ImgsSection2/second-image.svg"
            alt="Section 2"
            width={840}
            height={440}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}