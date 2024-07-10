import { ShoppingCart, ListCollapse } from "lucide-react";
import Button from "./button";
import Details from "./details";
import { useRef } from "react";

export function Product() {
  const dialog = useRef<HTMLDialogElement>(null)

  function openDetails() {
    dialog.current?.showModal();
  }

  function closeDetails() {
    dialog.current?.close();
  }

  return (
    <div className="w-full rounded-xl bg-gray-100">
      <div className="w-full">
        <img
          className="rounded-t-xl w-full"
          src="/src/assets/img/product.jpg"
          alt="" />
      </div>
      <div className="p-4 space-y-4">
        <h1 className="text-xl font-medium">Monitor</h1>
        <div className="flex justify-between items-center">
          <Button variant="ghost" onClick={openDetails}>
            <ListCollapse size={20}/>
            <p>View more</p>
          </Button>
          <Button>
            <p>To add</p>
            <ShoppingCart size={20}/>
          </Button>
          <Details reference={dialog} closeDetails={closeDetails}/>
        </div>
      </div>
    </div>
  );
}