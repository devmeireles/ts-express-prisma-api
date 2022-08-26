-- CreateTable
CREATE TABLE "property" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "owner_id" INTEGER NOT NULL,
    CONSTRAINT "property_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
