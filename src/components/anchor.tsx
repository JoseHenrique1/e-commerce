import { ComponentProps } from "react";
import { Link } from "react-router-dom";
interface anchorProps extends ComponentProps<'a'> {
  children: React.ReactNode;
}
function Anchor({children, ...props}: anchorProps) {
  return ( 
    <Link 
      to={props.href!}
      className=" hover:bg-slate-200 rounded py-1 px-2 transition duration-200"
      {...props}
      >
      {children}
    </Link>
  );
}

export default Anchor;