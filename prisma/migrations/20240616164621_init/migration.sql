-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
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

-- CreateTable
CREATE TABLE "Store_Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "commenter" TEXT NOT NULL,
    "idea" TEXT NOT NULL,
    "storeId" INTEGER NOT NULL,
    CONSTRAINT "Store_Comment_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Store_ExchangeRate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "currency" TEXT NOT NULL,
    "rate" REAL NOT NULL,
    "storeId" INTEGER NOT NULL,
    CONSTRAINT "Store_ExchangeRate_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Store_Product" (
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
    CONSTRAINT "Store_Product_storeID_fkey" FOREIGN KEY ("storeID") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Store_Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category" TEXT NOT NULL,
    "storeId" INTEGER NOT NULL,
    CONSTRAINT "Store_Category_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Store_MonPref" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "moneda" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "storeId" INTEGER NOT NULL,
    CONSTRAINT "Store_MonPref_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Store_Hours" (
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
    CONSTRAINT "Store_Hours_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_userName_key" ON "Usuario"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_userId_key" ON "Usuario"("userId");
