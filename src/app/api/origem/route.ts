import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        //SELECT * FROM ORIGEM
        const origens = await db.origem.findMany();
        //TRAZENDO OS DADOS EM FORMATO JSON
        return NextResponse.json(origens, {status:200})
    } catch (error) {
        return NextResponse.json({message: "Erro ao pegar dados da tabela Origem"}, {status:500})
    }
}