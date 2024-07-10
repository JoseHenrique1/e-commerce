import { ComponentProps } from "react";

function Input({...props}: ComponentProps<'input'>) {
  return ( 
    <input 
      type="text" 
      className="px-2 py-1 rounded border focus:outline-none focus:ring-1 focus:ring-blue-400"
      {...props} />
  );
}

export default Input;