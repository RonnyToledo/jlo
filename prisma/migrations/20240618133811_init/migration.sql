/*
  Warnings:

  - Added the required column `userStore` to the `Store` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Store" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sitio" TEXT NOT NULL,
    "variable" TEXT NOT NULL,
    "location" TEXT,
    "poster" TEXT,
    "welcomeParagraph" TEXT,
    "infoParagraph" TEXT,
    "instagram" TEXT,
    "province" TEXT NOT NULL,
    "storeName" TEXT NOT NULL,
    "userStore" TEXT NOT NULL,
    CONSTRAINT "Store_userStore_fkey" FOREIGN KEY ("userStore") REFERENCES "Usuario" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Store" ("id", "infoParagraph", "instagram", "location", "poster", "province", "sitio", "storeName", "variable", "welcomeParagraph") SELECT "id", "infoParagraph", "instagram", "location", "poster", "province", "sitio", "storeName", "variable", "welcomeParagraph" FROM "Store";
DROP TABLE "Store";
ALTER TABLE "new_Store" RENAME TO "Store";
CREATE UNIQUE INDEX "Store_sitio_key" ON "Store"("sitio");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
