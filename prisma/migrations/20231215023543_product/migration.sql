-- CreateEnum
CREATE TYPE "Size" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('men', 'women', 'kid');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "inStock" INTEGER NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "sizes" "Size"[] DEFAULT ARRAY[]::"Size"[],
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_title_key" ON "Product"("title");
