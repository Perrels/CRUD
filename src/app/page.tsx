import ClientCards from "./components/clientCards";
import { db } from "./lib/db";

//pegar os dados do banco de dados
async function getClientes(){
  const response = await db.clientes.findMany({
    select:{
      id: true,
      name: true,
      email: true,
      celular: true,
      telefone: true,
      cpf_cnpj: true,
      Origem: true,
    },
    orderBy:{
      name: "asc"
    }
  })
  return response
}

export  default async function Home() {
  //armazenando clientes na variavel
  const clientes = await getClientes()
  console.log(clientes)

  return (
    <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4">

      {clientes.map((cliente) => (
        <ClientCards key={cliente.id} cliente={cliente} />
      ))}
    </div>

  );
}
