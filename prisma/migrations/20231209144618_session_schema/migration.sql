-- AlterTable
ALTER TABLE "User" ADD COLUMN     "sessionId" TEXT;

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE SET NULL ON UPDATE CASCADE;
