/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inscription` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `cpf` VARCHAR(191) NOT NULL,
    ADD COLUMN `department` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `inscription` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Obra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `classificacao` VARCHAR(191) NOT NULL,
    `tipo_documental` VARCHAR(191) NOT NULL,
    `autor` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,
    `local_publicacao` VARCHAR(191) NOT NULL,
    `editor` VARCHAR(191) NOT NULL,
    `edicao` INTEGER NOT NULL,
    `idioma` VARCHAR(191) NOT NULL,
    `paginas` INTEGER NOT NULL,
    `descritores` VARCHAR(191) NOT NULL,
    `registro` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Emprestimo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_transacao` VARCHAR(191) NOT NULL,
    `nome_funcionario` VARCHAR(191) NOT NULL,
    `nome_usuario` VARCHAR(191) NOT NULL,
    `registro_obra1` VARCHAR(191) NOT NULL,
    `registro_obra2` VARCHAR(191) NOT NULL,
    `registro_obra3` VARCHAR(191) NOT NULL,
    `registro_obra4` VARCHAR(191) NOT NULL,
    `registro_obra5` VARCHAR(191) NOT NULL,
    `data_emprestimo` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `data_prevista` DATETIME(3) NOT NULL,
    `data_devolucao1` DATETIME(3) NOT NULL,
    `data_devolucao2` DATETIME(3) NOT NULL,
    `data_devolucao3` DATETIME(3) NOT NULL,
    `data_devolucao4` DATETIME(3) NOT NULL,
    `data_devolucao5` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);
