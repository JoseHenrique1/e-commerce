import { X } from "lucide-react";
import { RefObject } from "react";
import Button from "./button";

interface props {
  reference: RefObject<HTMLDialogElement>
  closeDetails: () => void
}
function Details({ reference, closeDetails }: props) {

  return (
    <dialog ref={reference} className="backdrop-blur w-11/12 h-5/6 overflow-hidden">
      <div className="flex flex-col p-4 gap-4 h-full">
        <div className="flex justify-between">
          <h1 className="text-xl">Product name</h1>
          <Button onClick={closeDetails}><X /></Button>
        </div>
        <div className="flex-grow flex flex-col gap-4 lg:flex-row  h-min overflow-y-auto ">
          <img className="w-full" src="/src/assets/img/product.jpg" alt="Product" />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit adipisci dolores officiis qui ipsam! Dicta consequatur placeat expedita ab veritatis praesentium ea labore impedit iusto! Et error molestias alias.
            </p>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default Details;