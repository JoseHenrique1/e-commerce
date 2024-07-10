import { Logo } from "./logo";
import Input from "./input";
import Navbar from "./navbar";
function Header() {
  return ( 
    <header className="border-b p-4 space-y-4">
      <div className="flex justify-between">
        <Logo/>
        <Input placeholder="Search products" />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;