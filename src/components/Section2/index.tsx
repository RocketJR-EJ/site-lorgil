import CardOculos from '../CardOculos'

export default function Section2() {
  return (
    <section className="w-full py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Exemplo de Seção 2</h2>
        <p className="text-lg mb-6 text-gray-300 text-center max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam commodi
          minus optio pariatur vitae eos rerum aspernatur error blanditiis, est
          obcaecati facilis quam corrupti asperiores perferendis impedit!
        </p>
        <p className="text-base mb-10 text-gray-300 text-center max-w-3xl mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quisquam
          commodi ipsa eveniet aspernatur unde ducimus vero distinctio debitis vitae.
        </p>
        <div className="flex flex-wrap justify-center items-stretch gap-4 mb-10">
          <CardOculos title="Óculos Classic" description="Modelo clássico perfeito para qualquer ocasião" />
          <CardOculos title="Óculos Sport" description="Ideal para atividades ao ar livre e esportes" />
        </div>
        <div className="flex justify-center">
          <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors shadow-md">
            Ver Todos os Produtos
          </button>
        </div>
      </div>
    </section>
  )
}