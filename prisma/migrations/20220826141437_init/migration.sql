-- CreateTable
CREATE TABLE "feature" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "active" BOOLEAN NOT NULL,
    "propertyId" INTEGER,
    CONSTRAINT "feature_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "property" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "property_feature" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "property_id" INTEGER,
    "feature_id" INTEGER,
    CONSTRAINT "property_feature_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "property" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "property_feature_feature_id_fkey" FOREIGN KEY ("feature_id") REFERENCES "feature" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
