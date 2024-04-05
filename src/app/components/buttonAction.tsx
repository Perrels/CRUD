import Link from "next/link";
import { BiPencil, BiTrash } from "react-icons/bi";

const ButtonAction = () => {
    return ( 
        <div className="flex gap-4 my-3">
            <Link href={"/edit/client/1"} className="btn btn-warning"><BiPencil /> EDITAR</Link>
            <Link href={"/"} className="btn btn-error"><BiTrash /> DELETE</Link>
        </div>
     );
}
 
export default ButtonAction;