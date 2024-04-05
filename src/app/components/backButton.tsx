"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { CgChevronDoubleLeft } from "react-icons/cg";

const BackButton = () => {
    const router = useRouter()
    return ( 
        <Link href={"/"} onClick={() => router} className="btn"><CgChevronDoubleLeft />Voltar</Link>
     );
}
 
export default BackButton;