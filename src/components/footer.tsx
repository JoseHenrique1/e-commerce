import { Logo } from "./logo";

function Footer() {
  return ( 
    <footer
      className="p-4 flex justify-between items-center border-t">
      <Logo />
      <p className="text-center text-gray-600"> 2023 LOGO. All rights reserved.</p>
    </footer>

  );
}

export default Footer;