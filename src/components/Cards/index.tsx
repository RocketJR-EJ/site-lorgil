import Image from "next/image";

function Cards() {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            <div className="card flex bg-red-400 flex-row w-full sm:w-110 max-w-xs sm:max-w-none items-center overflow-hidden rounded-lg">
                <h2 className="p-4 sm:p-10 font-poppins text-base sm:text-xl text-white">FAÇA SEU <span className="font-bold">PEDIDO
                    ONLINE</span> E GARANTA <span className="text-bold">SEU DECONTO!</span> </h2>
                <div className="h-full flex-shrink-0">
                    <Image className="object-cover h-full w-auto max-h-32 sm:max-h-none" src="/img/CardsImgs/homemCard.svg" alt="Homem com óculos" width={150} height={150} />
                </div>
            </div>

            <div className="card flex flex-row w-full sm:w-110 max-w-xs sm:max-w-none items-center overflow-hidden bg-red-600 rounded-lg">
                <h2 className="p-4 sm:p-10 font-pompins font-bold text-base sm:text-xl text-white">ESCOLHA SEU FAVORITO.</h2>
                <div className="h-full flex-shrink-0">
                    <Image className="object-cover h-full w-auto max-h-32 sm:max-h-none" src="/img/CardsImgs/mulherCard.svg" alt="Mulher com óculos" width={150} height={150} />
                </div>
            </div>

            <div className="card flex flex-row w-full sm:w-110 max-w-xs sm:max-w-none items-center overflow-hidden bg-red-400 rounded-lg">
                <div className="h-full flex-shrink-0">
                    <Image className="object-cover h-full w-auto max-h-32 sm:max-h-none" src="/img/CardsImgs/oculosCard.svg" alt="Óculos" width={150} height={150} />
                </div>
                <div className="p-2 sm:p-4 text-white">
                    <h2 className="font-pompins text-base sm:text-xl font-bold">COMPRE 3, LEVE 4!</h2>
                    <p className="font-normal text-sm sm:text-base">Seu combo perfeito de óculos</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;