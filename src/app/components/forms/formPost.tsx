import { FormInputPost } from "@/app/types";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";


interface FormPostProps{
    submit: SubmitHandler<FormInputPost>
}

const FormPost:FC<FormPostProps> = ({submit}) => {
    const {register, handleSubmit} = useForm<FormInputPost>()
    return ( 
        <form onSubmit={handleSubmit(submit)} className="text-center flex flex-col justify-items-center gap-3">
        <label className="input input-bordered flex items-center gap-2">
          Nome
          <input
            {...register("title")}
            type="text"
            className="grow"
            placeholder="Daisy"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input {...register("content")}
          type="text" className="grow" placeholder="daisy@site.com" />
        </label>
        
        <select {...register("tag")} className="select select-bordered w-full max-w-xs grow">
          <option disabled selected>
            Origem
          </option>
          <option>Balcão</option>
          <option>Loja 1</option>
          <option>Loja 2</option>
        </select>
        <button className="btn btn-primary">Cadastrar</button>
      </form>
     );
}
 
export default FormPost;