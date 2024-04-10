import Link from "next/link";
import { BiHomeAlt } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaHandshakeSimple } from "react-icons/fa6";

const LateralMenu = () => {
  return (
    <ul className="menu bg-base-200 rounded-box h-full pt-2">
      <li>
        <Link href="/" className="tooltip tooltip-right" data-tip="Home">
            <BiHomeAlt size={20}/>
        </Link>
      </li>
      <li>
        <Link href="/create/cliente" className="tooltip tooltip-right" data-tip="Clientes">
            <BsPerson size={20}/>
        </Link>
      </li>
      <li>
        <Link href="" className="tooltip tooltip-right" data-tip="Origem">
            <FaHandshakeSimple size={20}/>
        </Link>
      </li>
    </ul>
  );
};

export default LateralMenu;
