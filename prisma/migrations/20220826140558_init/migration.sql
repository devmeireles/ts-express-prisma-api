/*
  Warnings:

  - You are about to drop the column `propertyId` on the `property_media` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_property_media" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "property_id" INTEGER,
    "media_id" INTEGER,
    CONSTRAINT "property_media_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "property" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "property_media_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "media" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_property_media" ("id") SELECT "id" FROM "property_media";
DROP TABLE "property_media";
ALTER TABLE "new_property_media" RENAME TO "property_media";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
