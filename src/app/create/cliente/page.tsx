"use client";

import BackButton from "@/app/components/backButton";
import CreateClientForm from "@/app/components/forms/createClientForm";
import { FormCreateCliente } from "@/app/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

const CreateClientPage = () => {
  //variavel para usar router
  const router = useRouter();

  const toast = () => {
    <div className="toast">
      <div className="alert alert-info">
        <span>Cliente adicionado com sucesso</span>
      </div>
    </div>;
  };

  const handleCreateClient: SubmitHandler<FormCreateCliente> = (data) => {
    {
      console.log(data)
      createCliente(data)
    }
  };

  //utilizando useMutation
  const { mutate: createCliente } = useMutation({
    //vc seta esse FormCreateClient lá no arquivo index.d.ts
    mutationFn: (NewClient: FormCreateCliente) => {
      return axios.post("/api/cliente/create", NewClient);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      toast()
      router.push("/");
      router.refresh()
    },
  });

  return (
    <div className="div">
      <h1 className="text-2xl uppercase font-bold text-center mb-12">
        Cadastro de cliente
      </h1>
      <CreateClientForm submit={handleCreateClient} isEditing={false} />
      <div className="mt-4">
        {" "}
        <BackButton />{" "}
      </div>
    </div>
  );
};

export default CreateClientPage;
