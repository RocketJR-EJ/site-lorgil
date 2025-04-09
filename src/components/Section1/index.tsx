import Header from '@/components/Header/Header';
import Slide from '@/components/Slide/Slide';
import BarMarcas from '@/components/BarMarcas/BarMarcas';
import Cards from '@/components/Cards/Cards';


function Section1() {
    return (
        <>
            <Header />
            <Slide />
            <BarMarcas />
            <Cards />

            <section className="w-full py-20 bg-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Exemplo de Seção 1</h1>
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
        </>

    );
}

export default Section1;