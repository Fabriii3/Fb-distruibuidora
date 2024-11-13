import ItemCard from "../ItemCard/ItemCard";
// import SearchProduc from "./SearchProduc";


const ItemList = ({productos}) => {
  return (
    <section className="container m-auto mt-32"> {/* Aumentamos el margen superior a mt-32 */}
      <p className="catalogomobile text-4xl text-center my-10 font-bold italic">Catálogo de productos</p>
  
      <div className="flex flex-wrap justify-start gap-10 items-stretch">
        {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
      </div>
    </section>
  );
  
};

export default ItemList;



{/* <SearchProduc/> */}