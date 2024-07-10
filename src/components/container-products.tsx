import { Product } from "./product";

export function ContainerProducts() {
  const products = [1,2,3,4,5,6,7]
  return ( 
    <main className="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl mx-auto">
      {products.map(product => (
        <Product key={product}/>
      ))}
    </main>
  );
}
