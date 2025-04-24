import Image from "next/image";

function Cards() {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            <div className="card flex bg-red-400 flex-row w-full sm:w-110 max-w-xs sm:max-w-none items-center overflow-hidden rounded-lg">
                <h2 className="p-4 sm:p-10 font-poppins text-base sm:text-xl text-white">FAÇA SEU <span className="font-bold">PEDIDO
                    AQUI</span> NA LORGIL <span className="text-bold">ÓTICA!</span> </h2>
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
        </div>
    );
}

export default Cards;