-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "media_id" TEXT,
    CONSTRAINT "user_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "media" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "property" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "owner_id" TEXT NOT NULL,
    CONSTRAINT "property_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "media" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "source" TEXT
);

-- CreateTable
CREATE TABLE "property_media" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "property_id" TEXT,
    "media_id" TEXT,
    CONSTRAINT "property_media_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "property" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "property_media_media_id_fkey" FOREIGN KEY ("media_id") REFERENCES "media" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "review" TEXT,
    "rating" TEXT,
    "property_id" TEXT,
    "owner_id" TEXT NOT NULL,
    CONSTRAINT "review_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "property" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "review_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "feature" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "active" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "perk" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "active" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "property_feature" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "property_id" TEXT,
    "feature_id" TEXT,
    CONSTRAINT "property_feature_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "property" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "property_feature_feature_id_fkey" FOREIGN KEY ("feature_id") REFERENCES "feature" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "property_perk" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "property_id" TEXT,
    "perk_id" TEXT,
    CONSTRAINT "property_perk_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "property" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "property_perk_perk_id_fkey" FOREIGN KEY ("perk_id") REFERENCES "perk" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
