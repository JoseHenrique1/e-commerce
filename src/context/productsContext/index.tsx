import { createContext } from 'react';

interface product {
  id : string
  name: string,
  content: string,
  img: string,
  price: number,
  quantity: number,
}

type productProviderProps = {
  children: React.ReactNode;
};

type productContextType = {
  products: Array<product>
  
};

export const productContext = createContext({} as productContextType);

export const ProductProvider = ({ children }: productProviderProps) => {
  const products: Array<product> = []

  return (
    <productContext.Provider
      value={{
        products
        
      }}
    >
      {children}
    </productContext.Provider>
  );
};