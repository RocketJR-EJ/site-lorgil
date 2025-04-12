import SmallCardGlasses from "../SmallCardGlasses";
import BigCardGlasses from "../BigCardGlasses";
import Image from "next/image";

const colcciGlasses = [
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/colcci-gabi.svg",
    modelo: "C6189KCE5",
    collection: "GABI",
    linkImgEnterprise: "/img/Enterprises/colcci.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/colcci-livia.svg",
    modelo: "C6204B9255",
    collection: "LIVIA",
    linkImgEnterprise: "/img/Enterprises/colcci.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/colcci-bandy-5.svg",
    modelo: "C6210A3455",
    collection: "BANDY 5",
    linkImgEnterprise: "/img/Enterprises/colcci.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/colcci-cora.svg",
    modelo: "C0150A0233",
    collection: "CORA",
    linkImgEnterprise: "/img/Enterprises/colcci.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/colcci-cora.svg",
    modelo: "C0150A0233",
    collection: "CORA",
    linkImgEnterprise: "/img/Enterprises/colcci.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/colcci-arethar-rx.svg",
    modelo: "C6125DJ757",
    collection: "ARETHAR RX",
    linkImgEnterprise: "/img/Enterprises/colcci.svg"
  }
]

const lavoratoGlasses = [
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/lovarato-elle.svg",
    modelo: "0154 / 0156",
    collection: "ÉLLE",
    linkImgEnterprise: "/img/Enterprises/lovarato.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/lovarato-duelii.svg",
    modelo: "31011",
    collection: "DUE 'L' II",
    linkImgEnterprise: "/img/Enterprises/lovarato.svg"
  }
]

const fiammaGlasses = [
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/fiamma-casual.svg",
    modelo: "41001 / 41002",
    collection: "CASUAL",
    linkImgEnterprise: "/img/Enterprises/fiamma.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/fiamma-ride.svg",
    modelo: "4055 / 4056",
    collection: "RIDE",
    linkImgEnterprise: "/img/Enterprises/fiamma.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/fiamma-lifestyle.svg",
    modelo: "4049",
    collection: "LIFESTYLE",
    linkImgEnterprise: "/img/Enterprises/fiamma.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/fiamma-modern.svg",
    modelo: "4038",
    collection: "MODERN",
    linkImgEnterprise: "/img/Enterprises/fiamma.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/fiamma-velocity.svg",
    modelo: "41055 / 41056 / 41057",
    collection: "VELOCITY",
    linkImgEnterprise: "/img/Enterprises/fiamma.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/fiamma-speed.svg",
    modelo: "41027 / 41028",
    collection: "SPEED",
    linkImgEnterprise: "/img/Enterprises/fiamma.svg"
  }
]

export default function Section3() {
  return (
    <section className="w-full bg-white text-black my-5">
      {/* Banner Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          <div className="overflow-hidden mb-14">
            <Image
              src="/img/ImgsSection3/first-image.svg"
              alt="Óculos de sol"
              width={1200}
              height={300}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Colcci Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-14">
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <Image
              src="/img/ImgsSection3/second-image.svg"
              alt="Óculos Colcci"
              width={840}
              height={440}
              className="w-full h-auto"
            />
            <Image
              src="/img/ImgsSection3/third-image.svg"
              alt="Logo Colcci"
              width={840}
              height={440}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="mt-6 lg:mt-0 flex justify-center lg:ml-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {colcciGlasses.slice(0, 6).map((glass, index) => (
              <SmallCardGlasses
                key={index}
                title={glass.title}
                linkImgGlasses={glass.linkImgGlasses}
                modelo={glass.modelo}
                collection={glass.collection}
                linkImgEnterprise={glass.linkImgEnterprise}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lavorato Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-10 mb-14">
        <div className="w-full lg:w-1/2">
          <Image
            src="/img/ImgsSection3/fourth-image.svg"
            alt="Lavorato Banner"
            width={840}
            height={440}
            className="w-full h-auto"
          />
        </div>
        <div className="container mx-auto px-4 mt-4 lg:mt-0 lg:px-0 lg:w-1/2">
          <div className="flex justify-between w-full">
            {lavoratoGlasses.map((glass, index) => (
              <BigCardGlasses
                key={index}
                title={glass.title}
                linkImgGlasses={glass.linkImgGlasses}
                modelo={glass.modelo}
                collection={glass.collection}
                linkImgEnterprise={glass.linkImgEnterprise}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fiamma Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <Image
            src="/img/ImgsSection3/fifth-image.svg"
            alt="Fiamma Banner"
            width={840}
            height={440}
            className="w-full h-auto"
          />
        </div>
        <div className="mt-6 lg:mt-0 flex justify-center lg:ml-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fiammaGlasses.slice(0, 6).map((glass, index) => (
              <SmallCardGlasses
                key={index}
                title={glass.title}
                linkImgGlasses={glass.linkImgGlasses}
                modelo={glass.modelo}
                collection={glass.collection}
                linkImgEnterprise={glass.linkImgEnterprise}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}