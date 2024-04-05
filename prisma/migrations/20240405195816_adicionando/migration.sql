/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Clientes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Clientes_id_key" ON "Clientes"("id");
