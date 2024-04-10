"use client";
import BackButton from "@/app/components/backButton";
import CreateClientForm from "@/app/components/forms/createClientForm";
import { FormCreateCliente } from "@/app/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { SubmitHandler } from "react-hook-form";

interface EditClientPageProps {
  params: {
    id: string;
  };
}

const EditClientPage: FC<EditClientPageProps> = ({ params }) => {
  const { id } = params; // destructuring
  const router = useRouter()

  const { data: dataCliente, isLoading: isLoadingCliente } = useQuery({
    queryKey: ['cliente', id],
    queryFn: async () => {
      const response = await axios.get(`/api/cliente/${id}`);
      return response.data;
    },
  });
  // console.log(`Dados do data do useQuery ${dataCliente}`);

  //utilizando useMutation
  const { mutate: updateCliente} = useMutation({
    //vc seta esse FormCreateClient lá no arquivo index.d.ts
    mutationFn: (NewClient: FormCreateCliente) => {
      return axios.patch(`/api/cliente/${id}`, NewClient);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh()
      // toast() TO DO 
    },
  });

  const handleEditClient: SubmitHandler<FormCreateCliente> = (data) => {
    {
      updateCliente(data);
    }
  };

  if (isLoadingCliente){
    return(
      <div className="text-center">
        <span className="loading loading-spinner"></span>
      </div>
    )
  }

  return (
    <div className="div">
      <h1 className="text-2xl uppercase font-bold text-center mb-12">
        Edição de clientes
      </h1>
      <CreateClientForm submit={handleEditClient} isEditing={true} initialValue={dataCliente}/>
      <div className="mt-4">
        {" "}
        <BackButton />{" "}
      </div>
    </div>
  );
};

export default EditClientPage;
