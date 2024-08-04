/*
  Warnings:

  - You are about to drop the column `infoParagraph` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `poster` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `province` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `sitio` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `storeName` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `variable` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `welcomeParagraph` on the `Usuario` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Store" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sitio" TEXT NOT NULL,
    "variable" TEXT NOT NULL,
    "location" TEXT,
    "poster" TEXT,
    "welcomeParagraph" TEXT,
    "infoParagraph" TEXT,
    "instagram" TEXT,
    "province" TEXT NOT NULL,
    "storeName" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Store_Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category" TEXT NOT NULL,
    "storeId" INTEGER NOT NULL,
    CONSTRAINT "Store_Category_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Store_Category" ("category", "id", "storeId") SELECT "category", "id", "storeId" FROM "Store_Category";
DROP TABLE "Store_Category";
ALTER TABLE "new_Store_Category" RENAME TO "Store_Category";
CREATE TABLE "new_Store_Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "commenter" TEXT NOT NULL,
    "idea" TEXT NOT NULL,
    "storeId" INTEGER NOT NULL,
    CONSTRAINT "Store_Comment_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Store_Comment" ("commenter", "id", "idea", "storeId") SELECT "commenter", "id", "idea", "storeId" FROM "Store_Comment";
DROP TABLE "Store_Comment";
ALTER TABLE "new_Store_Comment" RENAME TO "Store_Comment";
CREATE TABLE "new_Store_ExchangeRate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "currency" TEXT NOT NULL,
    "rate" REAL NOT NULL,
    "storeId" INTEGER NOT NULL,
    CONSTRAINT "Store_ExchangeRate_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Store_ExchangeRate" ("currency", "id", "rate", "storeId") SELECT "currency", "id", "rate", "storeId" FROM "Store_ExchangeRate";
DROP TABLE "Store_ExchangeRate";
ALTER TABLE "new_Store_ExchangeRate" RENAME TO "Store_ExchangeRate";
CREATE TABLE "new_Store_Hours" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "openL" INTEGER NOT NULL,
    "openM" INTEGER NOT NULL,
    "openX" INTEGER NOT NULL,
    "openJ" INTEGER NOT NULL,
    "openV" INTEGER NOT NULL,
    "openS" INTEGER NOT NULL,
    "openD" INTEGER NOT NULL,
    "closeL" INTEGER NOT NULL,
    "closeM" INTEGER NOT NULL,
    "closeX" INTEGER NOT NULL,
    "closeJ" INTEGER NOT NULL,
    "closeV" INTEGER NOT NULL,
    "closeS" INTEGER NOT NULL,
    "closeD" INTEGER NOT NULL,
    "storeId" INTEGER NOT NULL,
    CONSTRAINT "Store_Hours_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Store_Hours" ("closeD", "closeJ", "closeL", "closeM", "closeS", "closeV", "closeX", "id", "openD", "openJ", "openL", "openM", "openS", "openV", "openX", "storeId") SELECT "closeD", "closeJ", "closeL", "closeM", "closeS", "closeV", "closeX", "id", "openD", "openJ", "openL", "openM", "openS", "openV", "openX", "storeId" FROM "Store_Hours";
DROP TABLE "Store_Hours";
ALTER TABLE "new_Store_Hours" RENAME TO "Store_Hours";
CREATE TABLE "new_Store_MonPref" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "moneda" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "storeId" INTEGER NOT NULL,
    CONSTRAINT "Store_MonPref_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Store_MonPref" ("id", "moneda", "price", "storeId") SELECT "id", "moneda", "price", "storeId" FROM "Store_MonPref";
DROP TABLE "Store_MonPref";
ALTER TABLE "new_Store_MonPref" RENAME TO "Store_MonPref";
CREATE TABLE "new_Store_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT,
    "discount" REAL NOT NULL DEFAULT 0,
    "favorite" BOOLEAN NOT NULL DEFAULT false,
    "outOfStock" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "minusButton" BOOLEAN NOT NULL DEFAULT false,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "storeID" INTEGER NOT NULL,
    CONSTRAINT "Store_Product_storeID_fkey" FOREIGN KEY ("storeID") REFERENCES "Store" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Store_Product" ("category", "createdAt", "description", "discount", "enabled", "favorite", "id", "image", "minusButton", "outOfStock", "price", "quantity", "storeID", "title") SELECT "category", "createdAt", "description", "discount", "enabled", "favorite", "id", "image", "minusButton", "outOfStock", "price", "quantity", "storeID", "title" FROM "Store_Product";
DROP TABLE "Store_Product";
ALTER TABLE "new_Store_Product" RENAME TO "Store_Product";
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("email", "id", "password", "userId", "userName") SELECT "email", "id", "password", "userId", "userName" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_userName_key" ON "Usuario"("userName");
CREATE UNIQUE INDEX "Usuario_userId_key" ON "Usuario"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
