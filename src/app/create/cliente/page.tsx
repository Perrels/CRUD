"use client"

import CreateClientForm from "@/app/components/forms/createClientForm";
import { FormCreateCliente} from "@/app/types";
import { SubmitHandler } from "react-hook-form";

const CreateClientPage = () => {
  const handleCreateClient: SubmitHandler<FormCreateCliente> = (data) => {
    {console.log(data)}
  }

  return (
    <div className="div">
      <h1 className="text-2xl uppercase font-bold text-center mb-12">Cadastro de cliente</h1>
      <CreateClientForm submit={handleCreateClient} isEditing={false}/>
    </div>
  );
};

export default CreateClientPage;
