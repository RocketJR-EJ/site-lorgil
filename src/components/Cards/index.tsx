import Image from "next/image";

function Cards (){
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            <div className="card flex bg-red-400 flex-row w-110 items-center overflow-hidden rounded-lg">
                <h2 className="p-10 font-poppins text-xl text-white">FAÇA SEU <span className="font-bold">PEDIDO
                     ONLINE</span> E GARANTA <span className="text-bold">SEU DECONTO!</span> </h2>
                <div className="h-full flex-shrink-0">
                    
                    <Image className="object-cover h-full w-auto" src="/img/CardsImgs/homemCard.svg" alt="Homem com óculos" width={200} height={200} />
                </div>
            </div>

            <div className="card flex flex-row w-110 items-center overflow-hidden bg-red-600 rounded-lg">
                <h2 className="p-10 font-pompins font-bold text-xl text-white">ESCOLHA SEU FAVORITO.</h2>
                <div className="h-full flex-shrink-0">
                    <Image className="object-cover h-full w-auto" src="/img/CardsImgs/mulherCard.svg" alt="Mulher com óculos" width={200} height={200} />
                </div>
            </div>

            <div className="card flex flex-row w-110 items-center overflow-hidden bg-red-400 rounded-lg">
                <div className="h-full flex-shrink-0">
                    <Image className="object-cover h-full w-auto" src="/img/Cardsimgs/oculosCard.svg" alt="Óculos" width={200} height={200} />
                </div>
                <div className="p-4 text-white">
                    <h2 className="font-pompins text-xl font-bold">COMPRE 3, LEVE 4!</h2>
                    <p className="font-normal">Seu combo perfeito de óculos</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;