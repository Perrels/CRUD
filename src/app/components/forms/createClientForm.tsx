"use client";

import { FormCreateCliente } from "@/app/types";
import { Origem } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

//criando a interface para que possamos utilizar
//os dados dela de forma mais eficaz
interface CreateClientFormProps {
  submit: SubmitHandler<FormCreateCliente>;
  isEditing: boolean;
  //initialValue serve para preencher os valores no formulário de update
  initialValue?: FormCreateCliente
}

const CreateClientForm: FC<CreateClientFormProps> = ({ submit, isEditing, initialValue }) => {
  //chamando o useForm como está na doc deles
  const { register, handleSubmit } = useForm<FormCreateCliente>({
    defaultValues: initialValue
  });
  //const submit = (data) => console.log(data)

  //pegando os valores de origem usando TranStack Query e Axios
  const { data: dataOrigens, isLoading: isLoadingOrigens } = useQuery<Origem[]>(
    {
      queryKey: ["origens"],
      queryFn: async () => {
        const response = await axios.get("/api/origem");
        return response.data;
      },
    }
  );
  //mostra as origens no console do navegador
  console.log(dataOrigens);

  return (
    <div className="items-center justify-center">
      <div className="">
        <form
          onSubmit={handleSubmit(submit)}
          className="text-center flex flex-col justify-items-center gap-3"
        >
          <label className="input input-bordered flex items-center gap-2">
            Nome
            <input
              {...register("name", { required: true })}
              type="text"
              className="grow"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input
              {...register("email", { required: true })}
              type="text"
              className="grow"
              placeholder="email@dominio.com"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              {...register("telefone")}
              type="number"
              className="grow"
              placeholder="Telefone"
            />
            <span className="badge badge-info bg-primary">Opcional</span>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              {...register("celular")}
              type="number"
              className="grow"
              placeholder="Celular"
            />
            <span className="badge badge-info bg-primary">Opcional</span>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            CPF/CNPJ
            <input
              {...register("cpf_cnpj", { required: true })}
              type="text"
              className="grow"
            />
          </label>

          {isLoadingOrigens ? (
            <div className="align-middle">
              <span className="loading loading-spinner loading-lg justify-center"></span>
            </div>
          ) : (
            <select
              {...register("origemId", { required: true })}
              className="select select-bordered grow max-w-xs"
              defaultValue={""}
            >
              <option disabled value="">
                Origem
              </option>
              {/*MAP PARA MOSTRAR TODOS OS NOMES DAS ORIGENS*/}
              {dataOrigens?.map((item) => (
                <option className="capitalize" key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          )}

          <button type="submit" className="btn btn-primary">
            {/*se isEditing is true show Editar else Cadastrar*/}
            {isEditing ? "Editar" : "Cadastrar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateClientForm;
