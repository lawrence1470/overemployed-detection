-- AlterTable
ALTER TABLE "Waitlist" ADD COLUMN     "depositAmount" INTEGER,
ADD COLUMN     "depositDate" TIMESTAMP(3),
ADD COLUMN     "depositStatus" TEXT NOT NULL DEFAULT 'none',
ADD COLUMN     "stripePaymentId" TEXT;

-- CreateIndex
CREATE INDEX "Waitlist_depositStatus_idx" ON "Waitlist"("depositStatus");
