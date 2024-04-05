import { Origem } from "@prisma/client";
import Link from "next/link";
import { FC } from "react";

//criando interface para pegar os dados do banco 
interface ClientCardsProps {
  cliente: {
    id: string;
    name: string;
    email: string;
    celular: number;
    telefone: number;
    cpf_cnpj: string;
    Origem: Origem;
  };
}

//chamamos a lib FC e passamos a props e colocamos o parametro que queremos receber lá na chamada
const ClientCards: FC<ClientCardsProps> = ({ cliente }) => {
  //setamos quais dados vamos querer pegar do nosso objeto
  const {id, name, email, celular, telefone, cpf_cnpj, Origem } = cliente;

  return (
    <div className="card w-full bg-primary text-primary-content">
      <div className="card-body">
        <div className="flex gap-3 mb-3 items-center">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <h2 className="card-title capitalize">{name}</h2>
        </div>
        <div className="py-1">
          <p>
            <span className="font-bold">Email </span>
            {email}
          </p>
          <p>
            <span className="font-bold">Celular </span>
            {celular} <span className="font-bold">| Telefone </span> {telefone}
          </p>
          <p>
            <span className="font-bold">CPF/CNPJ </span>
            {cpf_cnpj}
          </p>
        </div>
        <div className="card-actions justify-between items-center">
          <span className="badge p-3 capitalize disabled cursor-default">{Origem.name}</span>
          <Link className="btn " href={`/details/clientdetails/${id}`}>
            Saiba mais...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientCards;
