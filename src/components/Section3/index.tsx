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
    linkImgGlasses: "/img/GlassesSection3/lavorato-elle.svg",
    modelo: "0154 / 0156",
    collection: "ÉLLE",
    linkImgEnterprise: "/img/Enterprises/lavorato.svg"
  },
  {
    title: "Óculos de Sol",
    linkImgGlasses: "/img/GlassesSection3/lavorato-duelli.svg",
    modelo: "31011",
    collection: "DUE &quot;L&quot; II",
    linkImgEnterprise: "/img/Enterprises/lavorato.svg"
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
    <section className="w-full py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Exemplo de Seção</h1>
        <p className="text-lg mb-6 text-center max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam commodi
          minus optio pariatur vitae eos rerum aspernatur error blanditiis, est
          obcaecati facilis quam corrupti asperiores perferendis impedit!
          Perspiciatis, consequuntur autem.
        </p>
        <p className="text-base mb-8 text-center max-w-3xl mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quisquam
          commodi ipsa eveniet aspernatur unde ducimus vero distinctio debitis
          vitae. Vitae sit explicabo laborum tempore maxime eligendi, saepe labore
          possimus!
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors shadow-md">
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  )
}