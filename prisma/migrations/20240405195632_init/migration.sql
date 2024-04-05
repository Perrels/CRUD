-- CreateTable
CREATE TABLE "Origem" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(200) NOT NULL,

    CONSTRAINT "Origem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clientes" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "celular" INTEGER NOT NULL,
    "telefone" INTEGER NOT NULL,
    "cpf_cnpj" VARCHAR(40) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "OrigemId" TEXT NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Clientes" ADD CONSTRAINT "Clientes_OrigemId_fkey" FOREIGN KEY ("OrigemId") REFERENCES "Origem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
