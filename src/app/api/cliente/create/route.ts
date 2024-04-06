import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        //requisição enviada para a api
        const body = await req.json()
        console.log(body)
        
        //CREATE no prisma precisa ter um data:{}
        const cliente = await db.clientes.create({
            data:{
                name:body.name,
                email: body.email,
                celular: body.celular,
                telefone: body.telefone,
                cpf_cnpj: body.cpf_cnpj,
                OrigemId: body.origemId
            }
        });
        //TRAZENDO OS DADOS EM FORMATO JSON
        return NextResponse.json(cliente, {status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Erro ao criar um novo cliente"}, {status:500})
    }
}