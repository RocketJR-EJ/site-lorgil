export default function CardOculos({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xs m-4 text-black">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="border-t pt-4 mt-2">
        <h4 className="text-lg font-medium mb-2">Óculos de Sol</h4>
        <p className="text-gray-700 mb-2">Marca: Ray-Ban</p>
        <p className="text-gray-700 mb-4">Modelo: Wayfarer</p>
        <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors">
          Comprar Agora
        </button>
      </div>
    </div>
  )
}