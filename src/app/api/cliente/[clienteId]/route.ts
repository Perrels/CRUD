import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";


// INTERFACE UTILIZADA PARA PEGAR O ID
interface ContextProps{
    params:{
        clienteId: string
    }
}
// DELETE FUNCTION
export async function DELETE(req: Request, context:ContextProps) {
    try {
        const { params } = context;
        // vai utilizar o parametro pego pelo context, para verificar qual o id vindo da [clientId]
        await db.clientes.delete({
            where:{
                id: params.clienteId
            }
        });
        return new Response(null, {status: 204})
    } catch (error) {

        console.log(error)
        return NextResponse.json({message: "Erro ao deletar o cliente"}, {status:500})
    }
}
// UPDATE FUNCTION
export async function PATCH(req: Request, context:ContextProps) {
    try {
        //vamos pegar o body para fazer as modificações no nosso cliente
        const body = await req.json()
        const { params } = context;
        // vai utilizar o parametro pego pelo context, para verificar qual o id vindo da [clientId]
        await db.clientes.update({
            where:{
                id: params.clienteId
            },
            data:{
                name:body.name,
                email: body.email,
                celular: body.celular,
                telefone: body.telefone,
                cpf_cnpj: body.cpf_cnpj,
                OrigemId: body.origemId
            }
        });
        return NextResponse.json({message: "Cliente atualizado com sucesso"}, {status:200})
    } catch (error) {

        console.log(error)
        return NextResponse.json({message: "Erro ao atualizar o cliente"}, {status:500})
    }
}

export async function GET(req: Request, context:ContextProps) {
    try {
        const { params } = context; 
        const cliente = await db.clientes.findFirst({
            where:{
                id: params.clienteId
            },
            include:{
                Origem: true
            }
        })
        return NextResponse.json(cliente, {status: 200})
    } catch (error) {
        return NextResponse.json({message:"Cliente não localizado"}, {status: 500})
    }
    
}


