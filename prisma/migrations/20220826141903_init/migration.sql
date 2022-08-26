-- CreateTable
CREATE TABLE "perk" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "active" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "property_perk" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "property_id" INTEGER,
    "perk_id" INTEGER,
    CONSTRAINT "property_perk_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "property" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "property_perk_perk_id_fkey" FOREIGN KEY ("perk_id") REFERENCES "perk" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
