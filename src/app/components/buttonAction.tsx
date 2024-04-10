"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";

//criando interface para pegar o id do cliente
interface ButtonActionProps {
  id: string;
}

//componente que utiliza o parametro para verifcar qual é o cliente
const ButtonAction: FC<ButtonActionProps> = ({ id }) => {
  const toast = () => {
    <div className="toast">
      <div className="alert alert-info">
        <span>Cliente adicionado com sucesso</span>
      </div>
    </div>;
  };

  
  const router = useRouter();
  //using mutation and axios to get delete api
  const { mutate: deleteClientes} = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/cliente/${id}`);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      toast();
      router.push("/");
      router.refresh();
    },
  });

  return (
    <div className="flex gap-4 my-3">
      <Link href={`/edit/client/${id}`} className="btn btn-warning">
        <BiPencil /> EDITAR
      </Link>

      <button className="btn btn-error" onClick={() => deleteClientes()}>
        <BiTrash /> DELETE
      </button>
    </div>
  );
};

export default ButtonAction;
