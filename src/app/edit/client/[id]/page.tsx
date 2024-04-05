"use client"
import BackButton from "@/app/components/backButton";
import CreateClientForm from "@/app/components/forms/createClientForm";
import { FormCreateCliente } from "@/app/types";
import { SubmitHandler } from "react-hook-form";

const EditClientPage = () => {
    const handleEditClient: SubmitHandler<FormCreateCliente> = (data) => {
        {console.log(data)}
      }
    
      return (
        <div className="div">
          
          <h1 className="text-2xl uppercase font-bold text-center mb-12">Edição de clientes</h1>
          <CreateClientForm submit={handleEditClient} isEditing={true}/>
          <div className="mt-4"> <BackButton /> </div>
        </div>
      );
}
 
export default EditClientPage;