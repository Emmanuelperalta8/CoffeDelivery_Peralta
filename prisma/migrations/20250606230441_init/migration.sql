-- CreateTable
CREATE TABLE "Cafe" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Cafe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagCafe" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cadeId" INTEGER NOT NULL,

    CONSTRAINT "TagCafe_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TagCafe" ADD CONSTRAINT "TagCafe_cadeId_fkey" FOREIGN KEY ("cadeId") REFERENCES "Cafe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
