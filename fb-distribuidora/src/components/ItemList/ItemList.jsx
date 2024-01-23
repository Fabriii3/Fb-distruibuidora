import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({productos}) => {

  return (
    <section className="container m-auto mt-8">

      <h2 className="text-4xl text-center my-10 font-bold italic"> Catalogo de productos </h2>
    

        <div className="flex flex-wrap justify-start gap-10 items-stretch">
            {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
        </div>

    </section>
  );
};

export default ItemList;

