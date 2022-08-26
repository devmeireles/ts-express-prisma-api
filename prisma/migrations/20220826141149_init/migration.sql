-- CreateTable
CREATE TABLE "review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "review" TEXT,
    "rating" TEXT,
    "property_id" INTEGER,
    "owner_id" INTEGER NOT NULL,
    CONSTRAINT "review_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "property" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "review_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
