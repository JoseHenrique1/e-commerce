import Anchor from "./anchor";

function Navbar() {
  const links = [
    {name: "Home", href: "/"},
    {name: "Cart", href: "/cart"},
    {name: "About", href: "/about"}
  ]
  return ( 
    <nav
      className="flex justify-center gap-4">
      {links.map((link,index)=> <Anchor key={index} href={link.href}>{link.name}</Anchor>)}
    </nav>
   );
}

export default Navbar;