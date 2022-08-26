/*
  Warnings:

  - You are about to drop the column `propertyId` on the `feature` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_feature" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "active" BOOLEAN NOT NULL
);
INSERT INTO "new_feature" ("active", "id", "name") SELECT "active", "id", "name" FROM "feature";
DROP TABLE "feature";
ALTER TABLE "new_feature" RENAME TO "feature";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
