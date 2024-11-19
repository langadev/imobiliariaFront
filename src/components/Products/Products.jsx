import { products } from "../../../utils/data";
import { ArrowTopRightOnSquareIcon ,HeartIcon,PlusCircleIcon } from "@heroicons/react/24/outline";

function Products() {
  return (
    <div className="grid md:px md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full mt-10 gap-4 ">
      {products.map((item) => (
        <div className="px-3 w-full relative mb-4 border-b-2 p-2 shadow-lg" key={item.id}>
          {/* Imagem do Produto */}
          <img
            className="w-full h-[300px] object-cover rounded-lg"
            src={item.url}
            alt={item.alt}
          />
          {/* Informações do Produto */}
          <div className="mt-3 flex justify-between items-center absolute gap-x-20 left-6 bottom-24">
            <span className="text-lg font-semibold text-white bg-[#00000081] rounded-sm px-7  p-1">$3000</span>
            <div className="flex  items-center gap-2 ">
             <PlusCircleIcon class="h-7 w-7 text-white bg-[#00000081] cursor-pointer p-1 rounded-sm" />
              <HeartIcon class="h-7 w-7 text-white bg-[#00000081] cursor-pointer p-1 rounded-sm" />
              <ArrowTopRightOnSquareIcon className="h-7 w-7 text-white bg-[#00000081] cursor-pointer p-1 rounded-sm" />
              
            </div>
                 
           
          </div>
          <div className="px-1 flex flex-col ">
            <span className="font-semibold">Apartamento T4 no Condominio JN130</span>
            <span className="font-thin">Cidade de Maputo, Zona Sul, Moçambique</span>
           <div className="flex justify-between gap-2 px-3">
            <div className="flex gap-1">

            </div>
           
            <button className=" py-1 px-3 text-center font-semibold rounded-md text-white bg-blue-500 hover:bg-white hover:text-blue-500 border-solid border-2 border-blue-500">Detalhes</button>
           
           </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Products;
