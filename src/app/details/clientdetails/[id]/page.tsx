import BackButton from "@/app/components/backButton";
import ButtonAction from "@/app/components/buttonAction";
import { db } from "@/app/lib/db";
import { FC } from "react";

//criar uma interface para pegar os dados
interface ClienteDetailProps {
  params: {
    id: string;
  };
}
//select id from clientes where id = {id}
async function getClient(id: string) {
  const response = await db.clientes.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      celular: true,
      telefone: true,
      cpf_cnpj: true,
      Origem: true,
    },
  });
  return response;
}

const ClientDetailsPage: FC<ClienteDetailProps> = async ({ params }) => {
  //criar função getCliente
  const cliente = await getClient(params.id);

  return (
    <div className="items-center ">
      <BackButton />
      <div className="content flex flex-col gap-4 mt-5">
        {/*INFOS*/}
        <div className="flex items-center gap-4">
        <h2 className="text-2xl capitalize"><span className="font-bold">Nome </span>{cliente?.name}</h2>
        <span className="badge badge-primary capitalize text-xl p-3">{cliente?.Origem.name}</span>
        </div>
        <p className="text-xl capitalize"><span className="font-bold">Email </span>{cliente?.email}</p>
        <p className="text-xl capitalize"><span className="font-bold">Celular </span>{cliente?.celular}</p>
        <p className="text-xl capitalize"><span className="font-bold">Telefone </span>{cliente?.telefone}</p>
        <p className="text-xl capitalize"><span className="font-bold">CPF/CNPJ </span>{cliente?.cpf_cnpj}</p>
      </div>
      <div className="mt-5">
        <ButtonAction id={params.id} />
      </div>
    </div>
  );
};

export default ClientDetailsPage;
